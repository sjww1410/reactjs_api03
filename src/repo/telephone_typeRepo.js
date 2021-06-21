import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getTelephone_Type = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTelephone_Type(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchTelephone_Type(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllTelephone_Type = (pageno,pagesize) => {
return api.get(`/telephone_type/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchTelephone_Type = (key,pageno,pagesize) => {
return api.get(`/telephone_type/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneTelephone_Type = (id) => {
return api.get(`/telephone_type/read_one.php?id=${id}`)
}
const deleteTelephone_Type = (telephone_type_id) => {
return api.post(`/telephone_type/delete.php?`,{telephone_type_id:telephone_type_id})
}
const addTelephone_Type = (data) => {
return api.post(`/telephone_type/create.php?`,data)
}
const updateTelephone_Type = (data) => {
return api.post(`/telephone_type/update.php?`,data)
}
export {getTelephone_Type,getAllTelephone_Type,searchTelephone_Type,getOneTelephone_Type,deleteTelephone_Type,addTelephone_Type,updateTelephone_Type}


