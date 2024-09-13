import { useNavigate } from 'react-router-dom';
import FormPersona from '../components/FormPersona';

const NuevaPersona = () => {
    const navigate = useNavigate();

    const irAHome = async () => {
        navigate('/');
    };

    return (
        <FormPersona submitHandler={irAHome} />
    );
};

export default NuevaPersona;