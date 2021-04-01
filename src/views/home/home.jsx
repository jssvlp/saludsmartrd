
import Category from "../../components/category/category"
import categories from "../../categories"
import Headertext from "../../components/headertext/headertext";
import SvgMedicin1 from "../../img/medicna1.svg"
import SvgMedicina2 from "../../img/medicina2.svg"
function Home() {
    return (
       <div>
           <div className="container">
               <br/><br/><br/>
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

           </div><br/><br/><br/><br/><br/><br/><br/><br/>
           <Headertext title={'QUIENES SOMOS ?'}/>
           <br/><br/><br/><br/>
           <div className={'row'}>
               <div className={'col-md-6'}>
                   <img src={SvgMedicin1} alt="React Logo" className={'img-fluid mx-auto d-block'} width={'650'}/>
               </div>
               <div className={'col-md-6'}>

                   <p align={'justify'}>
                       orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sollicitudin nibh, vel venenatis ipsum gravida eget. Suspendisse potenti. Donec dictum ligula sit amet quam dapibus, eget eleifend nisi finibus. Aliquam faucibus velit non diam ultricies, vitae cursus libero commodo. Proin vel risus et quam fringilla ultrices vitae id nisl. Cras efficitur lorem dolor, id blandit dui venenatis et. Vestibulum urna justo, ultrices vel consectetur vitae, venenatis in ligula. Cras laoreet bibendum dictum. Curabitur volutpat nec quam ut gravida. Integer eget porttitor ligula. Nulla sed tortor libero. Suspendisse ullamcorper congue turpis. Morbi a volutpat orci, et molestie dui. In non commodo felis. In hac habitasse platea dictumst.
                   </p>
                   <br/><br/>
                   <p align={'justify'}>
                       Ut in lorem bibendum, blandit nibh et, molestie nisl. Donec a nibh aliquet, finibus dolor vel, ornare nibh. Aenean arcu felis, gravida vitae enim at, semper mattis purus. Maecenas feugiat dignissim diam id egestas. Vivamus eget euismod nisi. In venenatis elit ac eros porttitor, eget bibendum mi ullamcorper. Sed ultricies risus sed odio bibendum faucibus. Maecenas luctus semper sagittis. Integer eget justo pharetra, vulputate nunc molestie, placerat enim. Maecenas velit sapien, dictum a mauris at, molestie finibus velit.
                   </p>
               </div>
           </div>
           <br/><br/><br/><br/><br/><br/><br/><br/>
           <Headertext title={'CONTACTANOS'}/>
           <br/><br/><br/><br/>
           <div className="row">
               <div className={'col-md-6'}>

                   <p align={'justify'}>
                       orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate sollicitudin nibh, vel venenatis ipsum gravida eget. Suspendisse potenti. Donec dictum ligula sit amet quam dapibus, eget eleifend nisi finibus. Aliquam faucibus velit non diam ultricies, vitae cursus libero commodo. Proin vel risus et quam fringilla ultrices vitae id nisl. Cras efficitur lorem dolor, id blandit dui venenatis et. Vestibulum urna justo, ultrices vel consectetur vitae, venenatis in ligula. Cras laoreet bibendum dictum. Curabitur volutpat nec quam ut gravida. Integer eget porttitor ligula. Nulla sed tortor libero. Suspendisse ullamcorper congue turpis. Morbi a volutpat orci, et molestie dui. In non commodo felis. In hac habitasse platea dictumst.
                   </p>
                   <br/><br/>
                   <p align={'justify'}>
                       Ut in lorem bibendum, blandit nibh et, molestie nisl. Donec a nibh aliquet, finibus dolor vel, ornare nibh. Aenean arcu felis, gravida vitae enim at, semper mattis purus. Maecenas feugiat dignissim diam id egestas. Vivamus eget euismod nisi. In venenatis elit ac eros porttitor, eget bibendum mi ullamcorper. Sed ultricies risus sed odio bibendum faucibus. Maecenas luctus semper sagittis. Integer eget justo pharetra, vulputate nunc molestie, placerat enim. Maecenas velit sapien, dictum a mauris at, molestie finibus velit.
                   </p>
               </div>
               <div className={'col-md-6'}>
                   <img src={SvgMedicina2} alt="React Logo" className={'img-fluid mx-auto d-block'} width={'650'}/>
               </div>
           </div>
       </div>
    );
};

export default Home;
