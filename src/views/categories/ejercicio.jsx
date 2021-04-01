import Cards from "../../components/cards/cards"
import content from "../../content";

function Ejercicio() {
    return (
        <div className="App">

            <div className="row">
                {content.length === 0&&(
                    <div className={'col-md-12 text-center'}>
                        <h3>No hay contenido publicado</h3>
                    </div>
                )}
                {content.map((data,i)=>
                    data.category === 'ejercicio'&&(
                        <Cards
                            Title ={data.name}
                            img={data.img_card}
                            description ={data.subtitle} />
                    )
                )}


            </div>

        </div>





    );
}

export default Ejercicio;
