import React, { Component } from 'react'
import { t } from 'ttag';
import FilterButton from './FilterButton'
import FilterForm from './FilterForm'

export default class FilterSection extends Component {
  constructor(props) {
    super(props)
    this.state = { activeFilter: '' };
    this.updateActiveFilter = (filter) => this._updateActiveFilter(filter);
  }

  _updateActiveFilter(filter) {
    this.setState({ activeFilter: filter })
  }

  render() {
    if (this.props.filterCollection.length == 1){
      return  (
        <div className="filter-section">
            <FilterForm
              activeFilter={this.props.filterCollection[0]}
              updateActiveFilter={()=>{}}
              {...this.props}
            />
        </div>
      )
    }
    return(
      <div className="filter-section">
        <div className='label'>
          {t`Filter`}
        </div>
        <div className='filters-bar'>
          {
            this.props.filterCollection.map((filter, index) => {
              const isActive = this.state.activeFilter === filter;
              return(
                <div key={index} className='wrapper'>
                  <FilterButton
                    filter={filter}
                    active={isActive}
                    updateActiveFilter={this.updateActiveFilter}
                  />
                  {
                    isActive &&
                    <FilterForm
                      activeFilter={this.state.activeFilter}
                      updateActiveFilter={this.updateActiveFilter}
                      {...this.props}
                    />
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
