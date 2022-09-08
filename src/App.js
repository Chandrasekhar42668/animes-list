
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Wishlist from "./Components/Wishlist";

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar/>

       <switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/Wishlist">
          <Wishlist/>
        </Route>

       </switch>
       
      </div>
    
    </Router>
  );
}

export default App;
