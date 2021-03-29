import Home from "./views/home/home";
import page404 from "./views/404/404"

const routers = [

    {
        path: '/home',
        component: Home,
        exact: true
    },
    {
        path: '/',
        component: page404,
        exact: false
    }
];


export  default  routers
