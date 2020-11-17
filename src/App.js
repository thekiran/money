import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import store from './store'
// import Header from './components/header/header'

// "homepage": "http://kiranthemasterofbakchod.github.io/misterk",

const App = ({ hideLoader }) => {
	useEffect(
		() => {
			hideLoader()
		},
		[ hideLoader ]
	)
	return (
		<React.Fragment>
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route path='/' component={Homepage} />
					</Switch>
					<div className='space' />
				</BrowserRouter>
			</Provider>
		</React.Fragment>
	)
}

export default App
