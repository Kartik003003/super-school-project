import './TeamSection.css'; // Your custom CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const TeamSection = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-center text-primary'>OUR TEAMS</h1>
            <div className="home-container">
                {/* Profile Card for Teacher 1 */}
                <div className="profile-card">
                    <div className="img">
                        <img src='https://p.kindpng.com/picc/s/151-1515332_muslim-teacher-drawing-anime-teacher-easy-drawing-hd.png' alt="Teacher 1"></img>
                    </div><br /><br /><br />
                    <div className="caption">
                        <h3>Viraj Shastri</h3>
                        <p>Mathematics Teacher</p>
                        <p>Qualifications: Master of Science in Mathematics</p>
                        {/* Social Links */}
                        <div className="social-links">
                            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                            <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                        </div>
                    </div>
                </div>

                {/* Profile Card for Teacher 2 */}
                <div className="profile-card">
                    <div className="img">
                        <img src='https://www.shutterstock.com/image-vector/anime-girl-scientist-reading-book-600nw-2297567861.jpg' alt="Teacher 2"></img>
                    </div><br /><br /><br />
                    <div className="caption">
                        <h3>Anjali Singh</h3>
                        <p>Science Teacher</p>
                        <p>Qualifications: Ph.D. in Physics</p>
                        {/* Social Links */}
                        <div className="social-links">
                            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                            <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                        </div>
                    </div>
                </div>

                {/* Profile Card for Teacher 3 */}
                <div className="profile-card">
                    <div className="img">
                        <img src='https://i.pinimg.com/originals/06/8f/5a/068f5ab9ee137e5f4d4629c370c74ce6.jpg' alt="Teacher 3"></img>
                    </div><br /><br /><br />
                    <div className="caption">
                        <h3>Poonam Grover</h3>
                        <p>English Teacher</p>
                        <p>Qualifications: Bachelor of Arts in English Literature</p>
                        {/* Social Links */}
                        <div className="social-links">
                            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                            <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                        </div>
                    </div>
                </div>

                {/* Profile Card for Teacher 4 */}
                <div className="profile-card">
                    <div className="img">
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/030/693/568/small/teacher-2d-cartoon-vector-illustration-on-white-background-free-photo.jpg' alt="Teacher 4"></img>
                    </div><br /><br /><br />
                    <div className="caption">
                        <h3>Ushvinder Kaur</h3>
                        <p>History Teacher</p>
                        <p>Qualifications: Master of Arts in History</p>
                        {/* Social Links */}
                        <div className="social-links">
                            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                            <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;
