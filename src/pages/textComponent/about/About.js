import React, { useCallback, useRef } from 'react'

import about from '../../../img/about.jpg'

import './about.css'

const About = () => {
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					// console.log(entries[0].target)
					entries[0].target.children[0].children[0].classList.add('anim')
					entries[0].target.children[0].children[1].classList.add('anim')
					// entries[0].target.children[1].classList.add('anim')
					// entries[0].target.classList.remove('out')
				} else {
					// console.log(entries[0].target)
					entries[0].target.children[0].children[0].classList.remove('anim')
					entries[0].target.children[0].children[1].classList.remove('anim')
					// entries[0].target.children[1].classList.remove('anim')
					// entries[0].target.classList.remove('anim')
					// entries[0].target.classList.add('out')
				}
			},
			{
				rootMargin: '0px 0px -300px 0px'
				// threshold: 1
			}
		)
	)

	// eslint-disable-next-line
	const tar = useCallback((node) => {
		if (observer.current && node !== null) observer.current.observe(node)
	}) 
	return (
		<div className='about-container'>
			<div className='about-content'>
				<div ref={tar} className='about-show'>
					<div className='about-text anim'>
						<h2>Global support in a range of languages.</h2>
						<p>
							We don’t do complicated, automated systems. We have offices around the world, full of people
							ready to help you. Whenever you need it.
						</p>
						<button className='about-btn'>Find out now</button>
					</div>
					<div className='about-img anim'>
						<img src={about} alt='' className='ab' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
