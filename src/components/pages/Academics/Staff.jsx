import React from 'react'
// import banner from './Faculty_assets/banner-2.png'
import banner from './Faculty_assets/banner-2.png'
import "./Staff.css";
import "./About.css";
import teacher1 from './Faculty_assets/teacher1.jpg'
import teacher2 from './Faculty_assets/teacher2.jpg'
import teacher3 from './Faculty_assets/teacher3.jpg'
import teacher4 from './Faculty_assets/teacher4.jpg'
import teacher5 from './Faculty_assets/teacher5.jpg'
import teacher6 from './Faculty_assets/teacher6.jpg'
import Typewriter from "typewriter-effect";

import tech1 from './Faculty_assets/tech1.jpg'
import tech2 from './Faculty_assets/tech2.jpg'
import tech3 from './Faculty_assets/tech3.jpg'
import tech4 from './Faculty_assets/tech4.jpg'
import tech5 from './Faculty_assets/tech5.jpg'
import tech6 from './Faculty_assets/tech6.jpg'






const Staff = () => {
    return (
        <div className='container-fluid p-0'>
            {/* <img src={banner} alt='banner' className='image-fluid custom-img' style={{ height: '600px' }} /> */}

            <div
                className="hero d-flex align-items-center justify-content-center"
                style={{
                    height: "80vh",
                    backgroundColor: "salmon",
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div style={{ fontSize: "5rem", fontWeight: 'bold', color: "Black" }}>
                    <Typewriter
                        options={{
                            strings: ["Faculty & Staff"],
                            autoStart: true,
                            loop: true,
                            cursor: '<span style="font-size: 4rem;">|</span>',
                        }}
                    />
                </div>
            </div>
            <div className='staff-heading text-white text-center '>
                <br />
                <h1 className='staff-heading-content text-center text-black p-1'>
                    Head Of the School
                </h1>
            </div>
            <div className="container-fluid mt-3 mb-1">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="flip-card p-2">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src="https://img.freepik.com/free-photo/portrait-young-female-professor-education-day_23-2150980046.jpg?t=st=1717495648~exp=1717499248~hmac=ece136658d6b681fe80f43ebd1a8442cc20e01506999ff5071f1722d8098be1e&w=740"
                                        alt="Front"
                                        className="image-fluid h-75"

                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Mrs. Smith-Founder</h5>

                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-body">
                                        <h5 className="card-title-2">Mrs. Smith</h5>
                                        <p className="card-text">
                                            <strong style={{ color: 'blue', fontSize: '1.3rem' }}>Name:</strong> Mrs. Smith <br />
                                            <strong style={{ color: 'blue', fontSize: '1.3rem' }}>Education:</strong> Bachelor's in Education (B.Ed) <br />
                                            <strong style={{ color: 'blue', fontSize: '1.3rem' }}>Special Position:</strong>Founder <br />
                                            <strong style={{ color: 'blue', fontSize: '1.3rem' }}>Additional Information:</strong> Founded The super school <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above <div className="col"> for other cards */}
                    <div className="col">
                        <div className="flip-card p-2">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src={'https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980044.jpg?t=st=1717494527~exp=1717498127~hmac=17724a299a4ae8a28d630713dc8eee351b7c0721c6ea493b3b3492a202b0eb7f&w=740'}
                                        alt="Front"
                                        className="image-fluid h-75"

                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Mr. John-CoFounder</h5>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-body">
                                        <h5 className="card-title-2">Mr. Johnson</h5>
                                        <p className="card-text">
                                            Name: Mr. Johnson
                                            Education: Master's in Education
                                            Special Position: CoFounder
                                            Additional Information: Mr. Johnson is passionate about environmental studies and often organizes nature walks to enhance students' understanding of the subject.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="flip-card p-2">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src={'https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980067.jpg?t=st=1717494674~exp=1717498274~hmac=8e6e58e5e2d93a693f7a4dfe15ebd353c6f7ff6f050a0d64723b1c20b55a0fe2&w=740'}
                                        alt="Front"
                                        className="image-fluid h-75"

                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Mr. Brown-Principal</h5>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-body">
                                        <h5 className="card-title-2">Mr. Brown</h5>
                                        <p className="card-text">
                                            Name: Mr. Brown
                                            Education: Bachelor's in Education (B.Ed)
                                            Special Position:Principal
                                            Additional Information: Mr. Brown is a fitness enthusiast and conducts morning fitness sessions for students to promote a healthy lifestyle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="flip-card p-2">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src={'https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980043.jpg?t=st=1717494775~exp=1717498375~hmac=2310f475405082c6511edd9bb255f8f6156b41ce8fe5de11c473e944cbc304ba&w=740'}
                                        alt="Front"
                                        className="image-fluid h-75"

                                    />
                                    <div className="card-body">
                                        <h5 className="card-title ">Mr.Dev -Secretary </h5>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-body">
                                        <h5 className="card-title-2">Mr. Dev</h5>
                                        <p className="card-text">
                                            Name: Mr. Dev
                                            Education: Master's in Education
                                            Special Position: VicePrincipal
                                            Additional Information: Mr. Dev is a talented artist and musician herself, often incorporating her own artwork and musical compositions into her lessons.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="flip-card p-2">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src={'https://img.freepik.com/free-photo/view-3d-female-teacher_23-2150710016.jpg?t=st=1717495792~exp=1717499392~hmac=fc1630abe0cc65d8bbd67eb9d101bf3337ba6463653d8fb151d0c8ca1a93ad50&w=740'}
                                        alt="Front"
                                        className="image-fluid h-75"

                                    />
                                    <div className="card-body">
                                        <h5 className="card-title p-1">Mrs. Anu-Manager</h5>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-body">
                                        <h5 className="card-title-2">Mrs. Lee</h5>
                                        <p className="card-text">
                                            Name: Mrs. Lee
                                            Education: Master's in Education
                                            Special Position: Manager
                                            Additional Information: Mrs.Lee is a talented artist and musician herself, often incorporating her own artwork and musical compositions into her lessons.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="flip-card p-2">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src={'https://img.freepik.com/free-photo/3d-cartoon-portrait-person-practicing-law-profession_23-2151419575.jpg?t=st=1717495922~exp=1717499522~hmac=2752b2e3b05e41fecbf487745e78eece1e95281a9f91331412749e341fa8a2e3&w=740'}
                                        alt="Front"
                                        className="image-fluid h-75"

                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Mrs. Lee-Secreatory</h5>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="card-body">
                                        <h5 className="card-title-2">Mrs. Williams</h5>
                                        <p className="card-text">
                                            Name: Mrs. Williams
                                            Education: Bachelor's in Education (B.Ed)
                                            Special Position:Secreatory
                                            Additional Information: Miss Williams is also the school's debate coach and has led the debate team to several victories at the district level.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='staff-heading-content text-white text-center p-1'>
                <br />
                <h1 className='staff-heading-content text-center text-black'>
                    Staff And Faculty
                </h1>
            </div>
            <div className="container pt-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {/* First row */}
                    <div className="col">
                        <div className="founder-card rounded-3 mx-5">
                            <img
                                src={'https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980066.jpg?t=st=1717494955~exp=1717498555~hmac=e717eafb8df738942e5ff35ce1e5b58f9f0904720127a4cb20b58dbea6bdcbf9&w=740'}
                                className="card-img-top rounded-3"
                                alt="Person 1"
                                style={{ height: "300px", width: "300px" }}
                            />
                            <h5 className="founder-title">Mr.Wilson</h5>

                            <div className="founder-body slide">
                                <h5 className="founder-title">Mr.Wilson</h5>
                                <p className="founder-text">
                                    Name: Mr. Wilson<br></br>
                                    Education: Bachelor's Degree<br></br>
                                    Specialization: Civics<br></br>
                                    Additional Info: Mr. Wilson is also the school's debate coach and has led the debate team to several victories at the district level.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="founder-card rounded-3 mx-5">
                            <img
                                src={'https://img.freepik.com/free-photo/portrait-young-female-teacher-education-day_23-2150980015.jpg?t=st=1717495419~exp=1717499019~hmac=495b76cdd71b23204b5f4999b670ee40c8ad726938b4a5636cd909ac775beb07&w=360'}
                                className="card-img-top rounded-3"
                                alt="Person 1"
                                style={{ height: "300px", width: "300px" }}
                            />
                            <h5 className="founder-title">Miss Anderson</h5>

                            <div className="founder-body slide">
                                <h5 className="founder-title">Miss Anderson</h5>
                                <p className="founder-text">
                                    Name: Miss Anderson<br></br>
                                    Education: Bachelor's Degree<br></br>
                                    Specialization: English<br></br>
                                    Additional Info: Miss Anderson is also the school's debate coach and has led the debate team to several victories at the district level.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="founder-card rounded-3 mx-5">
                            <img
                                src={'https://img.freepik.com/free-photo/view-3d-businessman_23-2150709814.jpg?t=st=1717495026~exp=1717498626~hmac=c2e4b064079e6ce7efc913305270df9b42a32ede2fcf50d3a01748f18ceac7da&w=740'}
                                className="card-img-top rounded-3"
                                alt="Person 1"
                                style={{ height: "300px", width: "300px" }}
                            />
                            <h5 className="founder-title">Mr. White</h5>

                            <div className="founder-body slide">
                                <h5 className="founder-title">Mr. White</h5>
                                <p className="founder-text">
                                    Name: Mr. White<br></br>
                                    Education: Bachelor's Degree<br></br>
                                    Specialization: Geography<br></br>
                                    Additional Info:  Mr.White is also the school's debate coach and has led the debate team to several victories at the district level.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="founder-card rounded-3 mx-5">
                            <img
                                src={'https://img.freepik.com/free-photo/view-3d-male-teacher_23-2150710024.jpg?t=st=1717495119~exp=1717498719~hmac=d09eca7fd300662dd702d4b0ef68f1a85faa099e618eb7a3b359b4b6afbc24ac&w=740'}
                                className="card-img-top rounded-3"
                                alt="Person 1"
                                style={{ height: "300px", width: "300px" }}
                            />
                            <h5 className="founder-title">Mr. Clark</h5>

                            <div className="founder-body slide">
                                <h5 className="founder-title">Mr. Clark</h5>
                                <p className="founder-text">
                                    Name: Mr. Clark<br></br>
                                    Education: Bachelor's Degree<br></br>
                                    Specialization: Science<br></br>
                                    Additional Info:  Mr.Clark is also the school's debate coach and has led the debate team to several victories at the district level.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="founder-card rounded-3 mx-5">
                            <img
                                src={'https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg?t=st=1717495193~exp=1717498793~hmac=55230b72f03c3ef87a531539929832090c0d80c0929d772159d61ef7a57b31a2&w=360'}
                                className="card-img-top rounded-3"
                                alt="Person 1"
                                style={{ height: "300px", width: "300px" }}
                            />
                            <h5 className="founder-title">Mr. Martinez</h5>

                            <div className="founder-body slide">
                                <h5 className="founder-title">Mr. Martinez</h5>
                                <p className="founder-text">
                                    Name: Mr. Martinez<br></br>
                                    Education: Bachelor's Degree<br></br>
                                    Specialization: Maths<br></br>
                                    Additional Info:  Mr.Martinez is also the school's debate coach and has led the debate team to several victories at the district level.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="founder-card rounded-3 mx-5">
                            <div className="position-relative">
                                <img
                                    src={'https://img.freepik.com/free-photo/portrait-young-female-professor-education-day_23-2150980089.jpg?t=st=1717495387~exp=1717498987~hmac=61fe92f87c186ffa7920939348d45697a980510f01b19a6e5377a4b19ab4c01e&w=740'}
                                    className="card-img-top rounded-3"
                                    alt="Person 1"
                                    style={{ height: "300px", width: "300px" }}
                                />
                                {/* <div className="position-absolute bottom-0 start-50 translate-middle-x bg-black">
    <h5 className="text-white">Miss Thompson</h5>
  </div> */}
                                <h5 className="founder-title">Miss. Thompson</h5>

                            </div>

                            <div className="founder-body slide">
                                <h5 className="founder-title">Miss. Thompson</h5>
                                <p className="founder-text">
                                    Name: Miss. Thompson<br></br>
                                    Education: Bachelor's Degree<br></br>
                                    Specialization: Economics<br></br>
                                    Additional Info: Miss Thompson is also the school's debate coach and has led the debate team to several victories at the district level.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br />
        </div>
    )
}

export default Staff
