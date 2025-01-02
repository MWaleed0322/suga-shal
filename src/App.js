import Footer from './components/Footer';
import Header from './components/Header';
import "./styles/globals.css";
import Home from './pages/Home';
import menu from './pages/menu';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Route Component={Career} path="/career"></Route>
            <Route Component={Contact} path="/contact"></Route>
          </>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
