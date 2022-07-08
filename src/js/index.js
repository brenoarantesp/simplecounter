//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
//import './icons.js';

function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="clock"> <i className="fa-regular fa-clock"></i></div>
        <div className="six">{props.dig6 % 10}</div>
        <div className="five">{props.dig5 % 10}</div>
        <div className="four">{props.dig4 % 10}</div>
        <div className="tree">{props.dig3 % 10}</div>
        <div className="two">{props.dig2 % 10}</div>
        <div className="one">{props.dig1 % 10}</div>
    </div>);
}
SimpleCounter.propTypes = {
    dig1: PropTypes.number,
    dig2: PropTypes.number,
    dig3: PropTypes.number,
    dig4: PropTypes.number,
    dig5: PropTypes.number,
    dig6: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const one = Math.floor(counter/1);
    const two = Math.floor(counter/10);
    const three = Math.floor(counter/100);
    const four = Math.floor(counter/1000);
    const five = Math.floor(counter/10000);
    const six = Math.floor(counter/100000);

    console.log(six, five, four, three, two, one);
    counter++;

    ReactDOM.render(
        <SimpleCounter dig1={one} dig2={two} dig3={three} dig4={four} dig5={five} dig6={six} />, 
        
        document.querySelector("#app"));
    
},1000);
    




