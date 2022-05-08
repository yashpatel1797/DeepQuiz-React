import axios from 'axios';
import { useQuiz } from 'context';
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./Rules.module.css"
const Rules = ({ setShowRules }) => {
    const { state } = useLocation();
    const { quiz, quizDispatch } = useQuiz();


    const startHandler = () => {
        setShowRules(false)
        quizDispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: 0 })
    }
    return (
        <div className={`${styles.container} container`}>
            <div className={`${styles.rules} ${styles.container} container`}>
                <h2>Rules</h2>
                <div className="spacer-2rem"></div>
                <div className="fn-size-m">
                    <p className={`${styles["rules-info"]}`}>
                        <span className="material-icons-round"> star </span> Each right answer
                        scores 10 Points
                    </p>
                    <p className={`${styles["rules-info"]}`}>
                        <span className="material-icons-round"> star </span> Each multiple
                        choice question has only one correct answer
                    </p>
                    <p className={`${styles["rules-info"]}`}>
                        <span className="material-icons-round"> star </span> To win the quiz you
                        need to score more than 70%
                    </p>
                </div>
                <div className="spacer-2rem"></div>
                <button className="btn btn-solid"
                    onClick={startHandler}>Start Quiz</button>
            </div>
        </div>
    )
}

export { Rules }