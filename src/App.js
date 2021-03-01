import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
	return (
		<div className="App">
			<Router>
				<>
					<Header />
					<AppBody>
						<SideBar />
						<Switch>
							{/* <Route exact path="/" component={Header} /> */}
							{/* <Route exact path="/about" component={About} />
						<Route exact path="/users" component={Users} /> */}
						</Switch>
					</AppBody>
				</>
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
