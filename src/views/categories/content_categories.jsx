import Cards from "../../components/cards/cards"
import content from "../../content";
import Helpers from "../../helpers/helpers"
import { useParams } from 'react-router-dom';




function Categories() {
    let { id } = useParams();


    console.log(content,  id);
    return (
        <div className="App">

            <div className="row">
                {/* load msg */}
                { Helpers.isExist(id)}

                {content.map((data,i)=>
                    data.category === id&&(
                        <Cards
                            Title ={data.name}
                            img={data.img_card}
                            description ={data.subtitle}
                            id={data.id} />
                    )
                )}

            </div>

        </div>

    );
}

export default Categories;
