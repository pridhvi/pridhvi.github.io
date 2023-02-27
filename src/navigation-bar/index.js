import React from 'react'
import './index.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationBar = () => {
    const { pathname } = useLocation();
    const active = pathname.split('/')[1];
    
    return (
        <div className='container d-flex justify-content-center'>
            <div className='row nav nav-pills p-2 rounded-pill bg-black'>
                <Link className="nav-link p-0 col-4 d-flex justify-content-center" to="/about">
                    <span className={`wd-text-gray rounded-pill p-1 pe-3 ps-3 ${(active === 'about') ? 'active' : ''}`}>
                        About
                    </span>
                </Link>

                <Link className="nav-link p-0 col-4 d-flex justify-content-center" to="/projects">
                    <span className={`wd-text-gray rounded-pill p-1 pe-3 ps-3 ${(active === 'projects') ? 'active' : ''}`}>
                        Projects
                    </span>
                </Link>

                <Link className="nav-link p-0 col-4 d-flex justify-content-center" to="/contact">
                    <span className={`wd-text-gray rounded-pill p-1 pe-3 ps-3 ${(active === 'contact') ? 'active' : ''}`}>
                        Contact
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar