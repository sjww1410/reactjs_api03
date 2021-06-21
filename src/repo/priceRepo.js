import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getPrice = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllPrice(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchPrice(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllPrice = (pageno,pagesize) => {
return api.get(`/price/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchPrice = (key,pageno,pagesize) => {
return api.get(`/price/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOnePrice = (id) => {
return api.get(`/price/read_one.php?id=${id}`)
}
const deletePrice = (price_id) => {
return api.post(`/price/delete.php?`,{price_id:price_id})
}
const addPrice = (data) => {
return api.post(`/price/create.php?`,data)
}
const updatePrice = (data) => {
return api.post(`/price/update.php?`,data)
}
export {getPrice,getAllPrice,searchPrice,getOnePrice,deletePrice,addPrice,updatePrice}


