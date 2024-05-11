import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const buttonItem = () => {
    deleteList(id)
  }
  return (
    <li className="list-container">
      <div className="history-detaile-cont">
        <p className="time">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" onClick={buttonItem}>

          <img
            
            type="button"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
