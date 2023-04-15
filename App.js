import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>

        
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
