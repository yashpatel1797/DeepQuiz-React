import React from 'react'
import { useQuiz } from 'context';
import styles from "./Question.module.css"
import { useNavigate } from "react-router-dom";

const Question = () => {
    const { quizDispatch, quiz, currentQuestionIndex } = useQuiz();
    const { mcqs } = quiz;
    const navigate = useNavigate();
    const answer = mcqs[currentQuestionIndex].answer

    const optionHandler = (selectedAnswer, question) => {
        quizDispatch({
            type: "SELECTED_ANSWERS",
            payload: {
                quizId: quiz._id,
                questionId: question._id,
                selectedAnswer: selectedAnswer,
            }
        })
        currentQuestionIndex + 1 !== mcqs.length ? quizDispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: currentQuestionIndex + 1 }) : navigate("/result")
    }
    return (
        <div className={`${styles.container} container`}>
            <div className={styles["container-body"]}>
                <div className={styles["questions-heading"]}>
                    <p>Question: 1/5</p>
                </div>
                <div className="questions-title">
                    <h1>
                        {mcqs[currentQuestionIndex].question}
                    </h1>
                </div>
                <div className={styles["questions-option"]}>
                    {mcqs[currentQuestionIndex].options.map(({ _id, option, isCorrect }) =>
                        <button className={`btn btn-outline`}
                            onClick={() => optionHandler(_id, mcqs[currentQuestionIndex])}
                            key={_id}>{option}</button>
                    )}
                </div>
            </div>
        </div>

    )
}

export { Question }