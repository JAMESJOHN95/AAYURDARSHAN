import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Treatments() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: '60px' }} className='container ' >
      <div className="row ">
        <div className="col-lg-4 col-md-6 p-2">
          <div className='border rounded p-2'>
            <h4 className='text-center'>Full Body Massage</h4>
            <div><img src="" alt="" /></div>
            <h6>Rate :</h6>
            <h6>Duration : </h6>
            <h6>Oils Used : </h6>
            <div className='text-center'><button onClick={handleShow} className=' btn btn-success'> Book Now</button></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 p-2">
          <div className='border rounded p-2'>
            <h4 className='text-center'>Panchakarma Treatment</h4>
            <div><img src="" alt="" /></div>
            <h6>Rate :</h6>
            <h6>Duration : </h6>
            <h6>Oils Used : </h6>
            <div className='text-center'><button onClick={handleShow} className=' btn btn-success'> Book Now</button></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 p-2">
          <div className='border rounded p-2'>
            <h4 className='text-center'>Relaxation Treatment</h4>
            <div><img src="" alt="" /></div>
            <h6>Rate :</h6>
            <h6>Duration : </h6>
            <h6>Oils Used : </h6>
            <div className='text-center'><button onClick={handleShow} className=' btn btn-success'> Book Now</button></div>
          </div>
        </div>
      </div>


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
            <input className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Therapy </label>
            <input className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Phone Number</label>
            <input className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Prefered Date</label>
            <input className='form-contro rounded border-1' type="date" />
            <label htmlFor="">Prefered Time</label>
            <input className='form-contro rounded border-1' type="time" />
            <label htmlFor="">Prefered Therapist</label>
            <input className='form-contro rounded border-1' type="text" /> <br />

            <div style={{ textAlign: 'center' }} ></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='btn btn-success'>Sumbit</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Treatments
