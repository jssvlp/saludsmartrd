
import Category from "../../components/category/category"
import categories from "../../categories"
import Headertext from "../../components/headertext/headertext";
import SvgMedicin1 from "../../img/medicna1.svg"
import SvgMedicina2 from "../../img/medicina2.svg"
import SvgMedicina3 from "../../img/MEDICINA3.svg"

function Home() {
    return (
       <div>
           <div className="container">
               <br/><br/><br/>
               <div className={'row'}>
                   {categories.map((data,i)=>
                       <div className={"col-md-4"}>
                           <Category
                               path={data.path}
                               name={data.name}
                               img={data.url}
                           />
                       </div>
                   )}
               </div>

           </div><br/><br/><br/><br/><br/><br/><br/><br/>
           <Headertext title={'CAMBIA TUS HABITOS'}/>
           <br/><br/><br/><br/>
           <div className={'row'}>
               <div className={'col-md-6'}>
                   <img src={SvgMedicin1} alt="React Logo" className={'img-fluid mx-auto d-block'} width={'650'}/>
               </div>
               <div className={'col-md-6'}>

                   <p align={'justify'}>
                       ¿Está considerando ser más activo? ¿Ha estado tratando de reducir el consumo de alimentos menos saludables? ¿Está empezando a comer mejor y a moverse más pero se le dificulta ceñirse a estos cambios?

                       Los viejos hábitos son difíciles de eliminar. Cambiar los hábitos es un proceso que involucra varias etapas. Algunas veces, convertir los cambios en hábitos nuevos lleva tiempo, y podría enfrentar obstáculos en el camino.

                       Adoptar hábitos nuevos y más saludables puede protegerlo de problemas de salud graves como obesidad y diabetes. Los hábitos nuevos, como una alimentación saludable y actividad física regular, también pueden ayudarle a controlar su peso y a tener más energía. Después de un tiempo, si se ciñe a estos cambios, pueden convertirse en parte de su rutina diaria.                   </p>
                   <br/><br/>
                   <p align={'justify'}>
                       Piense cómo los beneficios de una alimentación saludable o de una actividad física regular podrían relacionarse con su estado general de salud. Por ejemplo, suponga que tiene un poco alta la glucosa, o azúcar, en la sangre, y uno de sus padres o hermanos tiene diabetes tipo 2. Esto significa que usted también podría desarrollar diabetes tipo 2. Quizás descubra que es más fácil mantenerse físicamente activo y comer saludable sabiendo que esto puede ayudarle a controlar la glucosa en la sangre y protegerlo de una enfermedad grave.
                   </p>
               </div>
           </div>
           <br/><br/><br/><br/><br/><br/><br/><br/>
           <Headertext title={'CUIDA TU SALUD MENTAL'}/>
           <br/><br/><br/><br/>
           <div className="row">
               <div className={'col-md-6'}>

                   <p align={'justify'}>
                       La salud mental es la parte de la salud general a la que a veces no prestamos la atención necesaria. Solemos atender más a la salud física y como consecuencia pueden aparecer algunos problemas.
                       Si mantenemos unos hábitos saludables de vida porque mejoran nuestro estado físico, debemos saber que también mejoran el mental. Por tanto, estos hábitos son positivos para nuestra salud general, física, mental y social. De esta manera, podemos evitar que aparezcan problemas como la ansiedad. Que cuando no es adaptativa puede interferir en nuestra vida diaria, en nuestro funcionamiento cotidiano.
                   </p>
                   <br/><br/>
                   <p align={'justify'}>

                       Disfrutar de un baño de espuma, de un paseo por la playa o de la música que te gusta, siempre según tus gustos, pueden conseguir que reduzcas tu nivel de estrés. Además, puedes preguntar sobre alguna técnica de relajación que te ayudará en momentos concretos estresantes y pueden ayudarte a mantenerte relajado de forma más continua.                   </p>
               </div>
               <div className={'col-md-6'}>
                   <img src={SvgMedicina3} alt="React Logo" className={'img-fluid mx-auto d-block'} width={'400'}/>
               </div>
           </div>
           <br/><br/><br/><br/><br/><br/><br/><br/>
           <Headertext title={'MEJORA TU SISTEMA INMUNOLÒGICO'}/>
           <br/><br/><br/><br/>
           <div className={'row'}>
               <div className={'col-md-6'}>
                   <img src={SvgMedicina2} alt="React Logo" className={'img-fluid mx-auto d-block'} width={'650'}/>
               </div>
               <div className={'col-md-6'}>

                   <p align={'justify'}>
                       Hacer ejercicio es una manera poderosa de estimular el sistema inmunológico, afirma el Dr. Mark Moyad, M.P.H., director Jenkins/Pokempner de medicina preventiva y alternativa del Centro Médico de University of Michigan. El ejercicio hace que los anticuerpos y los glóbulos blancos del cuerpo circulen con mayor rapidez, lo que significa que pueden detectar y concentrarse en los virus más rápidamente. Mantenerte activo de esta manera también disminuye las hormonas del estrés, lo que reduce las posibilidades de enfermarte, agrega Moyad.
                                      </p>
                   <br/><br/>
                   <p align={'justify'}>
                       La clave del ejercicio, sin embargo, es hacerlo con moderación. "Como muchas otras cosas, existe un punto ideal: hacer demasiado puede también poner tanto estrés en el cuerpo, que debilita tu sistema inmunológico", explica Moyad, quien recomienda de 30 a 60 minutos de ejercicio (ya sea vigoroso o moderado) casi todos los días.
                   </p>
               </div>
           </div>
           <br/><br/><br/><br/><br/><br/><br/><br/>
       </div>
    );
};

export default Home;
