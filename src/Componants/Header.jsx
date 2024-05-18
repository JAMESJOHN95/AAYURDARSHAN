import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate()
    const [showadmin, setshowadmin] = useState(false)


    useEffect(() => {

        const roledetail = sessionStorage.getItem("existinguser")
        console.log(roledetail);
        if (roledetail) {
            const parsedRoleDetail = JSON.parse(roledetail);
            const roledetails = parsedRoleDetail.role
            console.log(roledetails);
            if (roledetails === "admin") {
                setshowadmin(true)
            }
            else {
                setshowadmin(false)
            }
        }
        else {
            console.log("User role details not found in sessionStorage");
        }
    }, [])


    const handleReviews = () => {
        navigate('/reviews')
    }
    const handlehome = () => {
        navigate('/')
    }
    const handleservices = () => {
        navigate('/treatments')
    }
    const handlecontact = () => {
        navigate('/enquiry')
    }
    const handleregister = () => {
        const token = sessionStorage.getItem('token')
        if (token) {
            alert("Already loggedin")
        }
        else {
            navigate('/register')
        }
    }
    const handlelogout = () => {
        const token = sessionStorage.getItem('token')
        if (token) {
            sessionStorage.clear()
            navigate('/')
        }
        else {
            alert("You are Not Logged In")
        }
    }
    const handleadmin = () => {
        navigate('/admin')
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

                        {showadmin?
                            <a onClick={handleadmin} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Admin</a>
                            :
                            <a onClick={handlecontact} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Contact Us</a>
                        }

                        <a onClick={handleregister} style={{ textDecoration: 'none' }} className='text-success ms-2 '>Register/Login</a>
                        <a onClick={handlelogout} style={{ textDecoration: 'none' }} className='text-success ms-2 '>Logout</a>

                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header