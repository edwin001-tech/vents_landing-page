import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
const routing = (
    <Router>
      <div>
      
            
            <Switch>
              
            <Route exact path="/" component={App} />
            <Route exact path="/Register" component={Register}  />
            <Route exact path="/Login" component={Login} />
            
            
            
            
           
            </Switch>
            </div>
            </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
