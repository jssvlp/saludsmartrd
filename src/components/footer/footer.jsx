import style from "./style.js"
import FooterComponent from "../foooterComponent/footerComponent"
import Categories from "../../categories";
import {Link} from "react-router-dom"

function footer() {
    return (

      <footer style = {style.footer}>
      <div className="container">
          <div className="row">
             <div className="col-md-3" style = {style.derecha}>
                 <p style={{ backgroundColor:'white',color:'green', borderRadius:10}}><b>CATEGORIAS</b></p>
                 <br/>
                 {
                     Categories.map((data,i)=>
                         <p><Link to={{pathname: data.path}} style={{textDecoration:'none', color:'white'}}><b>{data.name}</b></Link></p>
                     )
                 }


              </div>

             <div className="col-md-3" style = {style.Centro}>
                 <p style={{ backgroundColor:'white',color:'green', borderRadius:10}}><b>BLOG</b></p><br/>
                 <p><Link to={{pathname: '/noticias'}} style={{textDecoration:'none', color:'white'}} ><b>NOTICIAS DE SALUDSMARTDRD</b></Link></p>
               <br/>
                 <p><Link to={{pathname: 'https://blogs.iadb.org/salud/es/'}} style={{textDecoration:'none', color:'white'}} ><b>GENTE SALUDABLE</b></Link></p>
                 <br/>

                 <p><Link to={{pathname: 'https://www.efesalud.com/blog-salud-prevencion/'}} style={{textDecoration:'none', color:'white'}} ><b>SALUD Y PREVENCION</b></Link></p>
                 <br/>

                 <p><Link to={{pathname: 'https://blogs.hoy.es/salud-para-todos/'}} style={{textDecoration:'none', color:'white'}} ><b>HOY PERIODICO DIGITAL</b></Link></p>
                 <br/>




             </div>

             <div className="col-md-3" style = {style.Centro}>
                 <p style={{ backgroundColor:'white',color:'green', borderRadius:10}}><b>REDES SOCIALES</b></p>
               <br/>

             {/* FACEBOOK */}
             <a href={'https://www.facebook.com/salud.smartrd/'} style={{textDecoration: 'none', color:'white',fontWeight:'bold'}}>
                 <i className="fa fa-facebook" style={{fontSize:20}}></i> FACEBOOK

             </a><br/><br/>
                 <a href={'https://www.instagram.com/saludsmartrd/'} style={{textDecoration: 'none', color:'white',fontWeight:'bold'}}>
                     <i className="fa fa-instagram" style={{fontSize:20}}></i> INSTAGRAM

                 </a><br/><br/>
                 <a href={'https://twitter.com/SaludSmart'} style={{textDecoration: 'none', color:'white',fontWeight:'bold'}}>
                     <i className="fa fa-twitter" style={{fontSize:20}}></i> TWITTER

                 </a><br/><br/>
                 <a href={'https://www.youtube.com/channel/UCNEp4I2Ts49H-S7O3TzcEkQ'} style={{textDecoration: 'none', color:'white',fontWeight:'bold'}}>
                     <i className="fa fa-youtube" style={{fontSize:20}}></i> YOUTUBE

                 </a>



             </div>

             <div className="col-md-3" style = {style.izquierda}>
                 <p style={{ backgroundColor:'white',color:'green', borderRadius:10}}><b>REFERENCIAS</b></p><br/>
                 <ul>

                     <li>
                         <a style={{color: 'white', textDecoration:'none', fontWeight: 'bold'}} href={'https://www.msp.gob.do/'}>
                            Ministerio De Salud Publica RD
                         </a>
                     </li><br/>
                     <li>
                         <a style={{color: 'white', textDecoration:'none', fontWeight: 'bold'}} href={'https://medlineplus.gov/spanish/'}>
                             Medline Plus
                         </a>
                     </li><br/>
                     <li>
                         <a style={{color: 'white', textDecoration:'none', fontWeight: 'bold'}} href={'https://www.webconsultas.com'}>
                             Web Consultas
                         </a>
                     </li><br/>
                     <li>
                         <a style={{color: 'white', textDecoration:'none', fontWeight: 'bold'}} href={'https://www.webmd.com/news/spanish/'}>
                             Web
                         </a>
                     </li><br/>
                     <li>
                         <a style={{color: 'white', textDecoration:'none', fontWeight: 'bold'}} href={'https://www.who.int/es/'}>
                             Organizacion Mundial De La Salud
                         </a>
                     </li>

                 </ul>
               <br/>

             </div>
       </div>



    </div>
          <div className="row">
              <div className ="col-md-12" style = { style.copy}>
                  saludsmartrd © {new Date().getFullYear()}
              </div>
          </div>



    </footer>




    );
}

export default footer;
