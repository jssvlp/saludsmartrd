import "./category.css"
import {
    Link
} from "react-router-dom";

function Category({name,img,path}) {
    return (
        <div style={{padding: '2%'}}>
            <Link to={{pathname: path}}  style={{textDecoration: 'none'}}>
                <div className="card-category text-center zoom" alt={name} style={{background: 'linear-gradient(rgb(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),\n' +
                        '    url("'+img+'")',backgroundSize:'400px'}} >
                    <h4 className={'text-center'}><b>{name}</b></h4>
                </div>
            </Link>
        </div>

    );
}

export default Category;
