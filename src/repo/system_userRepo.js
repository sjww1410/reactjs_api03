import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getSystem_User = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllSystem_User(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchSystem_User(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllSystem_User = (pageno,pagesize) => {
return api.get(`/system_user/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchSystem_User = (key,pageno,pagesize) => {
return api.get(`/system_user/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneSystem_User = (id) => {
return api.get(`/system_user/read_one.php?id=${id}`)
}
const deleteSystem_User = (system_user_id) => {
return api.post(`/system_user/delete.php?`,{system_user_id:system_user_id})
}
const addSystem_User = (data) => {
return api.post(`/system_user/create.php?`,data)
}
const updateSystem_User = (data) => {
return api.post(`/system_user/update.php?`,data)
}
export {getSystem_User,getAllSystem_User,searchSystem_User,getOneSystem_User,deleteSystem_User,addSystem_User,updateSystem_User}


