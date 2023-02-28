import React from 'react'
import './index.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationBar = () => {
    const { pathname } = useLocation();
    const active = pathname.split('/')[1];

    return (
        <div className='container d-flex justify-content-center mb-3 mb-md-5'>

            <Link className="nav-link p-0 ps-2 pe-2 d-flex justify-content-center align-items-center rounded-pill bg-black shadow" to="/">
                <span className={`wd-text-gray rounded-pill p-1 pe-2 ps-2 ${(active === '') ? 'active' : ''}`}>
                    <i class="bi bi-house-door-fill"></i>
                </span>
            </Link>
            
            <div className='row nav nav-pills ms-2 p-2 pe-3 rounded-pill bg-black shadow'>


                <Link className="nav-link p-0 col-4 d-flex justify-content-center" to="/projects">
                    <span className={`wd-text-gray rounded-pill p-1 pe-3 ps-3 ${(active === 'projects') ? 'active' : ''}`}>
                        Projects
                    </span>
                </Link>

                <Link className="nav-link p-0 ps-2 col-4 d-flex justify-content-center" to="/education">
                    <span className={`wd-text-gray rounded-pill p-1 pe-3 ps-3 ${(active === 'education') ? 'active' : ''}`}>
                        Education
                    </span>
                </Link>

                <Link className="nav-link p-0 ps-3 col-4 d-flex justify-content-center" to="/contact">
                    <span className={`wd-text-gray rounded-pill p-1 pe-3 ps-3 ${(active === 'contact') ? 'active' : ''}`}>
                        Contact
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar