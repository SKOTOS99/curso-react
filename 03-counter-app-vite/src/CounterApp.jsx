import PropTypes from "prop-types";


export const CounterApp = ({numero}) => {
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ numero }</h2>
        </>
    );
}

CounterApp.propTypes = {
    numero: PropTypes.number,
}
CounterApp.defaultProps = {
    numero: 0,
}
