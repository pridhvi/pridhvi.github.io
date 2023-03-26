import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = ({ project }) => {
    return (
        <div className='col-11 col-md-10 col-xxl-10 row shadow-lg wd-rounded-border bg-gray mb-5 mb-md-5 p-4 d-flex justify-content-center'>

            <div className='text-center col-10 col-lg-5 p-2 me-lg-3 wd-text-gray bg-gray-light wd-rounded-border pt-4 mb-3 mb-md-5 shadow-lg row'>
                <h1 className='text-info'>{project.title}</h1>
                <p className='mt-3'>{project.description}</p>

                {project.githubLink &&
                    <Link to={project.githubLink} target="_blank" className={`${project.websiteLink && "col-6"} d-flex justify-content-center align-items-center text-decoration-none`}>

                        <i className="bi bi-github me-2"
                            style={{ "fontSize": "2rem", "color": "black" }}
                            data-toggle="tooltip" data-placement="bottom" title="GitHub link"
                        />

                        <span className='d-none d-md-block wd-text-gray'>GitHub</span>
                    </Link>
                }

                {project.websiteLink &&
                    <Link to={project.websiteLink} target="_blank" className={`${project.githubLink && "col-6"} d-flex justify-content-center align-items-center text-decoration-none`}>
                        <i className="bi bi-box-arrow-up-right me-2"
                            style={{ "fontSize": "2rem", "color": "black" }}
                            data-toggle="tooltip" data-placement="bottom" title="GitHub link"
                        />

                        <span className='d-none d-md-block wd-text-gray'>Live Website</span>
                    </Link>
                }
            </div>

            <div className='col-10 col-lg-5 p-2 ms-lg-3 wd-text-gray bg-gray-light wd-rounded-border pt-4 mb-3 mb-md-5 shadow-lg row'>
                <h1 className='text-warning text-center'>
                    Tech Stack
                </h1>
                <p className='mt-3'>
                    <ul className='row'>
                        {project.techStack.map(tech => <li className='col-6'>{tech}</li>)}
                    </ul>
                </p>
            </div>

            {project.image &&
                <div className='col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-8 row p-0 d-flex justify-content-center'>
                    <img className='col-12 text-white'
                        src={project.image} width='100%' alt={project.image} />
                </div>
            }

        </div>
    )
}

export default ProjectItem