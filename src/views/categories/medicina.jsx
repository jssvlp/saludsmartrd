import Cards from "../../components/cards/cards"
import Helpers from "../../helpers/helpers"
import content from "../../content";
function Medicina() {


    return (
        <div className="App">

            <div className="row">
                {/* load msg */}
                { Helpers.isExist('medicina')}

                {content.map((data,i)=>
                    data.category === 'medicina'&&(
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

export default Medicina;
