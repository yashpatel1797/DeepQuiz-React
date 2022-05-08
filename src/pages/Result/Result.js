import React from 'react'
import { useQuiz } from 'context';
import styles from "./Result.module.css"
import { Link } from 'react-router-dom';

const Result = () => {
    const { quiz, answers, currentQuestionIndex, quizDispatch } = useQuiz();


    const calculateScore = (quiz, answers) => {
        let score = 0;
        score = quiz.reduce((acc, curr) =>
            curr.options.find(({ _id }) => _id === answers[curr._id])?.isCorrect ? acc + 10 : acc, score);
        return score;
    }

    return (
        <>
            <div className={`${styles.container} container`}>
                <div className={styles["container-body"]}>
                    <h2>Quiz Result</h2>
                    <p className={`${styles.result} fn-size-l`}>
                        Final Score: {calculateScore(quiz.mcqs, answers)}
                    </p>
                    <div className={`${styles["questions-heading"]}`}>
                        <p> Total Question: {quiz.mcqs.length}</p>
                    </div>
                    {quiz.mcqs.map((data) =>
                        <div key={data._id}>
                            <div className={`${styles["questions-title"]}`}>
                                <h1>
                                    {data.question}
                                </h1>
                            </div>
                            <div className={`${styles["questions-option"]}`}>
                                {data.options.map(({ _id, option, isCorrect }) =>
                                    <button
                                        key={_id}
                                        className={`${isCorrect ? styles.correct : ""} ${_id === answers[data._id] && !isCorrect ? styles.wrong : ""} btn btn-outline `}>
                                        {option}
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                    <Link to="/" className={styles.result}>
                        <button className="btn btn-solid"
                            onClick={() => quizDispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: 0 })}>Go to Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export { Result }