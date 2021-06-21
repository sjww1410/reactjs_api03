import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getTelephone = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTelephone(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchTelephone(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllTelephone = (pageno,pagesize) => {
return api.get(`/telephone/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchTelephone = (key,pageno,pagesize) => {
return api.get(`/telephone/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneTelephone = (id) => {
return api.get(`/telephone/read_one.php?id=${id}`)
}
const deleteTelephone = (telephone_id) => {
return api.post(`/telephone/delete.php?`,{telephone_id:telephone_id})
}
const addTelephone = (data) => {
return api.post(`/telephone/create.php?`,data)
}
const updateTelephone = (data) => {
return api.post(`/telephone/update.php?`,data)
}
export {getTelephone,getAllTelephone,searchTelephone,getOneTelephone,deleteTelephone,addTelephone,updateTelephone}


