import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getCity = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCity(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchCity(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllCity = (pageno,pagesize) => {
return api.get(`/city/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchCity = (key,pageno,pagesize) => {
return api.get(`/city/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneCity = (id) => {
return api.get(`/city/read_one.php?id=${id}`)
}
const deleteCity = (city_id) => {
return api.post(`/city/delete.php?`,{city_id:city_id})
}
const addCity = (data) => {
return api.post(`/city/create.php?`,data)
}
const updateCity = (data) => {
return api.post(`/city/update.php?`,data)
}
export {getCity,getAllCity,searchCity,getOneCity,deleteCity,addCity,updateCity}


