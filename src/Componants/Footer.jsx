import React from 'react'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

function Footer() {
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
    const handleregister =()=>{
        const token=sessionStorage.getItem('token')
        if(token){
            alert("Already loggedin")
        }
        else{
            navigate('/register')
        }
    }
    return (
        <>

            <div className='row mt-5 p-2 w-75 me-auto ms-auto'>
                <hr />
                <div className="col-lg-4 border-bottom ">
                    <div className='text-center'><img height='90px' src={logo} alt="" /></div>
                    <h4 className='text-center text-success'>AAYURDARSHAN</h4>
                    <h6 className='text-center text-success'>Kerala Ayurvedic Center</h6>
                

                </div>

                <div className="col-lg-4  d-flex flex-column text-center border-bottom">
                    <h6 style={{ textDecoration: 'underline' }} className='text-success mt-2'>Quick Links</h6>
                    <a onClick={handlehome} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#home">Home</a>
                        <a onClick={handleservices} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Services</a>
                        <a onClick={handleReviews} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Reviews</a>
                        <a onClick={handlecontact} className='ms-3 text-success' style={{ textDecoration: 'none' }} href="#pricing">Contact Us</a>
                        <a onClick={handleregister} style={{ textDecoration: 'none' }} className='text-success ms-2 fs-6'>Register/Login</a>

                </div>
                <div className="col-lg-4 text-center border-bottom" style={{ lineHeight: '15px', fontSize: '15px', fontweight:'800' }}>
                    <h6 style={{ textDecoration: 'underline' }} className='text-success mt-2'>Contact Us</h6>
                    <p className='text-success'>AAYURDARSHAN <br /> R.Madavan Nair Road , Opp Kerala Water Authority, Pallimukku </p>
                    <h6 style={{ lineHeight: '2px' }} className='text-success'><i style={{ lineHeight: '10px' }} className="fa-solid fa-phone-volume text-success"></i>  +91 9847041366</h6>
                    <h6 style={{ lineHeight: '10px' }} className='text-success'><i className="fa-solid fa-envelope text-success"></i> aayurdarshan@gmail.com</h6>


                    <i className="fa-brands fa-facebook text-success"></i>
                    <i className="fa-brands fa-instagram text-success ms-2"></i>
                    


                </div>
                </div >
            </>
            )
}

            export default Footer