import React,{ useState, useEffect } from 'react';
import { FaSistrix, FaMicrophone } from 'react-icons/fa';
import axios from "axios";
import Show from "./Show";
import { key, cx } from "../Api";

const Search = (props) => {

    const goBack= e=>{
        props.history.push('/'); // for going back homepage
    }

    const [state, setState] = useState(
        props.location.state ? props.location.state : ""
    );  // for getting the user search question on search page

    const [result, setresult] = useState([]);
    const [Info, setInfo] = useState("");

    const searchGoogle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
            if (response) {
                setresult(response.data.items);
                setInfo(response.data.searchInformation);
            }
        } catch (error) {
            console.log(error);
        }
    };
     useEffect(() => {
         
        async function getPosts(){
         if(props.location.state){
             try {
                 const response = await axios.get(
                     `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
                 if (response) {
                     setresult(response.data.items);
                     setInfo(response.data.searchInformation);
                 }
             } catch (error) {
                 console.log(error);
             }
         }}
            getPosts();
            // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
     
    return (
        <div className="search"> 
            <div className="search__form">
                <div className="search__form-logo">
                    <img src="/images/googlelogo_small.png" alt="smalllogo" onClick={goBack} /> 
                </div>
                <div className="search__form-input">
                    <form className="home__form" onSubmit={searchGoogle}>
                        <input type="text" className="home__input" value={state} onChange={(e) => setState(e.target.value)} required />
                            <FaSistrix className="search__icon" onMouseDown={searchGoogle} />
                        <FaMicrophone className="microphone" />
                    </form> 
                </div>
            </div>
            <Show  result={result} Info={Info} />
        </div>
        
    );
};
export default Search;
