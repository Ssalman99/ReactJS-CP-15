// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  rightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActive = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="profile-container">
        <img src={imgUrl} alt={username} className="profile" />
        <p className="user-name">{username}</p>
        <p className="name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  leftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {activeReviewIndex} = this.state

    const currentList = reviewsList[activeReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="button-container">
          <button
            className="button"
            type="button"
            alt="leftArrow"
            onClick={this.leftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="img-arrow"
            />
          </button>

          {this.renderActive(currentList)}

          <button
            className="button"
            type="button"
            onClick={this.rightArrow}
            data-testid="rightArrow"
            alt="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="img-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
