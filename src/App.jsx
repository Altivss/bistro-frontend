import './App.css'
import FeedbackPage from './pages/FeedbackPage'
import { useFeedback } from './hooks/useFeedback'

function App() {
  const {
    ratings,
    hoveredRating,
    submitted,
    feedback,
    questions,
    handleRating,
    handleFeedbackChange,
    handleSubmit,
    resetForm,
    setHoveredQuestionRating
  } = useFeedback()

  return (
    <FeedbackPage
  questions={questions}
  ratings={ratings}
  hoveredRating={hoveredRating}
  submitted={submitted}
  feedback={feedback}
  onRating={handleRating}
  onHover={setHoveredQuestionRating}
  onHoverLeave={(questionId) => setHoveredQuestionRating(questionId, 0)}
  onFeedbackChange={handleFeedbackChange}
  onSubmit={handleSubmit}
  onReset={resetForm}
/>
  )
}

export default App
