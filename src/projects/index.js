import React from 'react'
import ProjectItem from './project-item'
import projects from './projects.json'

const ProjectsComponent = () => {
  return (
    <div className="container">

      <div className='row d-flex justify-content-center align-items-center'>

        {projects.map(project => <ProjectItem key={project._id} project={project} />)}

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

export default ProjectsComponent