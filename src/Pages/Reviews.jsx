import React from 'react'
import{ Card} from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Reviews() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container ' style={{marginTop:'60px'}}>
<div className='d-flex'>
  <h3>Customer Reviews</h3>
  <button onClick={handleShow} style={{height:'30px'}} className='btn btn-success ms-3'>Write your Review</button>
</div>
<hr />
<div className="row">
  <div className="col-lg-3 col-md-4">
  <Card>
      <Card.Header>Customer Name</Card.Header>
      <Card.Body>
        <h6>Treatment</h6>
        <h6>Therapist name</h6>
        <p>Review</p>
        <h6>Ratings : 4/5</h6>
      </Card.Body>
    </Card>
  </div>
  <div className="col-lg-3"></div>
  <div className="col-lg-3"></div>
  <div className="col-lg-3"></div>
</div>

{/* *********************************************************************************************** */}

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex flex-column' style={{ lineHeight: '23px' }}>
            <label htmlFor="">Name</label>
            <input className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Therapy </label>
            <input className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Therapist</label>
            <input className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Review</label>
            <textarea className='form-contro rounded border-1' type="text
            " />
            <label htmlFor="">Ratings</label>
            <input className='form-contro rounded border-1' type="text
            " />

            <div style={{ textAlign: 'center' }} ></div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary">Post</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Reviews