import Content from "../../content"
import Select from 'react-select';
import SearchImg from '../../img/search.png'
import "./search.css"
import { useState} from 'react'
function Search() {
    const [selectedOption,setSelectedOption] = useState({})
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    function handleChange(e) {
        setSelectedOption(e)
        console.log(`Option selected:`, selectedOption);
    }

    return (
        <div>
            <input
                type={'text'}
                className={'search'}
                placeholder={'busca un noticia o un tema'}
            />
        </div>

    );
};



export default Search
