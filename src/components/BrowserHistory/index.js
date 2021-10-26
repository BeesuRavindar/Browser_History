import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="header">
          <div>
            <img
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="search-container">
            <div className="search-input-container">
              <div className="search-logo-container">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                type="search"
                className="search-input"
                placeholder="Search History"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <div className="history-container">
          <ul className="history-items-container">
            {searchResults.map(eachHistory => (
              <HistoryItem
                historyDetails={eachHistory}
                key={eachHistory.id}
                deleteHistoryItem={this.deleteHistoryItem}
              />
            ))}
          </ul>
          {searchResults.length === 0 && (
            <p className="error-msg">Their is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
