import Headertext from "../../components/headertext/headertext";
import SvgMedicin1 from "../../img/medicna1.svg"
import style from "../contacto/style"
function Contacto(){
    return(
        <div>
          <Headertext title={'Brindanos tu opinion'}/>
          <div className={'row'}>
               <div className={'col-md-6'} >
                   <img src={SvgMedicin1} alt="React Logo" className={'img-fluid mx-auto d-block'} width={'650'}/>
               </div>
               <div className={'col-md-6'} style = {style.FORM}>
                 <label for="exampleInputEmail1" class="form-label">CORREO ELECTRONICO</label>
                <input type="email" class="form-control"  id="InputEmail1" aria-describedby="emailHelp"/>

                <label for="exampleInputEmail1" class="form-label">NOMBRE COMPLETO</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                <label for="exampleInputEmail1" class="form-label">TU OPINION?</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                   
                </select>
                <br/>

                <div class="d-grid gap-2" >
                            <button style = {style.btn} class="btn" type="button">Enviar</button>
                        </div>
  
               </div>
               
           </div>



        </div>
       
        


    )
}

export default Contacto