import { useForm } from 'react-hook-form';

const FormPersona = ({submitHandler}) => {
    const { 
        register, 
        formState: { errors }, 
        handleSubmit 
    } = useForm();

    const onSubmit = data => {
        // TODO: hacer el submit a la API.
        console.log("El submit no fue implementado aún");
        console.log(`Creando nueva persona con los siguientes datos ${JSON.stringify(data)}`);
        if (submitHandler != null) submitHandler();
    };

    return (
        <div style={{width: "500px"}}>
            <h2>Nueva Persona</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>
                <label htmlFor="nombre">Nombre:</label>
                <input {...register('nombre', { required: true })} />
                {errors.nombre?.type === "required" && (
                    <p role="alert">El nombre es obligatorio</p>
                )}
                <label htmlFor="email">Email:</label>
                <input type="email" {...register('email', { required: true })} />
                {errors.email?.type === "required" && (
                    <p role="alert">El email es obligatorio</p>
                )}

                <button type="submit" style={{marginTop: "10px"}}>Enviar</button>
            </form>
        </div>
    );
};

export default FormPersona;