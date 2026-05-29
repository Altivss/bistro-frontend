import QuestionBlock from './QuestionBlock'
import CommentsSection from './CommentsSection'

const FeedbackForm = ({
  questions,
  ratings,
  hoveredRating,
  feedback,
  onRating,
  onHover,
  onHoverLeave,
  onFeedbackChange,
  onSubmit
}) => {
  return (
    <div className="form-content">

      {Array.isArray(questions) &&
        questions.map((question, idx) => (
          <QuestionBlock
            key={question.id}
            question={question}
            number={idx + 1}
            rating={ratings?.[question.id] ?? 0}
            hovered={hoveredRating?.[question.id] ?? 0}
            onRate={onRating}
            onHover={onHover}
            onHoverLeave={onHoverLeave}
          />
        ))
      }

      <CommentsSection
        value={feedback}
        onChange={onFeedbackChange}
      />

      <button
        type="button"
        className="submit-button"
        onClick={onSubmit}
      >
        Submit Feedback
      </button>

    </div>
  )
}

export default FeedbackForm