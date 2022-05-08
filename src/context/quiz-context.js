import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "reducer";
const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [quizState, quizDispatch] = useReducer(quizReducer, {
        quiz: [],
        quizId: "",
        answers: null,
        currentQuestionIndex: 0
    })
    const { quiz, answers, currentQuestionIndex } = quizState;
    return (<QuizContext.Provider value={{ quiz, answers, currentQuestionIndex, quizDispatch }}>
        {children}
    </QuizContext.Provider>)
}

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider }