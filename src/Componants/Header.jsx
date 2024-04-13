import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
const navigate = useNavigate()

const handleReviews=()=>{
    navigate('/reviews')
}
const handlehome=()=>{
    navigate('/')
}
const handleservices=()=>{
    navigate('/treatments')
}
const handlecontact=()=>{
    navigate('/enquiry')
}


    return (
        <>
            <Navbar style={{ height: '50px', position: 'fixed', zIndex: '10' }} className='top-0 w-100 bg-white' data-bs-theme="light">
                <Container>
                    <img
                        src={logo}
                        width="60"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <div className=" d-flex justify-content-between">
                        <a onClick={handlehome} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#home">Home</a>
                        <a onClick={handleservices} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Services</a>
                        <a onClick={handleReviews} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Reviews</a>
                        <a onClick={handlecontact} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Contact Us</a>

                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header