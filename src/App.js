import React, { Component } from 'react';
import logo from './logo.svg';
import {Route,Router,browserHistory,IndexRoute,Redirect,IndexRedirect} from 'react-router'
import Home from './views/home'
import Find from './views/find'
import Product from './views/product'
import Mine from './views/mine'
import Transition from './components/Transition/index'
import IndexTabs from './components/IndexTabs'
import {Test} from "./loadTool";
import { observable, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
import './assets/css/bao.less';
useStrict(true);

class MyState {
    @observable num = 0;
    @action addNum = () => {
        this.num++;
    };
}

const newState = new MyState();

@observer
class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
