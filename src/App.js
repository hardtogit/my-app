import React, { Component } from 'react';
import logo from './logo.svg';
import {Route,Router,browserHistory,IndexRoute} from 'react-router'
import Home from './views/Home'
import Find from './views/Find'
import Product from './views/Product'
import Mine from './views/Mine'
import Transition from './components/Transition/index'
import IndexTabs from './components/IndexTabs'
import Test from './views/Test'
import './assets/css/bao.less';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/"  component={Transition}>
              <Route path="" component={IndexTabs} >
                  <IndexRoute component={Home}/>
                  <Route path="/home" component={Home}> </Route>
                  <Route path="/product" component={Product}> </Route>
                  <Route path="/find" component={Find}> </Route>
                  <Route path="/mine" component={Mine}> </Route>
              </Route>
              <Route path="/test" component={Test}> </Route>
          </Route>
      </Router>
    );
  }
}

export default App;
