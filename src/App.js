import React, { Component } from 'react';
import {createStore,applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux'
import reducer from './reducer'
import {Route,Router,browserHistory,IndexRoute,Redirect,IndexRedirect} from 'react-router'
import Home from './views/home'
import Find from './views/find'
import Product from './views/product'
import Mine from './views/mine'
import Transition from './components/Transition/index'
import IndexTabs from './components/IndexTabs'
import {Test} from "./loadTool";
import './assets/css/bao.less';
const logger = createLogger();
const store=createStore(reducer,{num:24},applyMiddleware(logger))
class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/"  component={Transition}>
              <IndexRedirect to="home" />
              <Route path="" component={IndexTabs} >
                  <IndexRoute component={Home}/>
                  <Route path="/home" component={Home}> </Route>
                  <Route path="/product" component={Product}> </Route>
                  <Route path="/find" component={Find}> </Route>
                  <Route path="/mine" component={Mine}> </Route>
              </Route>
              <Route path="/test" getComponent={Test}> </Route>
          </Route>
          <Redirect from='/*' to='/' />
      </Router>
        </Provider>
    );
  }
}

export default App;
