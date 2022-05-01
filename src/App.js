
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
import { useEffect, useState } from 'react';
import { db } from './firebase';

function App() {

  const [ cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  useEffect(()=>{
    getCartItems();
  },[])



  return (
   
      <div className="App">
         <BrowserRouter>
          <Header/>
        <Routes>
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />

        <Route path="/" element={<Home />}/>
        </Routes>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
