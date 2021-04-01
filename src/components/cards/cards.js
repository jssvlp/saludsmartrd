
import styles from "../cards/style"



function cards({Title,img,description,id }) {
    return (

          <div className="col-md-4" style={{padding: '1%'}}>
                <div className="card">
                    <div className="card-body"  style = {styles.card}>
                        <h5 className="card-title"  style = {styles.title}>{Title.toUpperCase()}</h5>
                        <img  className="img-fluid mx-auto d-block"  src={img}></img>
                        <p className="card-text" style = {styles.title}>{description}</p>
                        <div className="d-grid gap-2">
                            <a  style = {styles.btn} className="btn" href={'detail/'+id} type="button">Ver mas...</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default cards;
