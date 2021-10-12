import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index'
import SigninPage from './pages/signin'
import Mailer from './pages/signin'

function App() {
  return (


    <Router>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="." component={SigninPage} exact />
        <div className='signin'>
          <Mailer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
