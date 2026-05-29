const StarRating = ({ questionId, rating, hovered, onRate, onHover, onHoverLeave }) => {
  return (
    <div className="rating-container">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          className={`star-button ${hovered >= star ? 'hovered' : ''} ${
            rating >= star ? 'selected' : ''
          }`}
          onClick={() => onRate(questionId, star)}
          onMouseEnter={() => onHover(questionId, star)}
          onMouseLeave={() => onHoverLeave(questionId)}
          title={`Rate ${star} stars`}
        >
          ⭐
        </button>
      ))}
      <span className="rating-label">{rating ? `${rating} / 5` : 'Rate now'}</span>
    </div>
  )
}

export default StarRating
