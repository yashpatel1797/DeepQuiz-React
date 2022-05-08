import axios from "axios"
const getQuiz = async (quizId, dispatch) => {
    const { data } = await axios.get(`/api/quizzes/${quizId}`)
    dispatch({ type: "INITIAL_QUIZ", payload: data.quiz })
}

export { getQuiz }