import React, { useState, useEffect } from 'react';
import 'animate.css';
import './why.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTools, faUsers, faTrophy, faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';


const WhySuperSchool = () => {
    const colors = ['#FF5733', '#33FFB8', '#3362FF', '#FF33C9', '#7FFF00', '#FFD700'];

    return (

        <div className='home '>
            <div className="hero-section">
                <div className="row ">
                    <div className="post col-md-12">
                        <div className="col-md-6" style={{ color: 'white', marginTop: '15%' }}>
                            <h1 className='animate__animated animate__fadeInDown animate__delay-1s'>Why Super School?</h1>
                            <br />
                            <hr />
                            <para className='animate__fadeInUp animate__delay-1s'>With a dedicated team of passionate educators, innovative teaching methodologies, and a focus on holistic development, we strive to inspire a love for learning in our students.</para>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div>

                <h1 className='ml-3 text-center'>The Top Reasons Our School Excels</h1><br />
                <div className="features">
                    <div className="p-3 m-4 rounded shadow-sm animate__animated animate__fadeInLeft animate__delay-3s d-flex flex-column align-items-center">
                        <FontAwesomeIcon icon={faBook} className="icon" />
                        <h2 className="mt-4">Diverse Curriculum</h2>
                        <p className="text-center">Our school offers a diverse curriculum to cater to the interests and needs of all students.</p>
                    </div>

                    <div className="m-4 rounded shadow-sm animate__animated animate__fadeInUp animate__delay-1s text-center">
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <h2 className="mt-4">Global Perspective</h2>
                        <p>We promote global awareness and understanding through various international programs.</p>
                    </div>

                    <div className="p-3 m-4 rounded shadow-sm animate__animated animate__fadeInRight animate__delay-2s text-center">
                        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                        <h2 className="mt-2">Top-notch Education</h2>
                        <p>Our school offers high-quality education with experienced teachers.</p>
                    </div>

                    <div className="p-3 m-4 rounded shadow-sm animate__animated animate__fadeInLeft animate__delay-1s text-center">
                        <FontAwesomeIcon icon={faTools} className="icon" />
                        <h2 className="mt-2">State-of-the-Art Facilities</h2>
                        <p>We have modern facilities to support learning and extracurricular activities.</p>
                    </div>

                    <div className="p-3 m-4 rounded shadow-sm animate__animated animate__fadeInUp animate__delay-2s text-center">
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <h2 className="mt-2">Strong Community</h2>
                        <p>Our school fosters a sense of community and belonging among students and staff.</p>
                    </div>

                    <div className="p-3 m-4 rounded shadow-sm animate__animated animate__fadeInRight animate__delay-3s text-center">
                        <FontAwesomeIcon icon={faTrophy} className="icon" />
                        <h2 className="mt-2">Success Stories</h2>
                        <p>Many of our alumni have gone on to achieve great success in their careers.</p>
                    </div>

                </div>
            </div><br />

            <div className="container cardsection px-4 pb-4 ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="cards student-card">
                            <div className="cards-body d-flex flex-column align-items-center">
                                <div className="student-image-container">
                                    <img src='https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980045.jpg?t=st=1717492788~exp=1717496388~hmac=c27f10bd69d7a279121fa0d3bdb214e115c2bbb8ad5f9988a398bbe421873814&w=740' alt='Excellent Teachers' className="student-image rounded-circle" />
                                    <h5 className="cards-title">Excellent Teachers</h5>
                                    <div className="student-details">
                                        <h5 className="cards-title">Excellent Teachers</h5>
                                        <para className="cards-text text-white">Excellent teachers possess a unique blend of qualities that set them apart. They are dedicated, compassionate, and innovative individuals who inspire and engage their students. </para>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cards student-card">
                            <div className="cards-body d-flex flex-column align-items-center">
                                <div className="student-image-container">
                                    <img src='https://img.freepik.com/free-vector/e-learning-isometric-concept_1284-16835.jpg?t=st=1717492745~exp=1717496345~hmac=0dbad61086924d62a5ea2a5a511575ef01474a4792a90649b63b30f219e8e60d&w=740' alt='Top Courses' className="student-image rounded-circle" />
                                    <h5 className="cards-title">Top Courses</h5>
                                    <div className="student-details ">
                                        <h5 className="cards-title">Top Courses</h5>
                                        <para className="cards-text text-white">School courses offer a structured curriculum covering various subjects like Math, Science, History, and Languages. to prepare them for academic success and future endeavors.</para>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cards student-card">
                            <div className="cards-body d-flex flex-column align-items-center">
                                <div className="student-image-container">
                                    <img src='https://img.freepik.com/free-photo/cartoon-like-kid-playing-with-board-game-indoors_23-2150898561.jpg?t=st=1717492684~exp=1717496284~hmac=b76b159ec9344ef79167fa77e28d1ae67cf62a5fe841ddcf9e57995c2bcb146c&w=740' alt='Multiple Games and Toys' className="student-image rounded-circle" />\
                                    <h5 className="cards-title">Multiple Games and Toys</h5>
                                    <div className="student-details ">
                                        <h5 className="cards-title">Multiple Games and Toys</h5>
                                        <para className="cards-text text-white">Para shooting is a technical Paralympic sport that tests accuracy and control. It is governed by the Paralympic Committee of India, which hosts major events like  showcasing the skills of para athletes in this discipline.</para>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div className="cards student-card">
                            <div className="cards-body d-flex flex-column align-items-center">
                                <div className="student-image-container">
                                    <img src='https://img.freepik.com/premium-vector/female-teacher-teaching-about-fruit-with-lovely-boys-girls-having-fun-together_610956-393.jpg?w=740' alt='Extra Activities' className="student-image rounded-circle" />
                                    <h5 className="cards-title">Extra Activities</h5>
                                    <div className="student-details">
                                        <h5 className="cards-title">Extra Activities</h5>
                                        <para className="cards-text text-white">Extracurricular activities in schools offer diverse opportunities beyond academics, fostering social, creative, and physical development. From sports teams to academic clubs and arts program.</para>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cards student-card">
                            <div className="cards-body d-flex flex-column align-items-center">
                                <div className="student-image-container">
                                    <img src='https://img.freepik.com/free-vector/online-certification-illustrated_23-2148570823.jpg?t=st=1717492537~exp=1717496137~hmac=a4ad3583d35b0ad728dd6f5092885d0f0360b2dc5e06443d1ffdb6cb2c6febdd&w=740' alt='Best Results' className="student-image rounded-circle" />
                                    <h5 className="cards-title">Best Results</h5>

                                    <div className="student-details ">
                                        <h5 className="cards-title">Best Results</h5>
                                        <para className="cards-text text-white">Best results in school reflect academic excellence, personal growth, and holistic development. Achieving the best results signifies mastery of subjects, critical thinking skills,  preparing students for future success and contributing.</para>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default WhySuperSchool;
