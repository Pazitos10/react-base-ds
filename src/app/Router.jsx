import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
// Aquí importaremos las demás páginas que requieran una ruta.
import NuevaPersona from '../pages/NuevaPersona';

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personas" element={<Home />} />
                    <Route path="/add-persona" element={<NuevaPersona />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;