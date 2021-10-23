import Cards from "../../components/cards/cards"
import content from "../../content";
import Helpers from "../../helpers/helpers"
import { useParams, } from 'react-router-dom';
import React,{ useEffect, useState } from "react";
import {Categories} from "../../services/collections/index"


function CategoriesView({props}) {
    let { id, idCategory } = useParams();
    const [category,setCategory] = useState([])


    useEffect(async ()=>{
        const result = await Categories.getArticleByCategory(props.location.state.id);
        setCategory(result.data)
        console.log(`result`, result)
    },[])
    return (
        <div className="App">

            <div className="row">
                {/* load msg */}
                {category.length ===0 &&(
                    <div className={'col-md-12 text-center'}>
                        <h3>No hay contenido publicado</h3>
                    </div>
                )}
                {category.length>0&&category.map((data,i)=>
                        <Cards
                            Title ={data.titulo}
                            img={data.imagenes[0].formats.thumbnail.url}
                            description ={data.texto}
                            slug={data.slug}
                            id={data.id} />
                    
                )}

            </div>

        </div>

    );
}

export default CategoriesView;
