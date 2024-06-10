
const experiencias=()=>{
    return 'mendoza';
}

/**
 * NO se puede mandar el objeto completo a un elemento html, se debe desestructurar o mandar por atributo
 * como objeto.mesagge
 * @returns {JSX.Element}
 * @constructor
 */
export const FirstApp = ()=>{
    const {message,tittle} = {
        message:'jesus!',
        tittle:'programador web'
    };
    return (
        <>
            <h1>{ message }!</h1>
            <p>{tittle}</p>
            <p>{experiencias()}</p>
        </>
    );
}

