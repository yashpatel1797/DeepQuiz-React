import axios from 'axios';
import { useQuiz } from 'context';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuiz } from "utilities"
import { Question, Loader, Rules } from 'components';
const Quiz = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [showRules, setShowRules] = useState(true)
    const { quizId } = useParams();
    const { quizDispatch, quiz, currentQuestionIndex } = useQuiz();
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            getQuiz(quizId, quizDispatch);
            setIsLoading(false)

        })()
    }, [quizId, quizDispatch])
    return (
        <>
            {isLoading ? <Loader /> : showRules ? <Rules setShowRules={setShowRules} /> : <Question />}
        </>

    )
}

export { Quiz }