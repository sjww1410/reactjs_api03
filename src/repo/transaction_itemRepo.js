import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getTransaction_Item = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTransaction_Item(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchTransaction_Item(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllTransaction_Item = (pageno,pagesize) => {
return api.get(`/transaction_item/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchTransaction_Item = (key,pageno,pagesize) => {
return api.get(`/transaction_item/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneTransaction_Item = (id) => {
return api.get(`/transaction_item/read_one.php?id=${id}`)
}
const deleteTransaction_Item = (transaction_item_id) => {
return api.post(`/transaction_item/delete.php?`,{transaction_item_id:transaction_item_id})
}
const addTransaction_Item = (data) => {
return api.post(`/transaction_item/create.php?`,data)
}
const updateTransaction_Item = (data) => {
return api.post(`/transaction_item/update.php?`,data)
}
export {getTransaction_Item,getAllTransaction_Item,searchTransaction_Item,getOneTransaction_Item,deleteTransaction_Item,addTransaction_Item,updateTransaction_Item}


