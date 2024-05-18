import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import UpdateTreatments from '../Componants/UpdateTreatments';
import { addbookingApi, gettreatmentsApi } from '../Services/AllApi';
import { useNavigate } from 'react-router-dom';


function Treatments() {
  const navigate = useNavigate()
  const [bookings,setbookings] = useState({name:"",therapy:"",phone:"",date:"",time:"",therapist:""})
  const [alltreatments, setalltreatments] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    
    const existinguser = sessionStorage.getItem("token")
    if(existinguser){
      setShow(true);
    }
    else{
      alert("Please Loginin To Continue.")
      navigate('/register')
    }
    }

  const gettreatments = async () => {
    try {
      const result = await gettreatmentsApi()
      console.log(result);
      if (result.status == 200) {
        setalltreatments(result.data)
      }
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    gettreatments()
  }, [])
  console.log(alltreatments);

  const handlesubmit = async ()=>{
    const  {name,therapy,phone,date,time,therapist}  = bookings

    if(bookings.name && bookings.therapy && bookings.phone && bookings.date && bookings.time && bookings.therapist){
      try{
        const result = await addbookingApi(bookings)
        console.log(result);
        if(result.status == 200){
          setbookings(result.data)
          handleClose()
      }

      }catch(err){
        console.log(err);
      }

    }else{
      alert("Please FIll the Form Completely")
    }
  }
  console.log(bookings);


  return (
    <div style={{ marginTop: '60px' }} className='container ' >
      <div className="row ">
       {alltreatments?.length>0?
       alltreatments?.map(item=>(<div  className="col-lg-3 col-md-4 col-sm-6 p-2">
       <div className='border rounded p-2'>
         <h4 className='text-center'>{item.therapy}</h4>
         <div><img height='150px' width='205px' src={item.image} alt="" /></div>
        <div className='mt-3' style={{lineHeight:'10px'}}>
           <p >{item.rate}</p>
           <p>{item.duration} </p>
           <p>{item.oils} </p>
        </div>
       </div>
     </div>))
     :
     <div>Nothing To display</div>
        }
      </div>
      <div className='text-center'><button style={{height:'25px' , width:"110px",border:'none',borderRadius:"15px",background:'#73f74a',color:'white'}} onClick={handleShow} className='  '> Book Now</button></div>

      {/* ******************************************************************************************************** */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column' style={{ lineHeight: '23px' }}>
            <label htmlFor="">Name</label>
            <input value={bookings.name} onChange={e=>setbookings({...bookings,name:e.target.value})} className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Therapy </label>

            {/* <input value={bookings.therapy} onChange={e=>setbookings({...bookings,therapy:e.target.value})} className='form-contro rounded border-1' type="text" /> */}
            <select value={bookings.therapy} onChange={e=>setbookings({...bookings,therapy:e.target.value})} className='form-contro rounded border-1' name="" id="">
              <option value="Massage">Massage </option>
              <option value="Kizhi">Kizhi </option>
              <option value="FootBath">FootBath </option>
              <option value="Fish Therapy">Fish Therapy </option>
              <option value="HotStone">HotStone </option>
            </select>

            <label htmlFor="">Phone Number</label>
            <input value={bookings.phone} onChange={e=>setbookings({...bookings,phone:e.target.value})} className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Prefered Date</label>
            <input value={bookings.date} onChange={e=>setbookings({...bookings,date:e.target.value})} className='form-contro rounded border-1' type="date" />
            <label htmlFor="">Prefered Time</label>
            <input value={bookings.time} onChange={e=>setbookings({...bookings,time:e.target.value})} className='form-contro rounded border-1' type="time" />
            <label htmlFor="">Prefered Therapist</label>
            <select value={bookings.therapist}  onChange={e=>setbookings({...bookings,therapist:e.target.value})} className='form-contro rounded border-1' name="" id="">
              <option value="Leo">Leo</option>
              <option value="Das">Das</option>
              <option value="Joy">Joy</option>
              <option value="Ancy">Ancy</option>
              

            </select>
            {/* <input value={bookings.therapist} onChange={e=>setbookings({...bookings,therapist:e.target.value})} className='form-contro rounded border-1' type="text" /> <br /> */}

            <div style={{ textAlign: 'center' }} ></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button onClick={handlesubmit} className='btn btn-success'>Sumbit</button>
        </Modal.Footer>
      </Modal>
      <UpdateTreatments />

    </div>
  )
}

export default Treatments
