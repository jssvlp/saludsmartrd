import notfound from '../../img/notfound.svg'
function page404() {
    return (
        <div className="text-center">
            <h1>Lo sentimos no encontramos lo que andas buscando / 404</h1>
            <img src={notfound} alt={'notfound'} className={'img-fluid'} width={'300'}/>
        </div>
    );
}

export default page404;
