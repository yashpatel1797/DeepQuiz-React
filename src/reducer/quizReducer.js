const quizReducer = (state, { type, payload }) => {
    switch (type) {
        case "INITIAL_QUIZ":
            return { ...state, quiz: payload }
        case "SET_CURRENT_QUESTION_INDEX":
            return { ...state, currentQuestionIndex: payload }
        case "SELECTED_ANSWERS":
            console.log(payload);
            console.log(state);
            return {
                ...state,
                quizId: payload.quizId,
                answers: {
                    ...state.answers,
                    [payload.questionId]: payload.selectedAnswer,
                },
            }
        default:
            return state;
    }
}

export { quizReducer }