import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getItem_Subcategory = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllItem_Subcategory(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchItem_Subcategory(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllItem_Subcategory = (pageno,pagesize) => {
return api.get(`/item_subcategory/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchItem_Subcategory = (key,pageno,pagesize) => {
return api.get(`/item_subcategory/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneItem_Subcategory = (id) => {
return api.get(`/item_subcategory/read_one.php?id=${id}`)
}
const deleteItem_Subcategory = (item_subcategory_id) => {
return api.post(`/item_subcategory/delete.php?`,{item_subcategory_id:item_subcategory_id})
}
const addItem_Subcategory = (data) => {
return api.post(`/item_subcategory/create.php?`,data)
}
const updateItem_Subcategory = (data) => {
return api.post(`/item_subcategory/update.php?`,data)
}
export {getItem_Subcategory,getAllItem_Subcategory,searchItem_Subcategory,getOneItem_Subcategory,deleteItem_Subcategory,addItem_Subcategory,updateItem_Subcategory}


