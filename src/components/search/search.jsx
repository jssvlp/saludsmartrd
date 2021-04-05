import Content from "../../content"
import Select from 'react-select';
import SearchImg from '../../img/search.png'
import "./search.css"
import React, { useState, useEffect} from 'react'
import {
    Link
} from "react-router-dom";
import content from "../../content";
function Search() {
    const [options,setOptions] = useState({})


function find(e) {
        let result = content.filter((data,i)=>{
            return data.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        })

    setOptions(result)
}

    useEffect(() => {
        window.onscroll = () => {
            setOptions({})
        }
        window.addEventListener('click', function(e){
            if (!document.getElementById('search_box').contains(e.target)){
                setOptions({})
            }
        });
    },[]);
    return (
            <div className="input-border" id={"search_box"}>
                    <input
                        autoComplete={"off"}
                        //onBlur={()=> setOptions({})}
                        onFocus={(e) => find(e)}
                        type="search"
                        className={"input-search"}
                        onChange={(e)=> find(e)}
                        placeholder="Search.."
                        name="search"/>
                    <span> <i style={{color:'green'}} className={'fa fa-search'}></i></span>
                <div className={'list'} style={{textDecoration:'none', display: options.length>0?'block':'none'}}>
                    {options.length>0&&
                    options.map((data,i)=>

                        <Link to={{pathname: "/categorias/detail/"+data.id}}   id={"a_search"} style={{textDecoration:'none', cursor: 'pointer',}}>
                            <label style={{cursor: 'pointer'}}><b>{data.name}</b></label><br/>
                            <span style={{fontSize:12,}}>{data.category}</span>
                            <hr style={{padding:0, marginTop:0}}/>
                        </Link>

                    )}
                </div>
            </div>


    );
};



export default Search
