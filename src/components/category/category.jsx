import "./category.css"
import {
    Link
} from "react-router-dom";
import { api } from "../../config";


function Category({name,img,path,id}) {
    return (
        <div style={{padding: '2%'}}>
            <Link to={{pathname: path, state: {id: id}}}  style={{textDecoration: 'none'}}>
                <div className="card-category text-center zoom" alt={name} style={{background: 'linear-gradient(rgb(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),\n' +
                        '    url("'+api+img+'")',backgroundSize:'400px'}} >
                    <h4 className={'text-center'}><b>{name}</b></h4>
                </div>
            </Link>
        </div>

    );
}

export default Category;
