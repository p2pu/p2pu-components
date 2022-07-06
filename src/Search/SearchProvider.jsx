import React, { Component } from 'react'
import { t } from 'ttag';
import queryString from 'query-string';

import { SEARCH_PROPS, API_ENDPOINTS, OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants'
import ApiHelper from '../utils/apiHelper'


export default class SearchProvider extends Component {
  constructor(props) {
    super(props)
    this.initialState = this.setInitialState()
    this.state = this.initialState;
    this.handleChange = (s) => this._handleChange(s);
    this.handleInputChange = () => this._handleInputChange();
    this.handleSearchBarSubmit = (query) => this._handleSearchBarSubmit(query);
    this.searchCallback = (response, opts) => this._searchCallback(response, opts);
    this.updateQueryParams = (params) => this._updateQueryParams(params);
    this.sendQuery = (opts) => this._sendQuery(opts);
    this.loadInitialData = () => this._loadInitialData();
    this.apiHelper = new ApiHelper(this.props.searchSubject, this.props.origin);
  }

  setInitialState = () => {
    let defaults = {
      searchResults: [],
      totalResults: 0,
      distance: 16, // this is in km, use miles below indicates UI display
      useMiles: true,
      limit: 21,
      offset: 0,
      isLoading: false,
      hasMoreResults: false,
      appendResults: false,
      order: this.props.searchSubject === 'learningCircles' ? 'first_meeting_date' : null
    }

    let parsedParams = queryString.parse(window.location.search, { arrayFormat: 'comma' });
    const arrayItems = API_ENDPOINTS[this.props.searchSubject].arrayItems;

    arrayItems.forEach(term => {
      if (parsedParams[term] && typeof(parsedParams[term]) === "string") {
        parsedParams[term] = [parsedParams[term]]
      }
    })

    let resultsTab;

    if (this.props.searchSubject === 'learningCircles') {
      defaults.signup = 'open'
      defaults.resultsTab = parsedParams.signup && parsedParams.signup == 'closed' ? 1 : 0
      defaults.online = null
    }

    return {
      ...defaults,
      ...this.props.initialState,
      ...parsedParams
    }
  }

  componentDidMount() {
    const { scrollContainer } = this.props;
    const scrollContainerEl = scrollContainer ? document.querySelector(scrollContainer) : document.body

    const getScrollTop = scrollContainer ? () => { return scrollContainerEl.scrollTop } : () => { return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop }

    scrollContainerEl.onscroll = () => {
      const { isLoading, hasMoreResults } = this.state;
      if (isLoading || !hasMoreResults) {
        return;
      }

      const scrollTop = getScrollTop()
      const scrollHeight = (document.querySelector(".search-results") && document.querySelector(".search-results").scrollHeight) || document.body.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom && !this.state.isLoading) {
        this.updateQueryParams({ offset: this.state.searchResults.length, appendResults: true })
      }
    };

    this.loadInitialData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.updateResultsTab(0)
    }
  }

  _loadInitialData() {
    this.sendQuery({ initialQuery: true });
  }

  _sendQuery(opts={}) {
    const params = this.state;
    const options = { params, callback: this.searchCallback, ...opts };

    this.apiHelper.fetchResource(options);
  }

  _updateQueryParams(params) {
    this.setState({ ...params, isLoading: true }, () => {
      this.sendQuery()
      this.updateURL()
    })
  }

  updateURL = params => {
    const searchParams = API_ENDPOINTS[this.props.searchSubject].searchParams;
    const privateParams = API_ENDPOINTS[this.props.searchSubject].privateParams;
    const allowedParams = Object.keys(this.state)
      .filter(key => (searchParams.includes(key) && !privateParams.includes(key)))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: this.state[key]
        };
      }, {});

    const query = queryString.stringify(allowedParams, { skipNull: true, skipEmptyString: true, arrayFormat: 'comma' })
    window.history.replaceState(allowedParams, document.title, `${window.location.pathname}?${query}`)
  }

  _handleChange(selected) {
    const query = selected ? selected.label : selected;
    this.props.searchByLocation(query);
    this.setState({ value: selected });
  }

  _handleInputChange() {
    this.props.clearResults();
  }

  _searchCallback(response, opts) {
    const results = this.state.appendResults ? this.state.searchResults.concat(response.items) : response.items;

    this.setState({
      searchResults: results,
      currentQuery: opts.params,
      totalResults: response.count,
      offset: 0,
      isLoading: false,
      appendResults: false,
      hasMoreResults: response.count > 0 && results.length < response.count,
      initialQuery: opts.initialQuery,
      signupOpenCount: response.signup_open_count,
      signupClosedCount: response.signup_closed_count,
    })
  }

  updateResultsTab = (tabIndex) => {
    this.setState({ searchResults: [] })
    this.updateQueryParams({
      resultsTab: tabIndex,
      signup: tabIndex === 0 ? 'open' : 'closed',
      order: tabIndex === 0 ? 'first_meeting_date' : 'last_meeting_date',
    })
  }

  render() {
    const showNoResultsComponent = this.state.totalResults === 0 && this.state.initialQuery && !Boolean(window.location.search);

    return(
      <>
        { 
          React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
              updateQueryParams: this.updateQueryParams,
              searchSubject: this.props.searchSubject,
              order: this.props.order,
              results: this.state.searchResults,
              updateResultsTab: this.updateResultsTab,
              showNoResultsComponent: true,
              ...this.state,
              ...this.props
            })
        )}
      </>
    )
  }
}
