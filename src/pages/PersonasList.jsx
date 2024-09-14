import { Link } from 'react-router-dom';
import usePersonas from '../hooks/usePersonas';

const PersonasList = () => {
    // Realizaremos el fetch de Personas con nuestro hook.
    const { personas, isLoading, isError } = usePersonas();

    // Podemos mostrar cosas distintas si ocurre algun error durante la llamada a la API 
    /*
    if (isLoading) return <Spinner />
    if (isError) return <Error />
    */
    if (isError || !personas) return <><h2>Personas</h2><h4>Ha ocurrido un problema al contactar a la API.</h4></>

    return (
        <div style={{width: "100%"}}>
            <h2>Personas</h2>
            <Link to="/personas/add">Nueva Persona</Link>
            <table style={{border: "1px solid white", maxWidth: "100%"}}>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {personas.map(persona => (
                        <tr key={persona.id}>
                            <td>{persona.nombre}</td>
                            <td>{persona.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonasList;