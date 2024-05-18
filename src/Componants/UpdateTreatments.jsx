import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Modal, } from 'react-bootstrap'
import { addtreatmentsApi, getbookingsApi } from '../Services/AllApi';



function UpdateTreatments() {
    const [allbookings, setallbookings] = useState([])
    const [treatments, settreatments] = useState({ therapy: "", rate: "", duration: "", oils: "", image: "" })
    const [showadmin, setshowadmin] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getallbooking = async () => {
        try {
            const result = await getbookingsApi()
            console.log(result);
            if (result.status === 200) {
                setallbookings(result.data)
                console.log("Booking Data:", result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

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

        getallbooking()

    }, [])



    const handlesubmit = async () => {
        const { therapy, rate, duration, oils, image } = treatments
        if (treatments.therapy && treatments.rate && treatments.duration && treatments.oils && treatments.image) {
            try {
                const result = await addtreatmentsApi(treatments)
                console.log(result);
                if (result.status == 200) {
                    settreatments(result.data)
                    handleClose()
                }
            } catch (err) {
                console.log(err);
            }
        }
        else {
            alert("Please Fill The Form Completly")
        }
    }
    console.log(treatments);
    console.log(allbookings);




    return (
        <>
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
                        <label htmlFor="">Therapy </label>
                        <input value={treatments.therapy} onChange={e => settreatments({ ...treatments, therapy: e.target.value })} className='form-contro rounded border-1' type="text" />
                        <label htmlFor="">Rate</label>
                        <input value={treatments.rate} onChange={e => settreatments({ ...treatments, rate: e.target.value })} className='form-contro rounded border-1' type="text" />
                        <label htmlFor="">Duration</label>
                        <input value={treatments.duration} onChange={e => settreatments({ ...treatments, duration: e.target.value })} className='form-contro rounded border-1' type="text" />
                        <label htmlFor="">Oils Used</label>
                        <input value={treatments.oils} onChange={e => settreatments({ ...treatments, oils: e.target.value })} className='form-contro rounded border-1' type="text" />
                        <label htmlFor="">Image</label>
                        <input value={treatments.image} onChange={e => settreatments({ ...treatments, image: e.target.value })} className='form-contro rounded border-1' type="text" /> <br />

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
            {/* ------------------------------------------------------------------------------------------------ */}

            {
                showadmin ?
                    <div className='text-center mt-2'>
                        <Button onClick={handleShow}>Update</Button>
                    </div>
                    :
                    <p></p>
            }
            <hr />
            
        </>
    )
}

export default UpdateTreatments