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

                <h1 className='ml-3'>The Top Reasons Our School Excels</h1><br />
                <div className="features">
                    <div className="p-3 m-2 rounded shadow-sm animate__animated animate__fadeInLeft animate__delay-3s " >
                        <FontAwesomeIcon icon={faBook} className="icon" />
                        <h2 className="mt-2">Diverse Curriculum</h2>
                        <para>Our school offers a diverse curriculum to cater to the interests and needs of all students.</para>
                    </div>
                    <div className=" m-2 rounded shadow-sm shadow-sm animate__animated animate__fadeInUp animate__delay-1s" >
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <h2 className="mt-2">Global Perspective</h2>
                        <para>We promote global awareness and understanding through various international programs.</para>
                    </div>
                    <div className="p-3 m-2 rounded shadow-sm shadow-sm animate__animated animate__fadeInRight animate__delay-2s" >
                        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                        <h2 className="mt-2">Top-notch Education</h2>
                        <para>Our school offers high-quality education with experienced teachers.</para>
                    </div>
                    <div className="p-3 m-2 rounded shadow-sm shadow-sm animate__animated animate__fadeInLeft animate__delay-1s" >
                        <FontAwesomeIcon icon={faTools} className="icon" />
                        <h2 className="mt-2">State-of-the-Art Facilities</h2>
                        <para>We have modern facilities to support learning and extracurricular activities.</para>
                    </div>
                    <div className="p-3 m-2 rounded shadow-sm shadow-sm animate__animated animate__fadeInUp animate__delay-2s" >
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <h2 className="mt-2">Strong Community</h2>
                        <para>Our school fosters a sense of community and belonging among students and staff.</para>
                    </div>
                    <div className="p-3 m-2 rounded shadow-sm shadow-sm animate__animated animate__fadeInRight animate__delay-3s" >
                        <FontAwesomeIcon icon={faTrophy} className="icon" />
                        <h2 className="mt-2">Success Stories</h2>
                        <para>Many of our alumni have gone on to achieve great success in their careers.</para>
                    </div>
                </div>
            </div><br />

            <div className="container cardsection">
                <div className="row">
                    <div className="col-md-4">
                        <div className="cards student-card">
                            <div className="cards-body d-flex flex-column align-items-center">
                                <div className="student-image-container">
                                    <img src='https://www.nicepng.com/png/detail/191-1919532_teacher-png-female-teacher-clipart.png' alt='Excellent Teachers' className="student-image rounded-circle" />
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
                                    <img src='https://thumbs.dreamstime.com/b/children-online-education-remote-studying-training-courses-learning-video-tutorials-cheerful-study-use-laptop-school-179920075.jpg' alt='Top Courses' className="student-image rounded-circle" />
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
                                    <img src='https://clipground.com/images/children-sharing-toys-clipart-9.png' alt='Multiple Games and Toys' className="student-image rounded-circle" />\
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
                                    <img src='https://www.pngitem.com/pimgs/m/113-1130879_hd-cartoon-kids-activity-school-activities-clipart-hd.png' alt='Extra Activities' className="student-image rounded-circle" />
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
                                    <img src='https://thumbs.dreamstime.com/b/basic-rgb-155286701.jpg' alt='Best Results' className="student-image rounded-circle" />
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
