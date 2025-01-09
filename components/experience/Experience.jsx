/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="section experience section" id="experience">
            <h2 className="section__title">Experience <span className='emoji'>💼</span></h2>
            <span className="section__subtitle">What I work as</span>

            <div className="exp__container container grid">
                <div className="exp__content">
                    <div>
                        <i className="uil uil-arrow exp__icon"></i>
                        <h3 className="exp__title">Software <br /> Engineer <br /> Intern</h3>
                    </div>

                    <div>
                        <span className="exp__comp">LiveRoom Pvt Ltd</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                    <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                            <h3 className="exp__modal-title">Software Engineer Intern <br /> Nov'23 - Aug'24</h3>
                            <p className="exp__modal-description">
                                Worked at LiveRoom Pvt Ltd as an Intern for 9 months, contributing to various projects 
                                and delivering quality work to clients and the company.
                            </p>

                            <ul className="exp__modal-experiences grid">

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Contributed to the design, development, and testing of scalable server-side applications.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Focused on implementing blockchain-based solutions, ensuring reliability and performance.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Gained hands-on experience in backend development, including database management, API integration, and server-side optimization.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Collaborated effectively with cross-functional teams, enhancing project outcomes through clear communication and teamwork.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
