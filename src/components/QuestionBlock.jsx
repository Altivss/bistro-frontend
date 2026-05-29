import StarRating from './StarRating'

const QuestionBlock = ({
  question,
  number,
  rating,
  hovered,
  onRate,
  onHover,
  onHoverLeave
}) => {

  if (!question) return null

  return (
    <div className="question-block">
      <div className="question-header">
        <span className="question-number">Q{number}</span>
        <label className="question-text">
          {question.text}
        </label>
      </div>

      <StarRating
        questionId={question.id}
        rating={rating || 0}
        hovered={hovered || 0}
        onRate={onRate}
        onHover={onHover}
        onHoverLeave={onHoverLeave}
      />
    </div>
  )
}

export default QuestionBlock