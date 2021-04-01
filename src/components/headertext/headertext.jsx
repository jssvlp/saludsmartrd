






function headertext({title}) {

    return (
        <div style={{backgroundColor:'#43c93e', color:'white', borderRadius:'20px', padding: '8px'}}>
            <h2 className={'text-center'}><b>{title.toUpperCase()}</b></h2>
        </div>
    )

}


export  default  headertext;
