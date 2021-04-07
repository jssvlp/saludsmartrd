import Cards from "../../components/cards/cards"
import Content from "../../content"
import Helpers from "../../helpers/helpers";
import content from "../../content";

function Noticias() {

    return (
        <div className="App">

            <div className="row">
                {/* load msg */}
                { Helpers.isExist('noticias')}

                {content.map((data,i)=>
                    data.category === 'noticias'&&(
                        <Cards
                            Title ={data.name}
                            img={data.img_card}
                            similar={true}
                            description ={data.subtitle}
                            id={data.id} />
                    )
                )}

            </div>

        </div>




    );
}

export default Noticias;
