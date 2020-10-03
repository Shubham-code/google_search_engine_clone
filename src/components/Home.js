import React,{ useState } from 'react';
import { FaSistrix , FaMicrophone } from 'react-icons/fa';


const Home = (props) => {

    const [state, setstate] = useState('');
    const searchGoogle = e=>{
        props.history.push({pathname:"/search", state})
    }

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__logo">
                    <img src="/images/googlelogo.png" alt="logo" />
                </div>
                <form className="home__form" onSubmit={searchGoogle}>
                    <input type="text" className="home__input" placeholder="Search Google or type a URL" onChange={(e)=>setstate(e.target.value)} value={state} required/>
                    <div className="home__group">
                        <input className="home__btn "type="submit" value="Google Search"/>

                        <input className="home__btn1" type="submit" value="I'm Feeling Lucky" />
                    </div>
                    <FaSistrix  className="search__icon"/>
                    <FaMicrophone className="microphone"/>
                </form>
            </div>
        </div>
    );
};

export default Home;
