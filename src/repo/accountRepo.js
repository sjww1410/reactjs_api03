import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getAccount = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllAccount(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchAccount(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllAccount = (pageno,pagesize) => {
return api.get(`/account/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchAccount = (key,pageno,pagesize) => {
return api.get(`/account/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneAccount = (id) => {
return api.get(`/account/read_one.php?id=${id}`)
}
const deleteAccount = (account_id) => {
return api.post(`/account/delete.php?`,{account_id:account_id})
}
const addAccount = (data) => {
return api.post(`/account/create.php?`,data)
}
const updateAccount = (data) => {
return api.post(`/account/update.php?`,data)
}
export {getAccount,getAllAccount,searchAccount,getOneAccount,deleteAccount,addAccount,updateAccount}


