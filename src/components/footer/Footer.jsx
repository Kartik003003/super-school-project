import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faXTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <div className="footer text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 sm:pb-5">
                        <img src="./hlogo1.png" alt="Logo" className="img mb-2" style={{ width: '100px' }} />
                        <div className='name-heading'>Super School</div>

                        <div className="address">
                            310-311, 3rd Floor,
                            Vipul Agora, MG Road, Gurgaon,
                            Haryana -122 002, India
                        </div>
                        <div className='icons custom-primary'>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} className="mx-0" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faXTwitter} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} className="mx-2" style={{ color: '#FFFFFF' }} /></a>
                        </div>
                    </div>
                    <div className="cols col-md-3  col-sm-6 sm:pb-3">
                        <div>
                            <p style={{ fontSize: '1.5rem' }} className="head font-weight-bold">About Us</p><br />
                            <div className="col2-links mt-0" >
                                <ul>
                                    <li>principal desk</li>
                                    <li>Our Vision &amp; Mission</li>
                                    <li>whySuperSchool</li>
                                    <li><a href="/privacy-policy" style={{ textDecoration: 'none', color: 'white' }}>  Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cols col-md-3 col-sm-6 sm:pb-3">
                        <div>
                            <p style={{ fontSize: '1.5rem' }} className="head font-weight-bold">Academics</p><br />
                            <div className="col2-links mt-0" >
                                <ul>
                                    <li>Courses</li>
                                    <li>Faculty &amp; Staff</li>
                                    <li>School Amenties</li>
                                    <li>Calender &amp; Events</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="cols col-md-3 col-sm-6 sm:pb-3">
                        <div>
                            <p style={{ fontSize: '1.5rem' }} className="head font-weight-bold">News and Blog</p><br />
                            <div className="col2-links mt-0" >
                                <ul>
                                    <li>News</li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <p className="text-center" style={{ color: '#FFFFFF' }}>&copy; 2024 Super School. All rights reserved.</p>

        </div>
    );
}

export default Footer;