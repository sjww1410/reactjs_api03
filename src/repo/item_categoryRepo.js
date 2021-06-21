import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getItem_Category = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllItem_Category(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchItem_Category(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllItem_Category = (pageno,pagesize) => {
return api.get(`/item_category/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchItem_Category = (key,pageno,pagesize) => {
return api.get(`/item_category/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneItem_Category = (id) => {
return api.get(`/item_category/read_one.php?id=${id}`)
}
const deleteItem_Category = (item_category_id) => {
return api.post(`/item_category/delete.php?`,{item_category_id:item_category_id})
}
const addItem_Category = (data) => {
return api.post(`/item_category/create.php?`,data)
}
const updateItem_Category = (data) => {
return api.post(`/item_category/update.php?`,data)
}
export {getItem_Category,getAllItem_Category,searchItem_Category,getOneItem_Category,deleteItem_Category,addItem_Category,updateItem_Category}


