import React from 'react'

function Enquiry() {
  return (
    <div  className='container w-50  ' style={{marginTop:'60px'}}>
        <h4>Contact Us</h4>
            <div className='d-flex flex-column  p-5 w-75  ' style={{lineHeight:'25px'}}>
                <label htmlFor="">Name</label>
                <input  className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Therapy </label>
                <input  className='form-contro rounded border-1' type="text" />
                <label htmlFor="">Phone Number</label>
                <input  className='form-contro rounded border-1' type="text" />
                <div style={{textAlign:'center'}} ><button  className='btn btn-success mt-2'>Sumbit</button></div>
            </div>
        
       
    </div>
  )
}

export default Enquiry