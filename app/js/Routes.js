'use strict';

import React                                from 'react/addons';
import {Route, NotFoundRoute, DefaultRoute} from 'react-router';

import App                                  from './App';
import HomePage                             from './pages/HomePage';
import LightsPage							from './pages/LightsPage';
import AppleTvPage							from './pages/AppleTvPage';




export default (
  <Route handler={App} path='/'>

    <DefaultRoute handler={HomePage} />

    <Route name='Home' path='/' handler={HomePage} />
    <Route name='Lights' path='/lights' handler={LightsPage} />
    <Route name='Apple TV' path='/appletv' handler={AppleTvPage}/>
    


  </Route>
);

