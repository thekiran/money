import React from 'react'
import { useState } from 'react'
import Navbar from '../components/navbar/navbar'

import './login.css'

const Login = () => {
	const [ msg, setMsg ] = useState(false)

	const tooltip = () => {
		if (msg) {
			return <span>Username does not exist</span>
		}
	}
	const submitHandler = (e) => {
		e.preventDefault()
		setMsg(true)
	}
	return (
		<header className='main-header sub'>
			<Navbar />

			<div className='main'>
				<p className='sign' align='center'>
					Sign in
				</p>
				{tooltip()}
				<form onSubmit={submitHandler} className='form1'>
					<input className='un ' type='text' align='center' placeholder='Username' />
					<input className='pass' type='password' align='center' placeholder='Password' />
					<button type='submit' className='submit' align='center'>
						Sign in
					</button>
				</form>
			</div>
		</header>
	)
}

export default Login
