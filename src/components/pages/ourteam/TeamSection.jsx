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
                        <img src='https://img.freepik.com/free-photo/3d-illustration-senior-man-with-clipboard-backpack_1057-45572.jpg?t=st=1715752654~exp=1715756254~hmac=e382d32c93f372c0b6abd5f320b2a42a97455e95ae402303b72ee09c444d0902&w=740' alt="Teacher 1"></img>
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
                        <img src='https://t4.ftcdn.net/jpg/06/44/10/27/360_F_644102790_xU44JCmu0oJdc1dyUiVBbxEXhOu76XuM.jpg' alt="Teacher 2"></img>
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
                        <img src='https://img.freepik.com/free-photo/young-business-woman-isolated-white-background-3d-rendering-cartoon-character_1142-32515.jpg?t=st=1715752435~exp=1715756035~hmac=bad5f4e2b79635e27928bf4e8a5a85902599fe601ed9d8c1f97fbd4ce0ae53eb&w=740' alt="Teacher 3"></img>
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
                        <img src='https://img.freepik.com/free-photo/3d-render-little-boy-with-glasses-tie-white-background_1142-32328.jpg?t=st=1715752209~exp=1715755809~hmac=d195751b6926decfec70b8f6f23271d4a09e72899a1e971b6630f3cad16767e2&w=740' alt="Teacher 4"></img>
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
