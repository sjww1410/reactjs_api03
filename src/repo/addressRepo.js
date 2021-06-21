import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getAddress = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllAddress(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchAddress(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllAddress = (pageno,pagesize) => {
return api.get(`/address/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchAddress = (key,pageno,pagesize) => {
return api.get(`/address/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneAddress = (id) => {
return api.get(`/address/read_one.php?id=${id}`)
}
const deleteAddress = (address_id) => {
return api.post(`/address/delete.php?`,{address_id:address_id})
}
const addAddress = (data) => {
return api.post(`/address/create.php?`,data)
}
const updateAddress = (data) => {
return api.post(`/address/update.php?`,data)
}
export {getAddress,getAllAddress,searchAddress,getOneAddress,deleteAddress,addAddress,updateAddress}


