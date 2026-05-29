const ThankYouCard = ({ questions, ratings, onReset }) => {
  return (
    <div className="thank-you-card">
      <div className="thank-you-header">
        <h1>🎉 Thank You!</h1>
        <p className="cafe-name">Bethel Cafe</p>
      </div>
      <div className="thank-you-content">
        <p className="message">Thank you for taking the time to share your feedback!</p>
        <p className="subtitle">Your input helps us serve you better.</p>
        <p className="submitted-date">Submitted on: {new Date().toLocaleDateString()}</p>
        <div className="rating-summary">
          <h3>Your Ratings Summary</h3>
          <div className="summary-grid">
            {questions.map(q => (
              <div key={q.id} className="summary-item">
                <span className="summary-label">Q{q.id}</span>
                <span className="summary-rating">{'⭐'.repeat(ratings[q.id])}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="reset-button" onClick={onReset}>
          Give Another Feedback
        </button>
      </div>
    </div>
  )
}

export default ThankYouCard
