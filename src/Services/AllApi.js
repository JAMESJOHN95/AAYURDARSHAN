import { commonAPI } from './CommonAPi';
import {Server_URL} from './Serverurl';
//register
export const registerApi = async (reqbody) => {
    return await commonAPI("POST", `${Server_URL}/register`, reqbody)
  }
  // login
  export const loginApi = async (reqbody) => {
    return await commonAPI("POST", `${Server_URL}/login`, reqbody)
  }

  // add review

  export const addreviewApi = async (reqbody)=>{
    return await commonAPI("POST",`${Server_URL}/addreviews`,reqbody)
  } 

  // get all reviews

  export const getreviewApi = async ()=>{
    return await commonAPI("GET",`${Server_URL}/getreviews`,"")
  } 
  // add treatment lists

   export const addtreatmentsApi = async (reqbody)=>{
    return await commonAPI("POST",`${Server_URL}/treatments`,reqbody)
  } 
  //get all treatments
  export const gettreatmentsApi = async ()=>{
    return await commonAPI("GET",`${Server_URL}/treatments`,"")
  } 

  // post booking
  export const addbookingApi = async (reqbody)=>{
    return await commonAPI("POST",`${Server_URL}/booking`,reqbody)
  }
// get all bookings

export const getbookingsApi = async ()=>{
  return await commonAPI("GET",`${Server_URL}/booking`,"")
} 

// post enquiry

export const addenquiryApi = async (reqbody)=>{
  return await commonAPI("POST",`${Server_URL}/enquiry`,reqbody)
}

// get all enquirys

export const getenquiryApi = async ()=>{
  return await commonAPI("GET",`${Server_URL}/enquiry`,"")
} 

//delete booking

export const deletebookingApi = async (bookingId)=>{
  return await commonAPI("DELETE",`${Server_URL}/delete-booking`/bookingId,{})
}

