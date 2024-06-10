import PropTypes from "prop-types";


export const CounterApp = ({numero}) => {

    const count = ()=>{
        let temo = 0;
        temo = numero + 1;
        console.log(temo)
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ numero }</h2>
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
