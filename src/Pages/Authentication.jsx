import React from 'react'
import { Link} from 'react-router-dom'
import { FloatingLabel, Form, Toast } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Authentication({ insideregister }) {


  return (
    <>
      <div style={{ height: '100vh', width: '100%',marginTop:'60px' }} className='d-flex justify-content-center align-items-center '>
        <div className="containe w-75 mb-3">
          <Link to={'/'} style={{ textDecoration: 'none' }} className='text-success'><i className="fa-solid fa-left-long me-1 ms-3 text-success"></i> Back To Home</Link>
          <div className="card shadow p-5">
            <div className="row">
              <div className="col-lg-6  p-3">
                <img width={'400px'} src="" alt="" />
              </div>
              <div className="col-lg-6 p-2">
                <h1>AAYURDARSHAN</h1>
                
                <h3>Sign {insideregister ? "up" : " in"} to your Account</h3>

                <form action="">

                  {insideregister ?
                    <div>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                      >
                        <Form.Control  type="text" placeholder="Username" />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control  type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Password">

                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                    </div>
                    :
                    <div>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control  type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control  type="password" placeholder="Password" />
                      </FloatingLabel>
                    </div>}

                  {insideregister ?
                    <div className='mt-3'><button  className='btn btn-primatry'>Register</button>
                      <p>Already have an account ? <Link to={'/login'} >Login</Link></p>
                    </div>
                    :
                    <div className='mt-3'><button className='btn btn-primatry'>Login</button>
                      <p>Already have an account ? <Link to={'/register'}>Register Now</Link></p>

                    </div>}


                </form>
              </div>
            </div>
          </div>
        </div>


      </div>
      < ToastContainer position='top-center' theme='colored' autoClose={'1500'} />
    </>
  )
}

export default Authentication