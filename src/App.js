import Navbar from './components/Navbar';

import Footer from './components/Foot'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Info from "../src/pages/Info"
import './components/home.css'
import './App.css';

function App() {

  return (
 <div className="App">

        <Router>      
<Navbar />
<Routes>
  <Route  path="/" exact element={<Home />}/>
  <Route  path="/about" exact element={<About />}/>
  <Route  path="/contact" exact element={<Contact />}/>
  <Route  path="/info" exact element={<Info  />}/>

</Routes>
  <Footer />
 </Router>
</div>

  
     )}

export default App;
