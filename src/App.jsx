import { Link } from 'react-router-dom';
import AppRouter from './app/Router';

const App = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100vw" }}>
      <main>
        <AppRouter />
      </main>

      <footer>
        <p>&copy; 2024 Proyecto Base con React</p>
      </footer>
    </div>
  );
};

export default App;