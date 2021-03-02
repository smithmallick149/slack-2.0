import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import Login from './components/Login';
import Spinner from 'react-spinkit';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContents>
					<img
						src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
						alt=""
					/>
					<Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
				</AppLoadingContents>
			</AppLoading>
		);
	}

	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<AppBody>
							<SideBar />
							<Switch>
								<Route exact path="/" component={Chat} />
							</Switch>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
const AppLoading = styled.div``;
const AppLoadingContents = styled.div`
	text-align: center;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> img {
		height: 100px;
		padding: 20px;
	}
`;
