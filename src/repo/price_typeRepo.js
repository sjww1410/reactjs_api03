import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getPrice_Type = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllPrice_Type(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchPrice_Type(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllPrice_Type = (pageno,pagesize) => {
return api.get(`/price_type/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchPrice_Type = (key,pageno,pagesize) => {
return api.get(`/price_type/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOnePrice_Type = (id) => {
return api.get(`/price_type/read_one.php?id=${id}`)
}
const deletePrice_Type = (price_type_id) => {
return api.post(`/price_type/delete.php?`,{price_type_id:price_type_id})
}
const addPrice_Type = (data) => {
return api.post(`/price_type/create.php?`,data)
}
const updatePrice_Type = (data) => {
return api.post(`/price_type/update.php?`,data)
}
export {getPrice_Type,getAllPrice_Type,searchPrice_Type,getOnePrice_Type,deletePrice_Type,addPrice_Type,updatePrice_Type}


