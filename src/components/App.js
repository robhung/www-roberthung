// Libraries
import React, { Component } from 'react';
import { 
	BrowserRouter, 
	Route,
	Switch 
} from 'react-router-dom';

// Components
import Home from './Home';
import NotFound from './NotFound';

// App Component
export default class App extends Component {

	render() {
		return (
			<div>
			<BrowserRouter>
				<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
				</div>
			</BrowserRouter>
			</div>
		)
	}

};