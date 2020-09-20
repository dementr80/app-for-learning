import React, { useState, useEffect } from 'react';
import { Router, Route, Switch }      from 'react-router-dom';
import history 					      from './history';
import './App.css';

import Welcome		from './components/welcome/Welcome';
import ClassTest	from './components/classTest/ClassTest';
//import {ContextTest} from './components/contextTest/ContextTest'

class App extends React.Component {
 render() {
  return (
	// <ContextTest.Provider>
		<Router history={history}>
			<Switch>
				<Route exact path="/"             component={Welcome}/>
				<Route exact path="/ClassTest"    component={ClassTest}/>
			</Switch>
     	</Router>
	// </ContextTest.Provider>
	);
 }
}
export default App;