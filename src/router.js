import Home from "./views/home/home";
import page404 from "./views/404/404";
import Noticias from "./views/noticias/noticias"
import Medicina from "./views/categories/medicina";
import Ejercicio from "./views/categories/ejercicio";
import Consejos from "./views/categories/consejos";
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
        path: '/categorias/medicina',
        component: Medicina,
        exact: true,
        show:false
    },
    {
        path: '/categorias/ejercicio',
        component: Ejercicio,
        exact: true,
        show:false
    },
    {
        path: '/categorias/consejo',
        component: Consejos,
        exact: true,
        show:false
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
        component: Home,
        name: '404',
        exact: false,
        show:false
    }
];


export  default  routers
