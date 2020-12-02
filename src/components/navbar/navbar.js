import React from 'react'

import brand from '../../img/brand.png'
import { Link } from 'react-scroll'

import './navbar.css'
import './hamburger.css'
// import { Link } from 'react-router-dom'
const Navbar = () => {
	const hamHandler = () => {
		document.querySelector('.hamburger').classList.toggle('is-active')
		document.querySelector('.nav-list').classList.toggle('is-active')
		document.querySelector('.main-nav').classList.toggle('is-active')
	}

	return (
		<div className='main-nav'>
			<div className='nav-container'>
				<div className='logo'>
					<img src={brand} className='brand' alt='brand' />
					<Link to='/'>
						<h5>MoneyTransfer</h5>
					</Link>
				</div>
				<ul className='nav-list '>
					<li className='nav'>
						<a href="">
							Home
						</a>
					</li>
					<li className='nav'>
						<Link className='nav-link' to='instructions'>
							Help
						</Link>
					</li>
					{/* <li className='nav' id='b'>
						<button className='nav-link'>
							
						</button>
						<ul id='sub-list'>
							<li>
								<button className='sub-link'></button>
							</li>
							<li>
								<button className='sub-link'> </button>
							</li>
						 
						</ul>
					</li> */}
					{/* <li className='nav'>
						<Link to='/login' className='nav-link login'>
							Login
						</Link>
					</li> */}
					{/* <li className='nav'>
						<a className='nav-link register'>Register</a>
					</li> */}
				</ul>
				<button
					// style={{ color: '#fff', background: '#fff' }}
					onClick={hamHandler}
					className='hamburger hamburger--spin '
					type='button'>
					<span className='hamburger-box'>
						<span className='hamburger-inner' />
					</span>
				</button>
			</div>
			{/* <div className='ham-container'>
        <button
          // style={{ color: '#fff', background: '#fff' }}
          onClick={hamHandler}
          className='hamburger hamburger--spin '
          type='button'>
          <span class='hamburger-box'>
            <span class='hamburger-inner'></span>
          </span>
        </button>
      </div> */}
		</div>
	)
}

export default Navbar
