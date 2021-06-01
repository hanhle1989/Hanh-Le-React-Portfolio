import React from "react";

import Password from "../assets/web_development/password-generator.jpg";
import Quiz from "../assets/web_development/mini-quiz.jpg";
import Weather from "../assets/web_development/weather-dashboard.jpg";
import Workout from "../assets/web_development/workout-tracker.gif";
import Note from "../assets/web_development/note-taker.gif";
import EmDirectory from "../assets/web_development/employee-directory.gif";

export const WebDevelopment = () => {
    return (
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="header text-center py-5">PAST PROJECTS</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <h4 className="card-title text-center">Password Generator</h4>
                            <img className="portfolio-image" src={Password} alt="Password Generator" />
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <a href="https://github.com/hanhle1989/javascript-password-generator" className="btn btn-outline-dark" type="button">GitHub Depository</a>
                                    <a href="https://hanhle1989.github.io/javascript-password-generator/" className="btn btn-outline-dark" type="button">Deployed Application</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <h4 className="card-title text-center">Mini Code Quiz</h4>
                            <img className="portfolio-image" src={Quiz} alt="Mini Quiz" />
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <a href="https://github.com/hanhle1989/Web-APIs-Mini-Timed-Quiz" className="btn btn-outline-dark" type="button">GitHub Depository</a>
                                    <a href="https://hanhle1989.github.io/Web-APIs-Mini-Timed-Quiz/" className="btn btn-outline-dark" type="button">Deployed Application</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <h4 className="card-title text-center">Weather Dashboard</h4>
                            <img className="portfolio-image" src={Weather} alt="Weather Dashboard" />
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <a href="https://github.com/hanhle1989/api-weather-dashboard" className="btn btn-outline-dark" type="button">GitHub Depository</a>
                                    <a href="https://hanhle1989.github.io/api-weather-dashboard/" className="btn btn-outline-dark" type="button">Deployed Application</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <h4 className="card-title text-center">Workout Tracker</h4>
                            <img className="portfolio-image" src={Workout} alt="Workout Tracker" />
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <a href="https://github.com/hanhle1989/NoSQL-Workout-Tracker" className="btn btn-outline-dark" type="button">GitHub Depository</a>
                                    <a href="https://hanh-fitness-tracker.herokuapp.com/" className="btn btn-outline-dark" type="button">Deployed Application</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <h4 className="card-title text-center">Note Taker</h4>
                            <img className="portfolio-image" src={Note} alt="Note Taker" />
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <a href="https://github.com/hanhle1989/express.js-note-taker" className="btn btn-outline-dark" type="button">GitHub Depository</a>
                                    <a href="https://hanh-note-taker.herokuapp.com/" className="btn btn-outline-dark" type="button">Deployed Application</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <h4 className="card-title text-center">Employee Directory</h4>
                            <img className="portfolio-image" src={EmDirectory} alt="Employee Directory" />
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <a href="https://github.com/hanhle1989/React-Employee-Directory" className="btn btn-outline-dark" type="button">GitHub Depository</a>
                                    <a href="https://hanh-employee-directory.herokuapp.com/" className="btn btn-outline-dark" type="button">Deployed Application</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default WebDevelopment
