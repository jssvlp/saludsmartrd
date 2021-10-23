import content from "../content";
import { api } from "../config";


function isExist(data){
    for (const key in content) {
        if(content[key].category === data){
            return  ''

        }
    }
    return <div className={'col-md-12 text-center'}>
                <h3>No hay contenido publicado</h3>
           </div>
}


function getContent(id){
    for (const key in content) {
        if(content[key].id === parseInt(id)) return content[key]
    }
    return false

}

function setHostImage(text) {
    return text.replace("](/","]("+api+"/");
}

function getContentSimilar(categories = [], id){
    console.log(`categories`, categories)
    let result = typeof categories === 'object' && categories.filter((data) =>{
        return data.id !== id
    })

     let arrayFull = result.length>0? result.slice(0, 3) : result;
    return arrayFull;
}



export default {
    isExist,
    getContent,
    getContentSimilar,
    setHostImage
}
