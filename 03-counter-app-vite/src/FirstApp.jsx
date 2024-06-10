
import PropTypes from "prop-types";

const experiencias=()=>{
    return 'mendoza';
}
/**
 * NO se puede mandar el objeto completo a un elemento html, se debe desestructurar o mandar por atributo
 * como objeto.mesagge
 * @returns {JSX.Element}
 * @constructor
 */
export const FirstApp = ({title, numero})=>{
    return (
        <>
            <h1>{ title }!</h1>
            <p>{numero}</p>
            <p>{experiencias()}</p>
        </>
    );
}

/**
 * Las proptypes nos ayudan a establecer los requerimientos que va a recibir el componente
 * isRequired se usa para establecer un parametro obligatorio
 * @type {{numero: Requireable<number>, title: Requireable<string>}}
 */
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    numero: PropTypes.number,
}

