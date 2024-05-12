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
          <section className="container mt-4">
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
          <section className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="visual-art-wrap text-center">
                  <img src={Ad1} alt="Grade 1 to 10" className="img-fluid" />
                  <p className="m-5">
                    Grade 1 to 10 -
                    <button onClick={handleApplyNowClick} className="btn btn-primary">
                      Apply Now
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="visual-art-wrap text-center">
                  <img src={Ad2} alt="Grade 11" className="img-fluid" />
                  <p className="m-5">
                    Grade 11 to 12 -
                    <button onClick={handleApplyNowClick} className="btn btn-primary">
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
