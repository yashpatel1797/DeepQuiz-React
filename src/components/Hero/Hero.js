import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className="intro">
                <div className="grid-50-50">
                    <div className="text-intro">
                        <h1>Quiz to check your hollywood directors knowledge</h1>
                        <p className="body-cp-lg">
                            Check you knowledge on hollywood movie directors and their movies.
                        </p>
                        <Link to="" className="btn-solid-text">
                            <button className="btn btn-solid">Quiz</button>
                        </Link>
                    </div>
                    <div className="margin-s">
                        <img
                            className="img-main"
                            src="https://preview.redd.it/k013k1nwtu631.jpg?width=640&crop=smart&auto=webp&s=5114819493a71203f052167617cc1a0d74cf81eb"
                            alt="heading"
                        />
                    </div>
                </div>
            </div>
            <div className="spacer-3rem"></div>
        </>
    )
}

export { Hero }