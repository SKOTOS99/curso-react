
import PropTypes from "prop-types";

/**
 * NO se puede mandar el objeto completo a un elemento html, se debe desestructurar o mandar por atributo
 * como objeto.mesagge
 * @returns {JSX.Element}
 * @constructor
 */
export const FirstApp = ({title, numero, editora})=>{
    return (
        <>
            <h1>{title }!</h1>
            <p>{numero}</p>
            <p>{editora}</p>
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
    editora: PropTypes.string
}

/**
 * En caso de que no se envien los atributos se usa los defaultProps para establecer
 * valores por defecto
 * @type {{numero: number, title: string, editora: string}}
 */
FirstApp.defaultProps = {
    numero: 0,
    title: "felipe",
    editora: "desconocido"
}

