import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getContact_Type = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllContact_Type(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchContact_Type(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllContact_Type = (pageno,pagesize) => {
return api.get(`/contact_type/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchContact_Type = (key,pageno,pagesize) => {
return api.get(`/contact_type/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneContact_Type = (id) => {
return api.get(`/contact_type/read_one.php?id=${id}`)
}
const deleteContact_Type = (contact_type_id) => {
return api.post(`/contact_type/delete.php?`,{contact_type_id:contact_type_id})
}
const addContact_Type = (data) => {
return api.post(`/contact_type/create.php?`,data)
}
const updateContact_Type = (data) => {
return api.post(`/contact_type/update.php?`,data)
}
export {getContact_Type,getAllContact_Type,searchContact_Type,getOneContact_Type,deleteContact_Type,addContact_Type,updateContact_Type}


