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
                                        src={'https://img.freepik.com/premium-photo/beautiful-anime-cartoon-american-teacher-woman-classroom-illustration-generative-ai_850810-390.jpg'}
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
                                        src={'https://pics.craiyon.com/2023-11-05/68d062cb66bc4ae5ae69f53ff796615f.webp'}
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
                                        src={'data:image/jpeg;base64,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'}
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
                                        src={'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/30-most-iconic-anime-teachers-ranked-sakata-gintoki-gintama.jpg'}
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
                                        src={'https://www.picture.lk/files/preview/960x1713/11710880149lfahf3t0cycly96gpwjg4jie1hybnjf2cdi58l2egcaguo1mwawkovcm7l0eep45chablxjusoxhr4zcbercmtpm7k5flu9bdmam.jpg'}
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
                                        src={'https://pics.craiyon.com/2023-10-11/fc37d29397c44975a93992558f085690.webp'}
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
                                src={'https://img.freepik.com/free-photo/anime-style-portrait-young-student-attending-school_23-2151125430.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=ais'}
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
                                src={'data:image/jpeg;base64,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'}
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
                                src={'https://i.pinimg.com/originals/90/f5/06/90f5068ad295b78a6799b2cb04c23408.png'}
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
                                src={'https://pics.craiyon.com/2024-03-24/uYR0HNZUSh-rrTuvYeYIaQ.webp'}
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
                                src={'https://img.freepik.com/premium-vector/anime-style-themed-girl_925122-1699.jpg'}
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
                                    src={'https://img.freepik.com/premium-photo/portrait-red-haired-girl-anime-style_546042-103.jpg'}
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

        </div>
    )
}

export default Staff
