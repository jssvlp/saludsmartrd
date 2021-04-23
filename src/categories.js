
import Medicina from "./img/medecina.jpeg"
import Ejercicio from "./img/ejercicio.jpeg"
import Consejo from "./img/consejo.jpeg"
import Habitos from "./img/habitos.jpeg"
import Remedio from "./img/remedios.jpeg";
import Nutricion from "./img/nutrición.jpeg"

const categories = [

    {
        path: '/categorias/medicina',
        name: 'MEDICINAS',
        show:false,
        url: Medicina
    },
    {
        path: '/categorias/ejercicio',
        name: 'EJERCICIOS',
        show:false,
        url: Ejercicio
    },
    {
        path: '/categorias/consejo',
        name: 'CONSEJOS',
        show:false,
        url: Consejo,
    },
    {
        path: '/categorias/habito',
        name: 'HABITOS',
        show:false,
        url: Habitos
    }
    ,
    {
        path: '/categorias/tratamiento',
        name: 'TRATAMIENTOS',
        show:false,
        url: Remedio
    },
    {
        path: '/categorias/nutricion',
        name: 'NUTRICION',
        show:false,
        url: Nutricion
    }

];


export  default  categories
