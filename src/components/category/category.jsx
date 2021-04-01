import "./category.css"


function Category({name,img}) {
    return (
        <div style={{padding: '2%'}}>
            <div className="card-category text-center zoom" alt={name} style={{background: 'linear-gradient(rgb(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),\n' +
                    '    url("'+img+'")',backgroundSize:'400px'}} >
                <h2><b>{name}</b></h2>
            </div>
        </div>

    );
}

export default Category;
