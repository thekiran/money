import React from 'react' 



import About from './components/about/About'
import Instruction from './components/instruction/Instruction'
import Review from './components/review/Review' 
import Footer from './components/footer/Footer'  



const Fadecontent = (cont) => { 
    return (
        <div>
           	<Instruction cont={cont} pc={cont.pc} />
				<About />
				<Review /> 
				{/* <Platform /> */}
				<Footer />
        </div>
    )
}

export default Fadecontent
