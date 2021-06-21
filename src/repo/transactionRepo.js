import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getTransaction = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTransaction(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchTransaction(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllTransaction = (pageno,pagesize) => {
return api.get(`/transaction/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchTransaction = (key,pageno,pagesize) => {
return api.get(`/transaction/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneTransaction = (id) => {
return api.get(`/transaction/read_one.php?id=${id}`)
}
const deleteTransaction = (transaction_id) => {
return api.post(`/transaction/delete.php?`,{transaction_id:transaction_id})
}
const addTransaction = (data) => {
return api.post(`/transaction/create.php?`,data)
}
const updateTransaction = (data) => {
return api.post(`/transaction/update.php?`,data)
}
export {getTransaction,getAllTransaction,searchTransaction,getOneTransaction,deleteTransaction,addTransaction,updateTransaction}


