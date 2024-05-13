import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './OurVisionMission.css'; // Import external CSS
import mainImage from './assets/images/image.jpg'; // Import the image
import Lottie from 'lottie-react';
import vision from './vision.json';
import mission from './Mission.json';
import values from './values.json'

const OurVisionMission = () => {
    return (
        <div className="container-fluid bg-light p-0">
            <div className="row position-relative">
                <div className="col main-image-container">
                    <img src={mainImage} alt="Main" className="img-fluid sticky-image w-100" style={{ maxHeight: '600px' }} />
                    <div className="typewriter position-absolute top-3 start-50 translate-middle-x">
                        <h1>OUR VISION & MISSION</h1>
                    </div>
                </div>
            </div>




            <div className="w-100 h-sm-auto h-md-auto h-lg-auto d-flex justify-content-center align-items-center position-relative" style={{ backgroundColor: '#0228c2' }}>
                <h1 className="m-0 text-center popup " style={{ color: 'white' }}><hr></hr></h1>
                <div className="overlay"></div>
            </div>

            <div className="row px-3">
                <div className="col">
                    <div className="row">
                        <div className="col-lg-6">
                            <Lottie animationData={vision} />
                        </div>
                        <div className="col-lg-6">
                            <div className="card mx-10 mt-3">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-5">
                                        <li className="list-group-item"><strong className='list-group-item-strong'>Academic Excellence:</strong> Strive to achieve academic excellence by providing a rigorous and comprehensive curriculum that meets the highest standards of education.</li>
                                        <li className="list-group-item"><strong className='list-group-item-strong'>Holistic Development:</strong> Foster holistic development by focusing on the intellectual, emotional, social, and physical growth of every student.</li>
                                        <li className="list-group-item"><strong className='list-group-item-strong'>Innovation and Creativity:</strong> Encourage innovation and creativity by providing a dynamic and stimulating learning environment that inspires students to think critically and solve problems creatively.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row h-45">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="card mx-10 mt-3">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-5">
                                        <li className="list-group-item">Our mission is to provide a stimulating learning environment that promotes academic excellence, critical thinking, and lifelong learning.</li>
                                        <li className="list-group-item">We are committed to cultivating a community of responsible individuals who are socially aware, culturally sensitive, and environmentally conscious.</li>
                                        <li className="list-group-item">Through innovative teaching methods and a diverse curriculum, we aim to empower students to become leaders and innovators of tomorrow.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <Lottie animationData={mission} />
                        </div>
                    </div>

                    <div className="row h-45">
                        <div className="col-lg-6">
                            <Lottie animationData={values} />
                        </div>
                        <div className="col-lg-6">
                            <div className="card mx-10 mt-3">
                                <div className="card-body">
                                    <ol className="list-group list-group-numbered list-group-flush fs-5">
                                        <li className="list-group-item">
                                            <strong className='list-group-item-strong'>Excellence:</strong> We uphold a commitment to excellence in all aspects of our educational programs, striving to achieve the highest standards of academic achievement and personal development.
                                        </li>
                                        <li className="list-group-item">
                                            <strong className='list-group-item-strong'>Integrity:</strong> We value integrity and ethical behavior, promoting honesty, fairness, and accountability among our students, staff, and community.
                                        </li>
                                        <li className="list-group-item">
                                            <strong className='list-group-item-strong'>Respect:</strong> We foster a culture of respect, embracing diversity, and promoting inclusivity, where every individual is valued, and differences are celebrated.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OurVisionMission;
