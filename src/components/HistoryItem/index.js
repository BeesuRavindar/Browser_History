import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="logo-text-delete-container">
        <div className="logo-text-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="text-container">
            <h1 className="title">{title}</h1>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-container">
          <button
            type="button"
            testid="delete"
            className="delete-button"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
