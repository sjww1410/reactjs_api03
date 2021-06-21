import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getTransaction_Type = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTransaction_Type(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchTransaction_Type(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllTransaction_Type = (pageno,pagesize) => {
return api.get(`/transaction_type/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchTransaction_Type = (key,pageno,pagesize) => {
return api.get(`/transaction_type/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneTransaction_Type = (id) => {
return api.get(`/transaction_type/read_one.php?id=${id}`)
}
const deleteTransaction_Type = (transaction_type_id) => {
return api.post(`/transaction_type/delete.php?`,{transaction_type_id:transaction_type_id})
}
const addTransaction_Type = (data) => {
return api.post(`/transaction_type/create.php?`,data)
}
const updateTransaction_Type = (data) => {
return api.post(`/transaction_type/update.php?`,data)
}
export {getTransaction_Type,getAllTransaction_Type,searchTransaction_Type,getOneTransaction_Type,deleteTransaction_Type,addTransaction_Type,updateTransaction_Type}


