import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getSystem_User_Type = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllSystem_User_Type(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchSystem_User_Type(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllSystem_User_Type = (pageno,pagesize) => {
return api.get(`/system_user_type/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchSystem_User_Type = (key,pageno,pagesize) => {
return api.get(`/system_user_type/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneSystem_User_Type = (id) => {
return api.get(`/system_user_type/read_one.php?id=${id}`)
}
const deleteSystem_User_Type = (system_user_type_id) => {
return api.post(`/system_user_type/delete.php?`,{system_user_type_id:system_user_type_id})
}
const addSystem_User_Type = (data) => {
return api.post(`/system_user_type/create.php?`,data)
}
const updateSystem_User_Type = (data) => {
return api.post(`/system_user_type/update.php?`,data)
}
export {getSystem_User_Type,getAllSystem_User_Type,searchSystem_User_Type,getOneSystem_User_Type,deleteSystem_User_Type,addSystem_User_Type,updateSystem_User_Type}


