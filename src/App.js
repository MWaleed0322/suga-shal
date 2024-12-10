import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import menu from './pages/menu';
import About from './pages/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/globals.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <>
            <Route Component={Home} path="/"></Route>
            <Route Component={About} path="/about"></Route>
            <Route Component={menu} path="/menu"></Route>

          </>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
