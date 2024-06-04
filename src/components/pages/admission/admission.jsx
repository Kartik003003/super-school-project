import React, { useState } from 'react';
import './admission.css';
import Ad1 from './images/Ad1.jpeg';
import Ad2 from './images/Ad2.jpeg';
import Steps from './Steps_application';

const Admissions = () => {
  const [showSteps, setShowSteps] = useState(false);

  const handleApplyNowClick = () => {
    setShowSteps(true);
  };



  return (
    <main className="container-fluid class_main_container">
      {!showSteps ? (
        <>
          <h1 className="h2 text-center mb-3 heading_class">
            Admissions
          </h1>
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <p className='class_paragraph'>
                  <span className="big-alpha display-5">C</span>entre Point School has been an institution of choice since 1988 for families in Nagpur who value academic excellence and personality development of their wards. Admissions to the school involve transparency and inclusivity. Detailed information about admissions is shared through local newspapers, messages to parents, and is also made available on the school website. Admissions are open throughout the year, and consideration is also given to transfer cases.
                </p>
                <p className='class_paragraph'>
                  The application process involves filling the application form online or offline. After filling in the application form, parents have to submit the basic credentials of their ward for verification after which admission is confirmed.
                </p>
                <p className='class_paragraph'>
                  The gates of the school are open for students with a curiosity to learn.
                </p>
              </div>
            </div>
          </section>
          <section className="container mb-5">
            <div className="row">
              <div className="col-md-6 p-5">
                <div className="visual-art-wrap text-center">
                  <img src={'https://t3.ftcdn.net/jpg/06/38/42/70/360_F_638427056_KFSahuq9BbOk98QhELJgG9Yhnf2Bng7z.jpg'} alt="Grade 1 to 10" className="img-fluid" />
                  <p className="">
                    Grade 1 to 10 -
                    <button onClick={handleApplyNowClick} className="btn btn-primary m-3">
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-md-6 p-5">
                <div className="visual-art-wrap text-center">
                  <img src={'https://cdn.myanimelist.net/s/common/uploaded_files/1464422381-57d3d141f64f5a78b54beb633185d646.png'} alt="Grade 11" className="img-fluid" />
                  <p className="">
                    Grade 11 to 12 -
                    <button onClick={handleApplyNowClick} className="btn btn-primary m-3">
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Steps /> // Pass handleGoBack function as a prop
      )}
    </main>
  );
};

export default Admissions;
