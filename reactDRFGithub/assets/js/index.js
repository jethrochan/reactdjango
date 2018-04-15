//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ActivityExpandedComponent from './containers/activity-expanded';
import ActivityNewComponent from './containers/activity-new';
const createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <div style={{ marginBottom: '60px' }}>
            <Navbar/>
              <Switch>
                <Route path="/fistbump/activitynew/" component={ActivityNewComponent} />
                <Route path="/fistbump/activityexpanded/:id" component={ActivityExpandedComponent} />
                <Route exact path="/fistbump/" component={Home} />
              </Switch>
          </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
