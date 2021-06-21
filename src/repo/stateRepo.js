import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getState = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllState(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchState(search,pageNo+1,pageSize);
        } catch(err) {
            return {
                records:[],
                totalCount:0
            }
        }
    }
    return res.data.document;
}


const getAllState = (pageno,pagesize) => {
return api.get(`/state/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
const searchState = (key,pageno,pagesize) => {
return api.get(`/state/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
const getOneState = (id) => {
return api.get(`/state/read_one.php?id=${id}`)
}
const deleteState = (state_id) => {
return api.post(`/state/delete.php?`,{state_id:state_id})
}
const addState = (data) => {
return api.post(`/state/create.php?`,data)
}
const updateState = (data) => {
return api.post(`/state/update.php?`,data)
}
export {getState,getAllState,searchState,getOneState,deleteState,addState,updateState}


