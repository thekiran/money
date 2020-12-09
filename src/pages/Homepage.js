import React, { useCallback } from 'react'

import Header from '../components/header/header'
import About from '../components/about/About'
import Instruction from '../components/instruction/Instruction'
import Review from '../components/review/Review'
import Showcase from '../components/showcase/Showcase'
import Navbar from '../components/navbar/navbar' 
import Footer from '../components/footer/Footer' 

import Platform from '../components/platform/Platform'
import { useState } from 'react'
import Fadecontent from './Fadecontent' 
import './homepage.css'
import TextContent from './TextContent'

const Homepage = () => {
	 
	const [paraContent, setParaContent ] = useState(true)
	const [fadeContent, setFadeContent ] = useState(false)
	const [navContent, setNavContent ] = useState(false)
	const [offsetY, setOffsetY] = useState(0)
	
	const handleScroll = () => setOffsetY(window.pageYOffset) 
	const navParallax = () => {
		setFadeContent(false)
		setParaContent(true)
		setNavContent(false)
	}
	const navScroll = () => {
		setParaContent(false)
		setFadeContent(true)
		setNavContent(false)
	}
	const navText = () => {
		setParaContent(false)
		setFadeContent(false)
		setNavContent(true)
	}
	const m = useCallback((node)=>{
		if(node !== null){ 
			window.addEventListener("scroll",handleScroll)
		} else if(node === null){
			 window.removeEventListener("scroll",handleScroll) 
		}
	})
	return (
		<React.Fragment>
			<header className='main-header'>
				<Navbar />
				<Header /> 
			</header>
				<Showcase />
		<div className="m" id="m">
			<div className="nav-cont">
			<div className="m-nav"> 
			<div className='log'> 
						<h5>Animation</h5>
				</div>
				<ul className='nav-lis'>
					<li onClick={navParallax} className={`na ${paraContent ? 'active' :null}`}>
						
					{/* <Link to="mp" className='nav-lin'> */}
						<button  className='nav-lin'>
							Parallax
						</button>
						{/* </Link> */}
					</li>
					<li onClick={navScroll} className={`na ${fadeContent ? 'active' :null}`}>
					
							{/* <Link to="m" className='nav-lin'> */}
								<button  className='nav-lin'>
							Fade
							</button>
						{/* </Link> */}
					</li>
				 
					<li onClick={navText} className={`na ${navContent ? 'active' :null}`}>
					
							{/* <Link to="m" className='nav-lin'> */}
								<button  className='nav-lin'>
							Text
							</button>
						{/* </Link> */}
					</li>
				 
				</ul>
			</div>
				{/* <button 
					// onClick={hamHandler}
					className='hamburger hamburger--spin '
					type='button'>
					<span className='hamburger-box'>
						<span className='hamburger-inner' />
					</span>
				</button> */}
			</div> 
			<div className="m-s" id="ms"> 
				{fadeContent ? <Fadecontent cont={fadeContent} pc={paraContent}></Fadecontent> : null}
			</div>
			{paraContent ?
			 	<div ref={m} className="m-p" id="mp">	
				<div className="m-bg" 
				style={{transform:`translateY(${offsetY * 0.5}px)`}}
				></div>
				<div className="m-cont" 
				// style={{transform:`translateY(${offsetY * 0.1}px)`}}
				>
				<Instruction />
				<About />
				<Review />
				<Platform />
				<Footer />
				</div>
		
			</div> : null }
		<div className="m-t">
				{navContent ? (
					<TextContent />
				):null}
		</div>
		</div>
		</React.Fragment>
	)
}

export default Homepage
