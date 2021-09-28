import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './components/pages/shop/shop.component';
function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path="/"  component={HomePage}/>
     <Route exact path="/shops" component={ShopPage}/>
     </Switch>
     
    </div>
  );
}

export default App;
