import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getItem = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllItem(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchItem(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllItem = (pageno,pagesize) => {
return api.get(`/item/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchItem = (key,pageno,pagesize) => {
return api.get(`/item/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneItem = (id) => {
return api.get(`/item/read_one.php?id=${id}`)
}
const deleteItem = (item_id) => {
return api.post(`/item/delete.php?`,{item_id:item_id})
}
const addItem = (data) => {
return api.post(`/item/create.php?`,data)
}
const updateItem = (data) => {
return api.post(`/item/update.php?`,data)
}
export {getItem,getAllItem,searchItem,getOneItem,deleteItem,addItem,updateItem}


