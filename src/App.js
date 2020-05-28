import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import './App.css';
import Register from './Components/Register/Register';
import Search from './Components/Search/Search'
import RestaurantContextProvider from './Context/RestaurantContext/RestaurantContextProvider'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// import Search from
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>          
          <Route exact path="/" component={About} />
          <RestaurantContextProvider>
            <Route path="/register" component={Register} />
            <Route path="/search" component={Search} /> 
          </RestaurantContextProvider>
        </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;

