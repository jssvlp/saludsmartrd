import content from "../content";
import Card from "../components/cards/cards"
import Cards from "../components/cards/cards";
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

function getContentSimilar(id,category){
    let result = content.filter((data) =>{
        return data.category === category && data.id !== parseInt(id)
    })

     let arrayFull = result.length>0? result.slice(0, 3) : result;
    if(arrayFull.length>0){
        return (
            arrayFull.map((data,i)=>
                    <Cards
                        Title ={data.name}
                        img={data.img_card}
                        description ={data.subtitle}
                        id={data.id} />
            )
        )
    }
    if(arrayFull.length===0){
        return (
            <div className={'text-center'}>
                <h4>No hay contenido similares</h4>
            </div>
        )
    }
    console.log(result)
}



export default {
    isExist,
    getContent,
    getContentSimilar
}
