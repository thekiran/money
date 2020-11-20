import React from 'react'

import Header from '../components/header/header'
import About from '../components/about/About'
import Instruction from '../components/instruction/Instruction'
import Review from '../components/review/Review'
import Showcase from '../components/showcase/Showcase'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
// import { useEffect } from 'react'

import './homepage.css'
// import ScrollMagic from 'react-scrollmagic'
// import ScrollMagic from 'scrollmagic'

// import { Tween } from 'gsap/gsap-core'
// import { TweenMax } from 'gsap/gsap-core'
const Homepage = () => {
	// React.useEffect(() => {
	// 	const scrollAnimation = () => {
	// 		// Init ScrollMagic Controller
	// 		var scrollMagicController = new ScrollMagic()
	// 		// Create Animation for 0.5s
	// 		var tween = TweenMax.to('#animation', 0.5, {
	// 			backgroundColor: 'rgb(255, 39, 46)',
	// 			scale: 5,
	// 			rotation: 360
	// 		})
	// 		// Create the Scene and trigger when visible
	// 		var scene = new ScrollMagic.Scene({
	// 			triggerElement: '#main',
	// 			offset: 150 /* offset the trigger 150px below #scene's top */
	// 		})
	// 			.setTween(tween)
	// 			.addTo(scrollMagicController)
	// 		// Add debug indicators fixed on right side
	// 		scene.addIndicators()
	// 	}
	// 	scrollAnimation()
	// }, [])
	return (
		<React.Fragment>
			<header className='main-header'>
				<Navbar />
				<Header />
				{/* <main id='main' className='main'>
					<div id='animation'>
						<h1>0000000000</h1>
					</div>
				</main> */}
			</header>
			<Showcase />
			<Instruction />
			<About />
			<Review />
			<Footer />
		</React.Fragment>
	)
}

export default Homepage
