const CommentsSection = ({ value, onChange }) => {
  return (
    <div className="comments-section">
      <label htmlFor="comments" className="comments-label">
        Additional Comments (Optional)
      </label>
      <textarea
        id="comments"
        className="comments-input"
        placeholder="Share any additional feedback or suggestions..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows="4"
      />
    </div>
  )
}

export default CommentsSection
