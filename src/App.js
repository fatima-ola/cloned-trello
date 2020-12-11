import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App=()=> {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Dashboard />
          </Route>
        </Switch>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
