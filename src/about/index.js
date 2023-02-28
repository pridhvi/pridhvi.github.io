import React from 'react'
import SkillsComponent from '../skills'
import './index.css'

const AboutComponent = () => {
  return (
    <div className="container">
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 p-0 mb-3 mb-md-5 wd-rounded-border'>
          <img className='wd-rounded-border shadow-lg'
            src='./images/pridhvi-dp.jpeg' width='100%' alt='profile dp' />
        </div>

        <div className='col-11 col-md-7 col-lg-6 col-xl-5 col-xxl-4 ms-lg-5'>
          <div className='bg-gray p-4 mb-3 mb-md-5 wd-rounded-border wd-text-gray shadow-lg'>
            <h4>
              Hello! I'm
            </h4>
            <h1 className='text-info'>
              Pridhvi Muthuraju
            </h1>
            <p className='mt-3'>
              I'm a passionate cybersecurity graduate student with solid software development skills
              and a keen interest in network security. I'm eager to apply my expertise to
              a challenging role that combines software development and cybersecurity. Let's connect and
              discuss how I can contribute to your organization's success.
            </p>
          </div>

          <SkillsComponent />

        </div>

      </div>

      <div className='row d-flex justify-content-center'>
        <div className='col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 bg-gray p-4 wd-rounded-border wd-text-gray shadow-lg d-flex justify-content-center'>
          <h4>
            Download my <a href='./files/pridhvi-resume.pdf' download className="btn btn-dark border-secondary rounded-pill shadow"><i className="bi bi-file-earmark-arrow-down"></i> Resume</a>
          </h4>
        </div>
      </div>

    </div>
  )
}

export default AboutComponent