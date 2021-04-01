import Cards from "../../components/cards/cards"
import content from "../../content";
import Helpers from "../../helpers/helpers"





function Consejos() {


    console.log(content, Helpers.isExist())
    return (
        <div className="App">

            <div className="row">
                {/* load msg */}
                { Helpers.isExist('consejos')}

                {content.map((data,i)=>
                    data.category === 'consejos'&&(
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

export default Consejos;
