import {useState} from "react";
import PropTypes from "prop-types";



export const CounterApp = ({numero}) => {
    const [counter, setCounter ] = useState(numero);

    const count = ()=>{
        setCounter(counter + 1);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ count }>
                +1
            </button>
        </>
    );
}

CounterApp.propTypes = {
    numero: PropTypes.number,
}
CounterApp.defaultProps = {
    numero: 0,
}
