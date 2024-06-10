
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

