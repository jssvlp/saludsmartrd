import api from '../api/create';




function getArticleByCategory(id) {
    return api.get("/posts/categoria/"+id);
}

function getAllCategories() {
    return api.get("/categorias/");
}



export {
    getArticleByCategory,
    getAllCategories
}