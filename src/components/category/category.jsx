import "./category.css"


function Category({name,img,path}) {
    return (
        <div style={{padding: '2%'}}>
            <a href={path} style={{textDecoration: 'none'}}>
                <div className="card-category text-center zoom" alt={name} style={{background: 'linear-gradient(rgb(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),\n' +
                        '    url("'+img+'")',backgroundSize:'400px'}} >
                    <h4 className={'text-center'}><b>{name}</b></h4>
                </div>
            </a>
        </div>

    );
}

export default Category;
