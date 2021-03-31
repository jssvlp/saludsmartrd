
import Category from "../../components/category/category"
import categories from "../../categories"
function Home() {
    return (
        <div className="container">
           <div className={'row'}>
               {categories.map((data,i)=>
                   <div className={"col-md-4"}>
                       <Category
                           name={data.name}
                           img={data.url}
                       />
                   </div>
               )}


           </div>
        </div>
    );
}

export default Home;
