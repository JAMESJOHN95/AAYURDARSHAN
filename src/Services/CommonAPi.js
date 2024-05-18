import axios from 'axios'

export const commonAPI = async (httpreq,url,reqbody,reqheader)=>{
const configreq = {
    method:httpreq,
    url,
    data:reqbody,
    headers:reqheader?reqheader:{
        "Content-Type":"Application/json"
    }
}
return await axios(configreq).then((res)=>{
    return res
}).catch((err)=>{
    return err
})
}