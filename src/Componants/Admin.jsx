import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { deletebookingApi, getbookingsApi, getenquiryApi } from '../Services/AllApi'



function Admin() {
    const [showadmin, setshowadmin] = useState(false)
    const [allbookings, setallbookings] = useState([])
    const [getallenquiry, setgetallenquiry] = useState([])





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

    const getallenquirys = async () => {
        try {
            const result = await getenquiryApi()
            console.log(result);
            if (result.status == 200) {
                setgetallenquiry(result.data)
                console.log("Enquiry :", result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handlebookingdelete = async (bookingId) => {
        const result = await deletebookingApi(bookingId)
        console.log(result);
        if (result.status == 200) {
            getallbooking()
        } else {
            console.log(result);
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
        getallenquirys()


    }, [])

    console.log(getallenquiry);
    return (
        <div className='container' style={{ marginTop: '60px' }}>
            {
                showadmin ?
                    <div>
                        <h2>BOOKINGS</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Sl.No</th>
                                    <th> Name</th>
                                    <th>Therapy</th>
                                    <th>Phone</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Therapist</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {allbookings?.length > 0 ?
                                    allbookings?.map((item, index) => (<tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.therapy}</td>
                                        <td>@{item.phone}</td>
                                        <td>{item.date}</td>
                                        <td>{item.time}</td>
                                        <td>{item.therapist}</td>
                                        <td><a onClick={() => handlebookingdelete(item?._id)} href=""><i class="fa-solid fa-trash text-danger"></i></a></td>
                                    </tr>)) :
                                    <div>No Bookings</div>
                                }
                            </tbody>
                        </Table>
                    </div >
                    :
                    <p></p>
            }
            <div>
                <h2>Enquiryes</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SlNo.</th>
                            <th>Name</th>
                            <th>Therapy</th>
                            <th>Phone</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getallenquiry?.length > 0 ?
                            getallenquiry?.map((enquiry, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{enquiry.name}</td>
                                    <td>{enquiry.therapy}</td>
                                    <td>{enquiry.Phone}</td>
                                    <td>{enquiry.comment}</td>
                                    <td><a onClick={() => handleenquirydelete(enquiry?._id)} href=""><i class="fa-solid fa-trash text-danger"></i></a></td>
                                </tr>)) :
                            <div>No Bookings</div>
                        }
                    </tbody>
                </table>
            </div >
        </div >
    )
}

export default Admin