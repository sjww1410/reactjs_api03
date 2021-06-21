import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getAddress_Type = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllAddress_Type(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchAddress_Type(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllAddress_Type = (pageno,pagesize) => {
return api.get(`/address_type/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchAddress_Type = (key,pageno,pagesize) => {
return api.get(`/address_type/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneAddress_Type = (id) => {
return api.get(`/address_type/read_one.php?id=${id}`)
}
const deleteAddress_Type = (address_type_id) => {
return api.post(`/address_type/delete.php?`,{address_type_id:address_type_id})
}
const addAddress_Type = (data) => {
return api.post(`/address_type/create.php?`,data)
}
const updateAddress_Type = (data) => {
return api.post(`/address_type/update.php?`,data)
}
export {getAddress_Type,getAllAddress_Type,searchAddress_Type,getOneAddress_Type,deleteAddress_Type,addAddress_Type,updateAddress_Type}


