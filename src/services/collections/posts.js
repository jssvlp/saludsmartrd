import api from '../api/create';




function getAllPost() {
    return api.get("/posts");
}

function getPostById(id) {
    return api.get("/posts/"+id)
    
}


export {
    getAllPost,
    getPostById
}