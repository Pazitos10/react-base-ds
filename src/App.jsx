import { Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
//import AppRouter from './app/Router';

const App = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100vw" }}>
      
      <nav style={{width: "300px"}}>
        <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personas/add">Add Persona</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet for rendering child routes */}
      <Outlet />


      <footer>
        <p>&copy; 2024 Proyecto Base con React</p>
      </footer>
    </div>
  );
};

export default App;