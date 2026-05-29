import FeedbackForm from '../components/FeedbackForm'
import ThankYouCard from '../components/ThankYouCard'

const FeedbackPage = ({
  questions = [],
  ratings = {},
  hoveredRating = {},
  submitted = false,
  feedback = '',
  onRating = () => {},
  onHover = () => {},
  onHoverLeave = () => {},
  onFeedbackChange = () => {},
  onSubmit = () => {},
  onReset = () => {}
}) => {
  if (submitted) {
    return (
      <div className="container">
        <ThankYouCard
          questions={questions}
          ratings={ratings}
          onReset={onReset}
        />
      </div>
    )
  }

  return (
    <div className="container">
      <div className="feedback-card">
        <div className="header">
          <h1 className="cafe-title">Bethel Cafe</h1>
          <p className="cafe-subtitle">
            Customer Feedback & Rating System
          </p>
        </div>

        <FeedbackForm
          questions={questions}
          ratings={ratings}
          hoveredRating={hoveredRating}
          feedback={feedback}
          onRating={onRating}
          onHover={onHover}
          onHoverLeave={onHoverLeave}
          onFeedbackChange={onFeedbackChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default FeedbackPage