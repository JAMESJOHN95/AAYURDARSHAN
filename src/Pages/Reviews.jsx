import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addreviewApi, getreviewApi } from '../Services/AllApi';
import { useNavigate } from 'react-router-dom';


function Reviews() {
  const navigate = useNavigate()
  const [showadmin, setshowadmin] = useState(false)

  const [addreview, setreview] = useState({ username: "", therapy: "", therapist: "", review: "", rating: "",replay:"" })
  const [getreviews, setgetreviews] = useState([])

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
    getallreviews()
  }, [])

  const getallreviews = async () => {

    try {
      const result = await getreviewApi()
      console.log(result);
      if (result.status == 200) {
        setgetreviews(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handlesend = async ()=>{
    const { username, therapy, therapist, review, rating,replay } = addreview
    if(addreview.replay){
     try{ const result = await addreviewApi(addreview)
      console.log(result);
      if(result.satus == 200){
        setreview(result)
      }
    }catch(err){
      console.log(err);
    }
    }
  }



  const handlepost = async () => {
    const { username, therapy, therapist, review, rating,replay } = addreview
    if (addreview.username && addreview.therapy && addreview.therapist && addreview.review && addreview.rating) {
      const token = sessionStorage.getItem("token")
      if (token) {
        try {
          const result = await addreviewApi(addreview)
          console.log(result);
          if (result.status == 200) {
            setreview(result)
            handleClose()
          }
        } catch (err) {
          console.log(err);
        }
      }
      else {
        alert("Please login!!")
        setTimeout(() => {
          navigate('/register')
        }, 2000);
      }
    }
    else {
      alert("Please Fill The Form Completely")
    }
  }
  console.log(addreview);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container ' style={{ marginTop: '60px' }}>
      <div className='d-flex'>
        <h3>Customer Reviews</h3>
        <button onClick={handleShow} style={{ height: '30px' }} className='btn btn-success ms-3'>Write your Review</button>
      </div>
      <hr />
      {showadmin ?
        <div className="row">
          {getreviews?.length > 0 ?
            getreviews?.map(item => (<div className="col-lg-3 col-md-4 mt-3">
              <Card>
                <Card.Header>{item.username}</Card.Header>
                <Card.Body>
                  <h6>Treatment :{item.therapy}</h6>
                  <h6>Therapist : {item.therapist}</h6>
                  <p> Review : {item.review}</p>
                  <h6> Rating : {`${item.rating}/5`}</h6>
                 { item.replay && (<div>
                    <p>Replay :{item.replay}</p>
                    </div>)}
                 
                 <div className='d-flex'>
                    <label htmlFor="">Replay</label>
                    <input value={addreview.replay} onChange={e=>setreview({...addreview,replay:e.target.value})} type="text" className='form-control w-75 ms-2 border-0=1' />
                    <button onClick={handlesend} className='ms-1 btn btn-primary'>Send</button>
                 </div>
                  <div className='text-center'>
                    <button className='btn' href=""><i class="fa-solid fa-trash text-danger"></i></button>

                  </div>
                </Card.Body>
              </Card>
            </div>))

            :
            <div>
              <h3>No Reviews Posted Yet!!!!!!!</h3>
            </div>

          }

        </div> :
        <div className="row">
          {getreviews?.length > 0 ?
            getreviews?.map(item => (<div className="col-lg-3 col-md-4 mt-3">
              <Card>
                <Card.Header>{item.username}</Card.Header>
                <Card.Body>
                  <h6>Treatment :{item.therapy}</h6>
                  <h6>Therapist : {item.therapist}</h6>
                  <p> Review : {item.review}</p>
                  <h6> Rating : {`${item.rating}/5`}</h6>
                </Card.Body>
              </Card>
            </div>))

            :
            <div>
              <h3>No Reviews Posted Yet!!!!!!!</h3>
            </div>

          }

        </div>
      }

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
            <input value={addreview.username} onChange={e => setreview({ ...addreview, username: e.target.value })} className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Therapy </label>
            <input value={addreview.therapy} onChange={e => setreview({ ...addreview, therapy: e.target.value })} className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Therapist</label>
            <input value={addreview.therapist} onChange={e => setreview({ ...addreview, therapist: e.target.value })} className='form-contro rounded border-1' type="text" />
            <label htmlFor="">Review</label>
            <textarea value={addreview.review} onChange={e => setreview({ ...addreview, review: e.target.value })} className='form-contro rounded border-1' type="text
            " />
            <label htmlFor="">Ratings</label>
            <input value={addreview.rating} onChange={e => setreview({ ...addreview, rating: e.target.value })} className='form-contro rounded border-1' type="text
            " />

            <div style={{ textAlign: 'center' }} ></div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handlepost} variant="primary">Post</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Reviews