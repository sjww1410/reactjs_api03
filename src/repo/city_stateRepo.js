import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getCity_State = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCity_State(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchCity_State(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllCity_State = (pageno,pagesize) => {
return api.get(`/city_state/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchCity_State = (key,pageno,pagesize) => {
return api.get(`/city_state/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneCity_State = (id) => {
return api.get(`/city_state/read_one.php?id=${id}`)
}
const deleteCity_State = (city_state_id) => {
return api.post(`/city_state/delete.php?`,{city_state_id:city_state_id})
}
const addCity_State = (data) => {
return api.post(`/city_state/create.php?`,data)
}
const updateCity_State = (data) => {
return api.post(`/city_state/update.php?`,data)
}
export {getCity_State,getAllCity_State,searchCity_State,getOneCity_State,deleteCity_State,addCity_State,updateCity_State}


