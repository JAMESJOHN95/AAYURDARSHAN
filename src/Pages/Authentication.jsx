import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabel, Form, Toast } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../Services/AllApi';


function Authentication({ insideregister }) {

  const navigate = useNavigate()
  const [userinput, setuserinput] = useState({ username: "", email: "", password: "", role: "user"})

  const handleregisteruser = async (e) => {
    e.preventDefault();
    if (userinput.username && userinput.email && userinput.password ) {
      // Api CAll
      try {
        const result = await registerApi(userinput)
        console.log(result);
        if (result.status == 200) {
          alert("Succesfully Registered")
          setuserinput({ username: "", email: "", password: "", role: "user" })
          setTimeout(() => {
            navigate('/login')
          }, 1500);
        }
        else {
          alert(result.response.data)
        }
      }catch(err){
        console.log(err);
      }

    }
    else {
      alert("please fill the form completely")
    }
  }

  // login--------------------------------------------------------------------------------------

const  handlelogin = async(e)=>{
  e.preventDefault()
  if(userinput.email && userinput.password)
  {
    try{
      const result = await loginApi(userinput)
      if(result.status == 200){
        sessionStorage.setItem("existinguser" ,JSON.stringify(result.data.existinguser))
        sessionStorage.setItem("token",(result.data.token))
        // setIsAuthorisation(true)
        alert(`Welcome ${result.data.existinguser.username}`)
        setuserinput({email:"",password:""})
        setTimeout(() => {
          navigate('/')
        }, 2000);
      }
    }catch(err){
      console.log(err);
  
    }
  }
  else{
    toast.error("Fill the form completely")
  }
  }


  return (
    <>
      <div style={{ height: '100vh', width: '100%', marginTop: '60px' }} className='d-flex justify-content-center align-items-center '>
        <div className="containe w-75 mb-3">
          <Link to={'/'} style={{ textDecoration: 'none' }} className='text-success'><i className="fa-solid fa-left-long me-1 ms-3 text-success"></i> Back To Home</Link>
          <div className="card shadow p-5">
            <div className="row">
              <div className="col-lg-6  p-3">
                <img width={'400px'} src="" alt="" />
              </div>
              <div style={{height:"100vh"}} className="col-lg-6 p-2 ">
                <h2>AAYURDARSHAN</h2>

                <h3>Sign {insideregister ? "up" : " in"} to your Account</h3>

                <form action="">

                  {insideregister ?
                    <div >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                      >
                        <Form.Control value={userinput.username} onChange={e => setuserinput({ ...userinput, username: e.target.value })} type="text" placeholder="Username" />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingEmail"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control value={userinput.email} onChange={e => setuserinput({ ...userinput, email: e.target.value })} type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel
                       controlId="floatingPassword" 
                       label="Password">

                        <Form.Control value={userinput.password} onChange={e => setuserinput({ ...userinput, password: e.target.value })} type="password" placeholder="Password" />
                      </FloatingLabel>

                      {/* <FloatingLabel
                        controlId="floatingrole"
                        label="User / Admin"
                        className="mt-3"
                        
                      >
                        <Form.Control value={userinput.role} onChange={e => setuserinput({ ...userinput, role: e.target.value })} type="text" placeholder="Username" />
                      </FloatingLabel> */}
                    </div>
                    :
                    <div>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control  value={userinput.email} onChange={e=>setuserinput({...userinput,email:e.target.value})}
                        type="email"
                         placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control value={userinput.password} onChange={e=>setuserinput({...userinput,password:e.target.value})}  type="password" placeholder="Password" />
                      </FloatingLabel>
                    </div>}

                  {insideregister ?
                    <div  ><button onClick={handleregisteruser} className='mt-3 btn btn-primary'>Register</button>
                      <p>Already have an account ? <Link to={'/login'} >Login</Link></p>
                    </div>
                    :
                    <div className='mt-3'><button onClick={handlelogin} className='btn btn-success'>Login</button>
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