import React from 'react'

import Header from '../components/header/header'
import About from '../components/about/About'
import Instruction from '../components/instruction/Instruction'
import Review from '../components/review/Review'
import Showcase from '../components/showcase/Showcase'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'

const Homepage = () => {
	return (
		<React.Fragment>
			<header className='main-header'>
				<Navbar />
				<Header />
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
