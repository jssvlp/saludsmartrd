import Headertext from "../../components/headertext/headertext";
import Helpers from "../../helpers/helpers"
import NoContent from "../../img/nocontent.svg"
import { useParams } from 'react-router-dom';
import CardSorteo from "../../components/cardSorteo/cardSorteo"
function Sorteo(){
    let { id } = useParams();
    let content = Helpers.getContent(id);

    console.log(content)

    // if (!content){
    //     return (
    //         <div className={'text-center'}>
    //             <h2>Lo sentimos, pero parece que esta informacion ya no esta disponbile</h2><br/>
    //             <img src={NoContent} alt={'notContent'} className={'img-fluid'} width={400}/>
    //             <h4>Por favor cuentanos como podemos ayudarte <a href={'/Contacto'}>aqui</a></h4>
    //         </div>
    //     )
    // }
    function textAreaAdjust(element) {
        element.height = "1px";
        element.height = (25+element.scrollHeight)+"px";
    }
    return(
        <div>
            <h3 style={{justifyContent:'center'}}>SELECIONA UN REGALO Y GANA:</h3>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

                <CardSorteo/>
                <CardSorteo/>
                <CardSorteo/>
                <CardSorteo/>

            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

                <CardSorteo/>
                <CardSorteo/>
                <CardSorteo/>
                <CardSorteo/>

            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

                <CardSorteo/>
                <CardSorteo/>
                <CardSorteo/>
                <CardSorteo/>

            </div>
        </div>
    )
}

export default Sorteo
