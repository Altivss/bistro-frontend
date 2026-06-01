import { useState } from 'react'

export const useFeedback = () => {
  const [ratings, setRatings] = useState({})
  const [hoveredRating, setHoveredRating] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)

  const questions = [
    { id: 1, text: 'How would you rate the quality of your coffee?' },
    { id: 2, text: 'How satisfied are you with the variety of beverages offered?' },
    { id: 3, text: 'How would you rate the food/pastry quality?' },
    { id: 4, text: 'How would you rate the atmosphere and ambiance of the cafe?' },
    { id: 5, text: 'How clean is the cafe?' },
    { id: 6, text: 'How would you rate the customer service?' },
    { id: 7, text: 'How fast was the service?' },
    { id: 8, text: 'How would you rate the pricing?' },
    { id: 9, text: 'How would you rate the music/background ambiance?' },
    { id: 10, text: 'What is your overall experience at Bethel Cafe?' }
  ]

  const handleRating = (questionId, rating) => {
    setRatings(prev => ({
      ...prev,
      [questionId]: rating
    }))
  }

  const handleFeedbackChange = (text) => {
    setFeedback(text)
  }

const handleSubmit = async () => {
  try {
    const ratingValues = Object.values(ratings)
    const rating = ratingValues.length > 0 
      ? Math.round(ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length)
      : 0

    console.log("📊 Submitting feedback with rating:", rating, "from", ratingValues)

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
    const res = await fetch(`${apiUrl}/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        customer_name: "Anonymous",
        email: "anonymous@email.com",
        phone: "",
        category_id: 1,
        rating: rating,
        message: feedback?.trim() || "No additional comments"
      })
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      console.error("Validation error:", data)
      console.error("Status:", res.status)
      if (data.errors) {
        console.error("Field errors:", data.errors)
      }
      if (data.message) {
        console.error("Message:", data.message)
      }
      return
    }

    console.log("✅ Feedback saved successfully:", data)
    setSubmitted(true)

  } catch (err) {
    console.error(err)
  }
}

  const resetForm = () => {
    setRatings({})
    setFeedback('')
    setSubmitted(false)
  }

  const setHoveredQuestionRating = (questionId, rating) => {
    setHoveredRating(prev => ({
      ...prev,
      [questionId]: rating
    }))
  }

  const calculateAverageRating = () => {
  const values = Object.values(ratings)

  if (values.length === 0) return 1 // MUST NOT be 0

  const sum = values.reduce((a, b) => a + Number(b), 0)

  return Math.max(1, Math.min(5, Math.round(sum / values.length)))
}

  return {
    ratings,
    hoveredRating,
    submitted,
    feedback,
    questions,
    loading,
    handleRating,
    handleFeedbackChange,
    handleSubmit,
    resetForm,
    setHoveredQuestionRating
  }
}