import Headertext from "../../components/headertext/headertext";
import Helpers from "../../helpers/helpers"
import NoContent from "../../img/nocontent.svg"
import './detail.css'
import {Posts, Categories} from "../../services/collections/index";
import { useParams } from 'react-router-dom';
import React,{ useEffect, useState } from "react";
import Cards from "../../components/cards/cards";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Load from "../../components/loanding/load";

function Detail(){
    let { id } = useParams();
    const [postElement,setPostElement] = useState({});
    const [postElementSimilar,setPostElementSimilar] = useState({});
    let content = Helpers.getContent(id);
    // document.title = content.name;
    // document.getElementsByTagName('meta')["og:title"].content = content.name;
    // document.getElementsByTagName('meta')["og:image"].content = content.img_card;
    // document.getElementsByTagName('meta')["og:description"].content = content.subtitle;
    // document.getElementsByTagName('meta')["og:url"].content = "https://saludsmartrd.com/";

    useEffect( async ()=>{
        const result = await Posts.getPostById(id);
        const allCategories = await Categories.getArticleByCategory(result.data.categoria.id)
        const filterCategory = Helpers.getContentSimilar(allCategories.data,result.data.id)
        result.data.texto = Helpers.setHostImage(result.data.texto);
        console.log(`result`, result.data,filterCategory)
        setPostElement(result.data);
        setPostElementSimilar(filterCategory);
    },[]);

    console.log(content)

    if (!postElement.texto){
        return (
            <Load/>
        )
    }
    function textAreaAdjust(element) {
        element.height = "1px";
        element.height = (25+element.scrollHeight)+"px";
    }

   
    async function getAllPost() {
        const result = await  Posts.getAllPost();
        return result;
    }
    return(
        <div>

        <Headertext title={postElement.titulo?postElement.titulo:""}/><br/><br/>

        <div className={'divtext'} >
            <ReactMarkdown children={postElement.texto} remarkPlugins={[remarkGfm]} />
        </div>
        <div>
            <label id="autor">- {postElement&&postElement.autor}</label><br/>
            <label style={{fontSize:13, paddingLeft: 11}}>{postElement&&' Publicado: '+postElement.createdAt.split('T')[0] +' '+postElement.createdAt.split('T')[1].substring(0,5)}</label>

        </div>
            <br/><br/><br/>
            <Headertext title={'contenido similares'}/><br/><br/>
            <div className={'row'}>
            {postElementSimilar.length>0&&postElementSimilar.map((data,i)=>
                        <Cards
                            Title ={data.titulo}
                            img={data.imagenes[0].formats.thumbnail.url}
                            description ={data.texto}
                            slug={data.slug}
                            id={data.id} />
                    
                )}

            </div>
        </div>
    )
}

export default Detail
