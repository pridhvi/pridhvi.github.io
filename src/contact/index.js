import React from 'react'
import { Link } from "react-router-dom";

const ContactComponent = () => {
  return (
    <div className='container'>
    <div className="container d-flex justify-content-center mb-3 mb-md-5">
      <div className='col-10 col-sm-10 col-md-8 col-lg-4 bg-gray row p-4 wd-rounded-border wd-text-gray shadow-lg text-center'>

        <Link className="nav-link" to="mailto:pridhvimuthuraju@gmail.com">
          <i className="bi bi-envelope-fill" style={{ "fontSize": "2rem"}}></i>
        </Link>

        <span className='mb-4 mb-md-5'>pridhvimuthuraju@gmail.com</span>

        <Link className="nav-link" to="https://github.com/pridhvi">
          <i class="bi bi-github" style={{ "fontSize": "2rem"}}></i>
        </Link>

        <span className='mb-4 mb-md-5'>GitHub Profile</span>

        <Link className="nav-link" to="https://www.linkedin.com/in/pridhvi/">
          <i class="bi bi-linkedin" style={{ "fontSize": "2rem"}}></i>
        </Link>

        <span className='mb-4 mb-md-5'>LinkedIn Profile</span>

        <Link className="nav-link" to="https://www.instagram.com/_pridhvi/">
          <i class="bi bi-instagram" style={{ "fontSize": "2rem"}}></i>
        </Link>

        <span>Instagram Profile</span>

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

export default ContactComponent