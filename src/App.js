import Home from './pages/Home';
import "./styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route Component={Home} path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
