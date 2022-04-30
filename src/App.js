
import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
   
      <div className="App">
         <BrowserRouter>
          <Header/>
        <Routes>
        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<Home />}/>
        </Routes>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
