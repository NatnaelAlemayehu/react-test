import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import './App.css';
import Register from './Components/Register/Register';
import RestaurantContextProvider from './Components/RestaurantMain/RestaurantContextProvider'
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
          </RestaurantContextProvider>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;

