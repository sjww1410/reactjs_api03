import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getCredit_Card_Type = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCredit_Card_Type(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchCredit_Card_Type(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllCredit_Card_Type = (pageno,pagesize) => {
return api.get(`/credit_card_type/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchCredit_Card_Type = (key,pageno,pagesize) => {
return api.get(`/credit_card_type/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneCredit_Card_Type = (id) => {
return api.get(`/credit_card_type/read_one.php?id=${id}`)
}
const deleteCredit_Card_Type = (credit_card_type_id) => {
return api.post(`/credit_card_type/delete.php?`,{credit_card_type_id:credit_card_type_id})
}
const addCredit_Card_Type = (data) => {
return api.post(`/credit_card_type/create.php?`,data)
}
const updateCredit_Card_Type = (data) => {
return api.post(`/credit_card_type/update.php?`,data)
}
export {getCredit_Card_Type,getAllCredit_Card_Type,searchCredit_Card_Type,getOneCredit_Card_Type,deleteCredit_Card_Type,addCredit_Card_Type,updateCredit_Card_Type}


