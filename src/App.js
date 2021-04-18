import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';

import Nav from './Components/NavComponent/Nav';
import MainPage from './Components/MainPageComponent/MainPage'
import ProductsCategories from './Components/ProductsCategories/ProductsCategories';

function App() {
  return (
    <Router>
      <div>
        <Nav />
      <div>
        <Switch>
          <Route exact path="/">
           <MainPage/>
          </Route>
          <Route path="/products">
           <ProductsCategories />
          </Route>
        </Switch>
      </div>

      </div>
      

    </Router>
  )
}

export default App;

