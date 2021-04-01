import Home from "./views/home/home";
import page404 from "./views/404/404";
import Noticias from "./views/noticias/noticias"
import Medicina from "./views/categories/medicina";
import Nosotros from "./views/aboutUs/aboutUs";

const routers = [

    {
        path: '/home',
        component: Home,
        name: 'Inicio',
        exact: true,
        show:true
    },
    {
        path: '/noticias',
        component: Noticias,
        name: 'Noticias',
        exact: true,
        show:true
    },


    {
        path: '/nosotros',
        component: Nosotros,
        name: 'Nosotros',
        exact: true,
        show:true

    },

    {
        path: '/',
        component: page404,
        name: '404',
        exact: false,
        show:false
    }
];


export  default  routers
