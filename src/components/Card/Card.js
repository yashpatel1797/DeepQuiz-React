import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    return (
        <div className="card-vertical">
            <div className="image-container">
                <img
                    src={data.image}
                    alt={data.categoryName}
                    className="card-image"
                />
            </div>
            <div className="text-container">
                <div className="text-container-title">
                    <p>{data.categoryName}</p>
                </div>
                <div className="text-container-desc">
                    <p>Take this quiz to test your knowledge on {data.categoryName}!</p>
                    <p>5 Questions</p>
                </div>
                <Link to="" className="btn-solid-text">
                    <button className="btn btn-solid btn-icon-center">
                        <span className="material-icons"> save </span>Play Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export { Card }