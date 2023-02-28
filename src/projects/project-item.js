import React from 'react'

const ProjectItem = ({ project }) => {
    return (
        <div className='col-11 col-md-10 col-xxl-10 row shadow-lg wd-rounded-border bg-gray mb-3 mb-md-5 p-4 d-flex justify-content-center'>

            <div className='col-10 col-lg-5 p-2 me-lg-3 wd-text-gray bg-gray-light wd-rounded-border mb-3 mb-md-5 shadow-lg row'>
                <h1 className='text-info d-flex justify-content-center'>{project.title}</h1>
                <p className='mt-3'>{project.description}</p>
                <span className='col-6'>
                    <div className='d-flex justify-content-center align-items-center'>
                        {project.githubLink &&
                            // eslint-disable-next-line jsx-a11y/anchor-has-content, react/jsx-no-target-blank
                            <a href={project.githubLink} className="bi bi-github me-2" target="_blank"
                                style={{ "fontSize": "2rem", "color": "black" }}
                                data-toggle="tooltip" data-placement="bottom" title="GitHub link"
                            />
                        }
                        <span className='d-none d-md-block'>GitHub Link</span>
                    </div>
                </span>
                <span className='col-6'>
                    <div className='d-flex justify-content-center align-items-center'>
                    {project.githubLink &&
                        // eslint-disable-next-line jsx-a11y/anchor-has-content, react/jsx-no-target-blank
                        <a href={project.websiteLink} className="bi bi-box-arrow-up-right me-2" target="_blank"
                            style={{ "fontSize": "2rem", "color": "black" }}
                            data-toggle="tooltip" data-placement="bottom" title="GitHub link"
                        />
                    }
                    <span className='d-none d-md-block'>Live Website Link</span>
                    </div>
                </span>
            </div>

            <div className='col-10 col-lg-5 p-2 ms-lg-3 wd-text-gray bg-gray-light wd-rounded-border mb-3 mb-md-5 shadow-lg row'>
                <h1 className='text-warning d-flex justify-content-center'>
                    Tech Stack
                </h1>
                <p className='mt-3'>
                    <ul>
                        {project.techStack.map(tech => <li>{tech}</li>)}
                    </ul>
                </p>
            </div>

            <div className='col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 row p-0 d-flex justify-content-center'>
                <img className='col-12 text-white'
                    src={project.image} width='100%' alt={project.image} />
            </div>

        </div>
    )
}

export default ProjectItem