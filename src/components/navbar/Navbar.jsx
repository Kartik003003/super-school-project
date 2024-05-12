import React from 'react'
import menu from '../navbardata/NavbarLinkData'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar --navbar-1 m-0  sticky-top navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src="./hlogo1.png" alt="" className="navbar-brand-img" height={50} />
                        <span className='h4 text-white mx-2'>SUPER SCHOOL</span>
                    </div>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar2"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-light"></i>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item d-flex border-right">
                                <Link className="nav-link text-white" to={'/facebook'}>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link className="nav-link text-white" to={'/twitter'}>
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link className="nav-link text-white" to={'/youtube'}>
                                    <i className="fab fa-youtube"></i>
                                </Link>
                                <Link className="nav-link text-white" to={'/linkedin'}>
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link className="nav-link text-white" to={'/instagram'}>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'tel:9519519521'}>
                                    <i className="fas fa-phone-volume mx-1"></i>
                                    Call +91 9519519521
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'mailto:Info@superschool.com'}>
                                    <i className="fas fa-envelope mx-1"></i>
                                    Info@superschool.com
                                </Link>
                            </li>
                            {/* <li className="nav-item border-left">
                                <Link className="nav-link text-white" to={'/login'}>
                                    <i className="fas fa-sign-in-alt mx-1"></i>
                                    Login
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar --navbar2 p-0 m-0 navbar-expand-lg bg-dark shadow-sm">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbar2">
                        <ul className="navbar-nav mr-auto w-100">
                            {menu ? menu.map((item, index) => (
                                <li className="nav-item dropdown" key={index}>
                                    <Link className="nav-link text-white" to={item.path} data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.title}
                                    </Link>
                                    <ul className="dropdown-menu bg-primary p-0">
                                        {item.childrens ? item.childrens.map((child, childIndex) => (
                                            <li className="nav-item dropend border-bottom" key={childIndex}>
                                                <Link className="nav-link mx-3 p-1 text-decoration-none text-white" to={child.path} role='button' data-bs-toggle="dropdown" aria-expanded="false">
                                                    {child.title}
                                                </Link>
                                                {child.childrens ? (
                                                    <ul className="dropdown-menu bg-primary p-0">
                                                        {child.childrens.map((subChild, subChildIndex) => (
                                                            <li className='nav-item dropend border-bottom' key={subChildIndex}>
                                                                <Link className="dropdown-item text-decoration-none text-black" role='button' data-bs-toggle="dropdown" aria-expanded="false" to={subChild.path}>
                                                                    {subChild.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : null}
                                            </li>
                                        )) : null}
                                    </ul>
                                </li>
                            )) : null}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
