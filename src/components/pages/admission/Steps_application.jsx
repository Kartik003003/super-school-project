import React from 'react';
import "./Steps_application.css"
import { TypeAnimation } from 'react-type-animation';
import Admissions from './admission';
import { useState } from 'react';

const AdmissionSteps = () => {
  const [showAdmissions, setShowAdmissions] = useState(false); // State for showing Admissions component

  const handleGoBack = () => {
    setShowAdmissions(true); // Set showAdmissions to true to render Admissions component
  };
  return (
    <>
      {showAdmissions ? (
        <Admissions /> // Render Admissions component
      ) : (
        <section className="elementor-section " style={{ backgroundColor: '#f5f5dc' }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center"> {/* Center align */}
                  <button onClick={handleGoBack} className="btn btn-secondary mb-3">Back to Admissions</button>

                  <h2 className="mt-5 display-4 class_heading_form">Complete the Application Form below</h2> {/* Add margin top */}
                  <p className="lead class_subheading_form">
                    <TypeAnimation
                      className='typewritter'
                      sequence={[
                        `Welcome to Super School, the leading online educational institution in India! If you're thinking about enrolling your child, we've streamlined our enrollment process into five simple steps, ensuring it's both convenient and easy to follow.`

                      ]}
                      wrapper="span"
                      speed={110}


                    />



                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col class_col">


                <table className="table class_table ml-4 w-80">
                  <tbody>
                    <tr>
                      <th scope="col" className='display-6 py-1 class_table_head' >Step 1: Start Your Inquiry</th>
                    </tr>
                    <tr>
                      <td className="lead class_table_row">To begin your adventure with Super School, start by making an inquiry. You can get in touch with us through email, phone, WhatsApp, or by completing the inquiry form on our official website. Once we receive your inquiry, our knowledgeable admission counselors will assist you at every step of the journey.</td>
                    </tr>
                    {/* Add more rows for additional steps */}
                  </tbody>
                </table>


                <table className="table class_table ml-4 w-80">
                  <tbody>
                    <tr>
                      <th scope="col" className='display-6 py-1 class_table_head' >Step 2: Personalized Guidance</th>
                    </tr>
                    <tr>
                      <td className="lead class_table_row">At Super School, our committed admission counselors are ready to comprehend your individual requirements and acquaint you with the exceptional offerings of our institution. They will offer valuable insights into our curriculum, teaching methodologies, and the stimulating learning atmosphere that awaits your child. Our goal is to equip you with the necessary knowledge to make well-informed decisions regarding your child's education.</td>
                    </tr>
                    {/* Add more rows for additional steps */}
                  </tbody>
                </table>


                <table className="table class_table ml-4 w-80">
                  <tbody>
                    <tr>
                      <th scope="col" className='display-6 py-1 class_table_head' >Step 3: Application Completion and Submission</th>
                    </tr>
                    <tr>
                      <td className="lead class_table_row">Take the next step by filling out the application form, a pivotal stage in the admission procedure. This form enables us to grasp your child's educational history and your family's aspirations. Please note that a non-refundable application fee of INR 500 is necessary.</td>
                    </tr>
                    {/* Add more rows for additional steps */}
                  </tbody>
                </table>



                <table className="table class_table ml-4 w-80">
                  <tbody>
                    <tr>
                      <th scope="col" className='display-6 py-1 class_table_head' >Step 4: Rigorous Application Review</th>
                    </tr>
                    <tr>
                      <td className="lead class_table_row">Upon receipt of your completed application, our proficient team will conduct a thorough review. You will receive prompt notification via email once your application has been approved.</td>
                    </tr>
                    {/* Add more rows for additional steps */}
                  </tbody>
                </table>



                <table className="table class_table ml-4 w-80">
                  <tbody>
                    <tr>
                      <th scope="col" className='display-6 py-1 class_table_head' >Step 5: Commencing the Admission Process</th>
                    </tr>
                    <tr>
                      <td className="lead class_table_row">Upon acceptance, follow these steps: <br /><br />
                        ● Admission Fee Payment: Complete the payment for the Admission Fee, covering monthly fees, book fees, and quarterly tuition fees.<br /><br />
                        ● Book Delivery Process: Fill out the book delivery form, and the required materials will be sent to your designated address within 7 to 10 business days.<br /><br />
                        ● Welcome Email Reception: Expect to receive a heartfelt welcome email from our dedicated admissions department, signifying the smooth transition to the School Operations division. <br /></td>
                    </tr>
                    {/* Add more rows for additional steps */}
                  </tbody>
                </table>





              </div>
            </div>


            <div className="row  mt-5">
              <div className="col-md-8 bg-light admission-form-box">
                      <br />

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZzheZ-sNVm1vjHbYi0pv4v0gaJtZOgQqwcAyDslvnAdc0oA/viewform?embedded=true" width="800" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>              </div>
            </div>

          </div>
          <br />
        </section>
      )}
    </>
  );
};

export default AdmissionSteps;


