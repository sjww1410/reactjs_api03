import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getContact = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllContact(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchContact(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllContact = (pageno,pagesize) => {
return api.get(`/contact/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchContact = (key,pageno,pagesize) => {
return api.get(`/contact/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneContact = (id) => {
return api.get(`/contact/read_one.php?id=${id}`)
}
const deleteContact = (contact_id) => {
return api.post(`/contact/delete.php?`,{contact_id:contact_id})
}
const addContact = (data) => {
return api.post(`/contact/create.php?`,data)
}
const updateContact = (data) => {
return api.post(`/contact/update.php?`,data)
}
export {getContact,getAllContact,searchContact,getOneContact,deleteContact,addContact,updateContact}


