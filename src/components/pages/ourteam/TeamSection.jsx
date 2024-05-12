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
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgHAqIUkUR92_mtswDCYJD99s-KEpEhP4dA&usqp=CAU' alt="Teacher 1"></img>
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
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-w_Q-ue5bQMYnbQ9YG2oTbxcDGXVBVEQv5Q&usqp=CAU' alt="Teacher 2"></img>
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
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJSAClyZWVF39P3Hs4sKCrZZ1ZkXNwNoKlg&usqp=CAU' alt="Teacher 3"></img>
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
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTwOIwmnpU9i29c00uDxobH2O3Mw2l57pZg&usqp=CAU' alt="Teacher 4"></img>
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
