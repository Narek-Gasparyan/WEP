import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header, } from './componends';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas } from './redax/actions/pizzes';


function App() {
  const dispatch = useDispatch();
  
  

  
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, );
  
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}


export default App;
 