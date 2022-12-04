
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider Routes={Routes} />
    </div>
  );
}

export default App;
