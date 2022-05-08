import React, { useState, useEffect } from 'react'
import "./FeatureCategory.css"
import axios from 'axios'
import { Card } from ".."

const FeatureCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        (async () => {
            const { data: { quizes } } = await axios.get("/api/quizzes");
            setCategory(quizes);
        })()
    }, [])
    return (
        <>
            <h2 className="featured-title">Featured category</h2>
            <div className="grid-3-column" id="category">
                {category.slice(0, 3).map(data => <Card data={data} key={data._id} />)}
            </div>
        </>
    )
}

export { FeatureCategory }