
import {
    Link
} from "react-router-dom";
import "./header.css"
import routers from '../../router'
import {React, useState} from 'react'
function Nav() {

    const [select, setSelect] = useState('')
    let pathname = window.location.pathname.substring(1)
    console.log(select)
    return (
    <header>
            <section style={{padding:'10px', width:'100%' , flexDirection: 'row'}}>
                <nav className="navbar navbar-expand-lg navbar-light" style={{color:"white"}}>
                    <div className="container-fluid">
                        <a style={{color:"white"}} className="navbar-brand" href="#"><b>SALUDSMARTRD</b></a>
                        <button className="navbar-toggler" style={{color:"white", backgroundColor: 'white'}} type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    {
                                        routers&&routers.map((data,i)=>
                                            data.show&&
                                            <li  className="nav-item">
                                                <Link
                                                    className="nav-link active zoom "
                                                    onClick={()=> setSelect(data.path)}
                                                    key={i} to={data.path}
                                                    style={{color:"white", textDecoration: select === data.path? 'underline' : 'none'}} >
                                                    <b>
                                                        {data.name}
                                                    </b>
                                                </Link>
                                            </li>
                                            )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={'text-center'}>
                    <h1 className={'text-header'}>{select === '/home' || select === ''?'SALUD INTELIGENTE':pathname.split('/')[0] +(pathname.split('/')[1]?' / ':'')+(pathname.split('/')[1]?pathname.split('/')[1]:'') }</h1>
                    {select === '/home' || select === '' &&(<h4 className={'text-white'}>Conoce como puedes llevar una vida mas saludable con nosotros!</h4>)}
                </div>
            </section>
    </header>
    );
}

export default Nav;
