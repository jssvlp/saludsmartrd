import Helpers from "../../helpers/helpers"
import { useParams } from 'react-router-dom';
import Card from "../../img/gift.png"
import "./sorteo.css"
import {React, useState}  from "react"
function CardSorteo(){

    let { id } = useParams();
    let content = Helpers.getContent(id);
    function click(e){
        e.currentTarget.className += " vibrate";
        console.log(e.target)
    }

    return(
        <div style={{padding: '1%',}}>
            <div  className={'zoom'} onClick={ (e)=>click(e)}>

                <img src={Card} width={200}/>
            </div>

        </div>
    )
}

export default CardSorteo
