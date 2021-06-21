import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getPostal_Code = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllPostal_Code(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchPostal_Code(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllPostal_Code = (pageno,pagesize) => {
return api.get(`/postal_code/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchPostal_Code = (key,pageno,pagesize) => {
return api.get(`/postal_code/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOnePostal_Code = (id) => {
return api.get(`/postal_code/read_one.php?id=${id}`)
}
const deletePostal_Code = (postal_code_id) => {
return api.post(`/postal_code/delete.php?`,{postal_code_id:postal_code_id})
}
const addPostal_Code = (data) => {
return api.post(`/postal_code/create.php?`,data)
}
const updatePostal_Code = (data) => {
return api.post(`/postal_code/update.php?`,data)
}
export {getPostal_Code,getAllPostal_Code,searchPostal_Code,getOnePostal_Code,deletePostal_Code,addPostal_Code,updatePostal_Code}


