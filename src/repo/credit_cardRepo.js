import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getCredit_Card = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCredit_Card(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchCredit_Card(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllCredit_Card = (pageno,pagesize) => {
return api.get(`/credit_card/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchCredit_Card = (key,pageno,pagesize) => {
return api.get(`/credit_card/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneCredit_Card = (id) => {
return api.get(`/credit_card/read_one.php?id=${id}`)
}
const deleteCredit_Card = (credit_card_id) => {
return api.post(`/credit_card/delete.php?`,{credit_card_id:credit_card_id})
}
const addCredit_Card = (data) => {
return api.post(`/credit_card/create.php?`,data)
}
const updateCredit_Card = (data) => {
return api.post(`/credit_card/update.php?`,data)
}
export {getCredit_Card,getAllCredit_Card,searchCredit_Card,getOneCredit_Card,deleteCredit_Card,addCredit_Card,updateCredit_Card}


