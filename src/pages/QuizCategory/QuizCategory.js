import React, { useState, useEffect } from 'react'
import { Card } from "components"
import axios from 'axios'
import styles from "./QuizCategory.module.css"
const QuizCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        (async () => {
            const { data: { categories } } = await axios.get("/api/categories");
            setCategory(categories);
        })()
    }, [])
    return (
        <>
            <div class="spacer-3rem"></div>
            <h2 class="featured-title">Quiz Category</h2>
            <div className={`grid-4-column ${styles.center}`} id="category">
                {category.map(data => <Card data={data} key={data._id} />)}
            </div>
        </>
    )
}

export { QuizCategory }