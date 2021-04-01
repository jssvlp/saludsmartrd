import Headertext from "../../components/headertext/headertext";
import Helpers from "../../helpers/helpers"
import NoContent from "../../img/nocontent.svg"
import './detail.css'

import { useParams } from 'react-router-dom';
function Detail(){
    let { id } = useParams();
    let content = Helpers.getContent(id);
    console.log(content)

    if (!content){
        return (
            <div className={'text-center'}>
                <h2>Lo sentimos, pero parece que esta informacion ya no esta disponbile</h2><br/>
                <img src={NoContent} alt={'notContent'} className={'img-fluid'} width={400}/>
                <h4>Por favor cuentanos como podemos ayudarte <a href={'/Contacto'}>aqui</a></h4>
            </div>
        )
    }
    return(
        <div>
        <Headertext title={content.name}/><br/><br/>
        <div className={'row'}>
            <div className={'col-md-12 '}>
                    <img src={content.img_content} alt={content.name} className={'img-fluid mx-auto d-block'}/>
            </div>
        </div>
        <textarea className={'textwrapper'} rows={50} >
            {content.text_content}
        </textarea>
            <br/><br/><br/>
            <Headertext title={'contenido similares'}/><br/><br/>
            <div className={'row'}>
                {Helpers.getContentSimilar(content.id,content.category)}

            </div>
        </div>
    )
}

export default Detail
