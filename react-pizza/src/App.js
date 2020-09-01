import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import { Header, } from './componends';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas } from './redax/actions/pizzes'






class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      window.store.dispatch(setPizzas(data.pizzas));
      console.log(data.pizzas)
      });

  }

  
  render() {
    console.log(this.props.items);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return{
    items: state.pizzas.items,
  }
};


export default connect(mapStateToProps)(App);
 