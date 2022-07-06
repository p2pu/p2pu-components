import React, { Component } from 'react'
import axios from 'axios';
import {t} from 'ttag';
import {CitySelect} from './CitySelect'
import Select from '../InputFields/Select';

const OnlineFilters = {
	EVERYTHING: null,
	ONLINE: "true",
	IN_PERSON: "false",
}

export default class LocationFilter extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      useLocation: (Boolean(props.latitude) && Boolean(props.longitude)),
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.latitude === null && this.props.longitude === null) {
        this.setState({ useLocation: false })
      }
    }
  }

  getLocation = (e) => {
    const useGeolocation = e.target.checked;
    

    this.setState({ gettingLocation: useGeolocation, useLocation: useGeolocation, error: null });

    if (useGeolocation === false) {
      this.props.updateQueryParams({ latitude: null, longitude: null, useLocation: useGeolocation });
      return;
    }

    const success = (position) => {
      this.props.updateQueryParams({ latitude: position.coords.latitude, longitude: position.coords.longitude, city: null })
      this.detectDistanceUnit(position.coords.latitude, position.coords.longitude);
      this.setState({ gettingLocation: false });
    }

    const error = () => {
      this.setState({ error: t`Unable to detect location.`, gettingLocation: false, useLocation: false})
      this.props.updateQueryParams({ latitude: null, longitude: null, useLocation: useGeolocation });
    }

    const options = {
      timeout: 10000,
      maximumAge: 60000
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error, options)
    } else {
      this.setState({ error: t`Geolocation is not supported by this browser.`, gettingLocation: false, useLocation: false})
      this.props.updateQueryParams({ latitude: null, longitude: null, useLocation: useGeolocation });
    }
  }

  detectDistanceUnit = (lat, lon) => {
    const countriesUsingMiles = ['US', 'GB', 'LR', 'MM'];
    const url = `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lon}&username=p2pu`;

    axios.get(url)
      .then(res => {
        const useMiles = countriesUsingMiles.indexOf(res.countryCode) >= 0;
        // update distance so that options in dropdown remains 5, 10, 25, ...
        // regardless of kilometer of miles
        let distance = this.props.distance;
        if (useMiles != this.props.useMiles){
          distance = useMiles?distance*1.6:distance*0.625;
        }
        this.props.updateQueryParams({ useMiles, distance })
      })
  }

  generateLocationLabel = () => {
    let label = t`Use my current location`;

    if (this.state.error) {
      label = this.state.error;
    } else if (this.state.gettingLocation) {
      label = t`Detecting your location...`;
    } else if (!this.state.gettingLocation && this.props.latitude && this.props.longitude) {
      label = t`Using your current location`;
    }

    return label;
  }

  handleCitySelect = (city) => {
    // want to get lat and lon for city
    this.props.updateQueryParams({ ...city, latitude: null, longitude: null });
    this.setState({ useLocation: false, error: null });
  }

  handleRangeChange = ({range}) => {
    let distance = range;
    if (this.props.useMiles) {
      return this.props.updateQueryParams({ distance: distance * 1.6 })
    }
    this.props.updateQueryParams({ distance });
  }

  handleOnlineFilter = (filter) => {
    this.props.updateQueryParams({ online: filter })
  }

  generateDistanceSliderLabel = () => {
    const unit = this.props.useMiles ? t`miles` : t`km`;
    const value = this.generateDistanceValue();
    return t`Within ${value} ${unit}`;
  }

  generateDistanceValue = () => {
    const value = this.props.useMiles ? this.props.distance * 0.625 : this.props.distance;
    return Math.round(value / 5) * 5;
  }

  render() {
    const distanceValue = this.generateDistanceValue();

    return (
      <form className="filter">
        <label htmlFor="search-input" className="form-label">Location</label>
        <div className="search-input my-2 my-md-0">
          <CitySelect
            name='city'
            value={this.props.city}
            isClearable={true}
            handleChange={this.handleCitySelect}
            placeholder={t`Start typing a city name`}
            origin={this.props.origin}
          />
        </div>

        <div className="d-flex flex-column align-items-center p-3">
          <div className="divider-line"></div>
          <div className="divider-text">or</div>
        </div>

        <div className="input-group-md has-validation">
          <input 
            type="checkbox" 
            checked={this.state.useLocation || false}
            onChange={this.getLocation}
            className={this.state.error?'is-invalid':''}
          />
          <span>Within</span>
          <Select
            className="flex-grow-1" 
            name="range"
            options={[5, 10, 25, 50, 100].map(d => ({label: `${d}`, value: d}))}
            value={distanceValue}
            handleChange={this.handleRangeChange}
          />
          { this.props.useMiles && <span>miles of my current location</span> }
          { !this.props.useMiles && <span>kilometers of my current location</span> }
          <span className="material-icons">place </span>
          { this.state.error &&
            <div className="invalid-feedback">{ this.state.error }</div>
          }
        </div>
        <div className="my-3">
          <label htmlFor="search-input" className="form-label">In Person or Online</label>
          <span>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="online-filter" 
              id="everything" 
              checked={
                this.props.online === OnlineFilters.EVERYTHING || 
                this.props.online === undefined
              } 
              onChange={() => this.handleOnlineFilter(OnlineFilters.EVERYTHING)}
            />
            <label className="form-check-label" htmlFor="everything">
              Everything
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="online-filter" 
              id="online"
              checked={this.props.online === OnlineFilters.ONLINE} 
              onChange={() => this.handleOnlineFilter(OnlineFilters.ONLINE)} 
            />
            <label className="form-check-label" htmlFor="online">
              Online
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="online-filter" 
              id="in-person"
              checked={this.props.online === OnlineFilters.IN_PERSON}
              onChange={() => this.handleOnlineFilter(OnlineFilters.IN_PERSON)}
            />
            <label className="form-check-label" htmlFor="in-person">
              In person
            </label>
          </div>
          </span>
        </div>
      </form>
    );
  }
}
