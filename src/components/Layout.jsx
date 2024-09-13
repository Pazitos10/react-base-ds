import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {/* Aquí crearemos los demás enlaces de nuestro menú principal */}
            </nav>
            {children}
        </div>
    );
};

export default Layout;