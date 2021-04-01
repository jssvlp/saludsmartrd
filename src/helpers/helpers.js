import content from "../content";

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



export default {
    isExist
}
