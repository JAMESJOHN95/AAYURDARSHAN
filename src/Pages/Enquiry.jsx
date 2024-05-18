import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addenquiryApi } from '../Services/AllApi'


function Enquiry() {
const navigate = useNavigate()
const [allenquirys,setallenquirys] = useState({name:"",therapy:"",phone:"",comment:""})

const handlesubmit =async ()=>{
const existinguser = sessionStorage.getItem("token")
if(existinguser){
  try{
    if(allenquirys.name && allenquirys.name && allenquirys.name && allenquirys.name )
    {const result = await addenquiryApi(allenquirys)
    console.log(result);
    if(result.status == 200 ){
      setallenquirys(result.data)
      alert("Your Enquiry Successfully Submitted")
    }}
    else{
      alert("Please Fill The Form Completly")
    }

  }catch(err){
    console.log(err);
  }
}
else{
alert("Please login")
navigate('/login')
}
}



  return (
    <div  className='container w-50  ' style={{marginTop:'60px'}}>
        <h4>Contact Us</h4>
            <div className='d-flex flex-column  p-5 w-75  ' style={{lineHeight:'25px'}}>
                <label htmlFor="">Name</label>
                <input value={allenquirys.name} onChange={e=>setallenquirys({...allenquirys,name:e.target.value})}  className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Therapy </label>
                <input value={allenquirys.therapy} onChange={e=>setallenquirys({...allenquirys,therapy:e.target.value})}  className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Phone Number</label>
                <input value={allenquirys.phone} onChange={e=>setallenquirys({...allenquirys,phone:e.target.value})}  className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Comment</label>
                <textarea value={allenquirys.comment} onChange={e=>setallenquirys({...allenquirys,comment:e.target.value})} className='form-contro rounded border-1' name="" id="" cols="30" rows="5"></textarea>
                <div onClick={handlesubmit} style={{textAlign:'center'}} ><button  className='btn btn-success mt-2'>Sumbit</button></div>
            </div>
        
       
    </div>
  )
}

export default Enquiry