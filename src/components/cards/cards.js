
import styles from "../cards/style"



function cards({Title,img,description }) {
    return (
       
          <div className="col-md-4" style={{padding: '1%'}}>
                <div class="card">
                    <div class="card-body"  style = {styles.card}>
                        <h5 class="card-title"  style = {styles.title}>{Title.toUpperCase()}</h5>
                        <img  className="img-fluid mx-auto d-block"  src={img}></img>
                        <p class="card-text" style = {styles.title}>{description}</p>
                        <div class="d-grid gap-2">
                            <button  style = {styles.btn} class="btn" type="button">Ver mas...</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default cards;