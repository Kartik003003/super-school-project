import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Page.css'; // Import external CSS
import mainImage from './assets/try.png';
// import img2 from './assets/project.jpg';
// import img3 from './assets/debate.jpg';
// import img8 from './assets/cultural.jpg';
// import img5 from './assets/essay.jpg';
// import img6 from './assets/paint.png';
// import img7 from './assets/sports.jpg';
import Lottie from 'lottie-react';
import Down from './down.json';

const CoCurriculumActivity = () => {
    return (
        <div className="container-fluid bg-light p-0">
            <div className="row">
                <div className="col main-image">
                    <img src={mainImage} alt="Main" className="img-fluid sticky-image h-100 w-100" />
                </div>
            </div>
            <div className="w-100 h-sm-auto h-md-auto h-lg-auto d-flex justify-content-center align-items-center position-relative" style={{ backgroundColor: '#0228c2' }}>
                <h1 className="m-0 text-center popup-headingco" style={{ color: 'white' }}>Co-Curricular Activities</h1>

            </div>

            <div className="container">
                <div className="card">

                    <div className="image">
                        <img src="https://t3.ftcdn.net/jpg/02/89/36/54/360_F_289365495_sZ2yf1ItqdG8PV82Qy50nTItHAVxHdOz.jpg" alt="Background" />

                    </div>


                    <div className="content">
                        <h3>Outdoor Adventure</h3>
                        <p>

                            Experience the thrill of outdoor activities with our latest adventure gear, seasoned experts, and top-notch guides. Whether it's hiking, camping, or mountain biking, we've got everything you need to make your next outdoor excursion unforgettable.</p>
                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
                <div class="card">
                    <div class="image">
                        <img src="https://www.shutterstock.com/shutterstock/videos/1060156541/thumb/8.jpg?ip=x480" alt="Card Image" />

                    </div>
                    <div class="content">
                        <h3>Innovative Technology Solutions</h3>
                        <p>
                            Dive deep into the world of innovation and technology with our state-of-the-art solutions. From cutting-edge artificial intelligence and machine learning to revolutionary blockchain and quantum computing, we're at the forefront of technological advancement.

                        </p>
                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
                <div class="card">
                    <div class="image">
                        <img src="https://i.pinimg.com/736x/b9/8b/eb/b98beb433e0293b104a3272e774bd74d.jpg" alt="Card Image" />
                    </div>
                    <div class="content">
                        <h3>Team Building Adventures</h3>
                        <p>
                            Strengthen bonds and foster teamwork with our exhilarating team-building activities. From adrenaline-pumping challenges to engaging collaborative problem-solving exercises, our dynamic programs are meticulously crafted to ignite camaraderie, build trust, and boost morale.
                        </p>
                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
                <div class="card">
                    <div class="image">
                        <img src="https://img.freepik.com/premium-vector/cartoon-group-children-singing-dancing-school-choir_723224-1604.jpg" alt="Card Image" />

                    </div>

                    <div class="content">
                        <h3>Musical and Cultural Celebrations</h3>
                        <p>
                            Immerse yourself in the rich tapestry of music and culture with our vibrant events. From traditional performances to contemporary showcases, our celebrations showcase the diversity and creativity.
                        </p>
                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
                <div class="card">
                    
                    <div class="image">
                        <img src="https://static.vecteezy.com/system/resources/previews/007/002/618/non_2x/children-playing-tug-of-war-game-free-vector.jpg" alt="Card Image" />
                    </div>
                    <div class="content">
                        <h3>Sporting Events Extravaganza</h3>
                        <p>
                            Immerse yourself in the excitement of competitive sports with our range of thrilling events. Whether you're a participant or spectator, our sporting extravaganzas offer an electrifying atmosphere and unforgettable moments.
                        </p>
                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>

            </div>
            <div>
                <Lottie animationData={Down} />
            </div>
        </div>
    );
}

export default CoCurriculumActivity