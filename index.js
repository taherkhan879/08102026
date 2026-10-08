import {useState} from 'react'
import './index.css'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(prevState => !prevState)
  }

  // Slice the description to first 170 characters
  const initialText = reactHooksDescription.slice(0, 170)

  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="title">React Hooks</h1>
        <p className="subtitle">Hooks are a new addition to React</p>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <p className="description">
          {isExpanded ? reactHooksDescription : initialText}
        </p>
        <button type="button" className="button" onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  )
}

export default ReadMore
