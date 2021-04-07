
import styles from "../cards/style"

import {
    Link
} from "react-router-dom";

function cards({Title,img,description,id ,similar = false }) {



    return (

          <div className="col-md-4" style={{padding: '1%'}}>
                <div className="card zoom">
                    <div className="card-body"  style = {styles.card}>

                        <div style={{paddingBottom: '2%', height: 65}}>
                            <h6 className="card-title"  style = {styles.title}>{Title.toUpperCase()}</h6><br/>
                        </div>
                        <img width="100%" height={"200"} className=" mx-auto d-block"  src={img}/><br/>
                        <div style={{paddingBottom: '2%', height: 65}}>
                            <p align={'justify'} >{description.substring(0, 110)}{description.length >109? '...':'.'}</p>
                        </div>
                        <div className="d-grid gap-2">
                            <Link  style = {styles.btn} className="btn" to={similar?{pathname:'/categorias/detail/'+id}:{pathname:'detail/'+id}} type="button">Ver mas...</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default cards;
