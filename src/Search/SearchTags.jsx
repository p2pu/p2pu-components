import React from 'react';
import { t, jt, ngettext, msgid } from 'ttag';

import {isoCodeToLangName} from '../utils/i18n';
import { MEETING_DAYS, SEARCH_SUBJECTS, COURSES_SORT_OPTIONS } from '../utils/constants';


const SearchTag = ({ value, onDelete }) => {
  return(
    <div className='search-tag'>
      {value}
      <i className="material-icons" onClick={ () => onDelete(value) } style={{ cursor: 'pointer' }}>clear</i>
    </div>
  )
}

const SearchTags = (props) => {
  const generateQueryTag = () => {
    if (props.q) {
      const onDelete = (value) => { props.updateQueryParams({ q: null }) }

      return [<SearchTag key='queryTag-0' value={props.q} onDelete={onDelete} />];
      return [<span key='queryTagIntro'>the search query</span>, <SearchTag key='queryTag-0' value={props.q} onDelete={onDelete} />];
    }
  }

  const generateTeamNameTag = () => {
    if (props.teamName) {
      const onDelete = (value) => {
        props.updateQueryParams({ teamName: null, team_id: null })
        document.getElementById('team-title').style.display = 'none';
        document.getElementById('search-subtitle').style.display = 'block';
      }
      const humanReadableName = decodeURIComponent(props.teamName);

      return [<SearchTag key='queryTag-0' value={humanReadableName} onDelete={onDelete} />];
      return [<span key='queryTagIntro'>organized by</span>, <SearchTag key='queryTag-0' value={humanReadableName} onDelete={onDelete} />];
    }
  }

  const generateLanguageTag = () => {
    if (props.languages && props.languages.length > 0) {
      const onDelete = (value) => {
        const newLanguagesArray = props.languages.filter(v => v != value);
        const languages = newLanguagesArray.length > 0 ? newLanguagesArray : null
        props.updateQueryParams({ languages })
      }

      const introPhrase = props.languages.length === 1 ? 'in' : 'in';
      let languagesTagsArray = [<span key='languageTagIntro'>{introPhrase}</span>]

      props.languages.map((item, index) => {
        if (props.languages.length > 1 && index === (props.languages.length - 1)) {
          languagesTagsArray.push(<span key={`languageTag-${index + 2}`}>or</span>)
        }
        let languageName = isoCodeToLangName(item)

        languagesTagsArray.push(<SearchTag value={languageName} key={`languageTag-${index}`} onDelete={() => onDelete(item)} />)
      })

      return languagesTagsArray;
    }
  }

  const generateOrderTag = () => {
    if (props.searchSubject === 'courses' && props.order) {
      const onDelete = (value) => { props.updateQueryParams({ order: null }) };
      const order = COURSES_SORT_OPTIONS.find(order => order.value == props.order)

      return [<span key='queryTagIntro'>sorted by </span>, <SearchTag key='queryTag-0' value={order.label} onDelete={onDelete} />];
    }
  }

  const generateOerTag = () => {
    if (props.oer) {
      const onDelete = (value) => { props.updateQueryParams({ oer: false }) };

      return [<span key='queryTagIntro'>that are </span>, <SearchTag key='queryTag-0' value={"OER"} onDelete={onDelete} />];
    }
  }

  const generateOnlineTag = () => {
    if (props.online !== null) {
      const onDelete = (value) => { props.updateQueryParams({ online: null }) };

      if (props.online === 'true'){
        return [<SearchTag key='queryTag-0' value={"Meeting online"} onDelete={onDelete} />];
      } else {
        return [<SearchTag key='queryTag-0' value={"Meeting in person"} onDelete={onDelete} />];
      }
    }
  }


  const generateTopicsTags = () => {
    if (props.topics && props.topics.length > 0) {
      const onDelete = (value) => {
        const newTopicsArray =  props.topics.filter(v => v != value);
        const topics = newTopicsArray.length > 0 ? newTopicsArray : null
        props.updateQueryParams({ topics })
      }

      const introPhrase = props.topics.length === 1 ? 'the topic' : 'the topics';
      let topicsTagsArray = [<span key='topicTagIntro'>{introPhrase}</span>]
      topicsTagsArray = []; // TODO

      props.topics.map((item, index) => {
        if (props.topics.length > 1 && index === (props.topics.length - 1)) {
          topicsTagsArray.push(<span key={`topicTag-${index + 2}`}>or</span>)
        }

        topicsTagsArray.push(<SearchTag value={item} key={`topicTag-${index}`} onDelete={onDelete} />)
      })

      return topicsTagsArray;
    }
  }

  const generateLocationTag = () => {
    if (props.latitude && props.longitude) {
      const unit = props.useMiles ? 'miles' : 'km';
      let value = props.useMiles ? props.distance * 0.62 : props.distance;
      value = Math.round(value / 5) * 5;
      const text = t`Within ${ value } ${ unit }`;
      const onDelete = (value) => {
        props.updateQueryParams({ latitude: null, longitude: null, distance: 50 })
      }
      return [<SearchTag key='locationTag-0' value={text} onDelete={onDelete} />];
      return [<span key='locationTagIntro'>located</span>, <SearchTag key='locationTag-0' value={text} onDelete={onDelete} />];
    } else if (props.city) {
      const onDelete = (value) => {
        props.updateQueryParams({ city: null })
      }
      return [<SearchTag key='locationTag-0' value={props.city} onDelete={onDelete} />];
      return [<span key='locationTagIntro'>located in</span>, <SearchTag key='locationTag-0' value={props.city} onDelete={onDelete} />];
    }
  }

  const generateTagsPhrase = (tag) => {
    switch (tag) {
      case 'q':
      return generateQueryTag();
      case 'topics':
      return generateTopicsTags();
      case 'location':
      return generateLocationTag();
      case 'teamName':
      return generateTeamNameTag();
      case 'language':
      return generateLanguageTag();
      case 'order':
      return generateOrderTag();
      case 'oer':
      return generateOerTag();
      case 'online':
      return generateOnlineTag();
    }
  }

  const generateSearchSummary = () => {
    let searchSummaryItems = []
    const forSearchSubject = <span key='resultsSummary-1'>for {SEARCH_SUBJECTS[props.searchSubject]}</span>;
    const withSpan = <span key='resultsSummary-2'>with</span>;
    const tagsToDisplay = ['q', 'topics', 'location', 'meetingDays', 'language', 'teamName', 'order', 'oer', 'online'];
    const resultsCount =
      <span key='resultsSummary-0'>{
        ngettext(
          msgid`Showing ${props.searchResults.length} of ${props.totalResults} result`,
          `Showing ${props.searchResults.length} of ${props.totalResults} results`,
          props.totalResults
        )
      }</span>

    if (props.searchSubject === 'courses') {
      searchSummaryItems.push(resultsCount)
    }

    tagsToDisplay.map((tag) => {
      const tagsArray = generateTagsPhrase(tag);

      if (!!tagsArray) {
        if (searchSummaryItems.length === 1) {
          // TODO searchSummaryItems.push(forSearchSubject)
          if (tag === 'q' || tag === 'topics') {
            // TODO searchSummaryItems.push(withSpan)
          }
        } else {
          // TODO searchSummaryItems.push(<span key={`resultsSummary-${searchSummaryItems.length}`}>and</span>)
        }
        searchSummaryItems.push(tagsArray)
      }
    })

    return searchSummaryItems;
  }

  const reloadWindow = () => {
    if (typeof window !== `undefined`) {
      window.history.replaceState({}, document.title, window.location.pathname)
      window.location.reload()
    }
  }

  const noResults = props.searchResults.length === 0;
  const resetButton = <button key="reset-search" onClick={reloadWindow} className='p2pu-btn light with-outline'>{t`reset the search form`}</button>;

  return(
    <div className='results-summary'>
      <div className='search-tags wrapper'>
        {generateSearchSummary()}
      </div>
      { noResults && !props.isLoading &&
        <div className='clear-search'>
          {jt`To see more results, either remove some filters or ${resetButton}`}
        </div>
      }
    </div>
  )
}

export default SearchTags;
