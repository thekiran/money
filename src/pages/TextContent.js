import React from 'react'


import Instruction from './textComponent/instruction/Instruction'
import About from './textComponent/about/About'
import Review from './textComponent/review/Review'
import Platform from './textComponent/platform/Platform'
import Footer from './textComponent/footer/Footer'

const TextContent = () => {
    return (
        <React.Fragment>
				<Instruction />
				<About />
				<Review />
				<Platform />
				<Footer />
        </React.Fragment>
    )
}

export default TextContent
