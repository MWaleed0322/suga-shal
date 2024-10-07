import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import "./styles/globals.css";
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
          <Route Component={Home} path="/about"></Route>


        </>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
