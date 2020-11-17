import React, { Fragment, useRef, useCallback } from 'react'

import './review.css'
import ReviewAward from './ReviewAward'
const Review = () => {
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					// console.log(entries[0].target.children[1].children)
					entries[0].target.children[0].classList.remove('anim')
					entries[0].target.children[1].children[0].classList.remove('up')
					entries[0].target.children[1].children[1].classList.remove('down')
					entries[0].target.children[1].children[2].classList.remove('left')
					// entries[0].target.children[1].classList.add('anim')
				} else {
					// console.log(entries[0].target)
					entries[0].target.children[0].classList.add('anim')
					entries[0].target.children[1].children[0].classList.add('up')
					entries[0].target.children[1].children[1].classList.add('down')
					entries[0].target.children[1].children[2].classList.add('left')
				}
			},
			{
				// rootMargin: '0px 0px -300px 0px'
				threshold: 0.9
			}
		)
	)
	const rev = useCallback((node) => {
		if (observer.current) observer.current.observe(node)
	})
	return (
		<Fragment>
			<div ref={rev} className='review-container'>
				<h2 className='review-title anim'>See what the world’s largest publications have to say</h2>

				<div className='review-tabs'>
					<div className='tab up'>
						<div className='tab-img'>Wired </div>
						<div className='tab-text'>Smart tech and sharp thinking are disrupting high-street banks</div>
					</div>
					<div className='tab down'>
						<div className='tab-img'>Financial Times </div>{' '}
						<div className='tab-text'>
							TransferWise is looking to use the internet to spark a digital revolution in current
							financial services.
						</div>
					</div>
					<div className='tab left'>
						<div className='tab-img'>The Economist </div>{' '}
						<div className='tab-text'>
							TransferWise takes a machete to the hefty fees that banks levy to send money across borders.
						</div>
					</div>
				</div>
			</div>
			{/* <div className='review-carousel'>
				<ReviewCarousel /> 
			</div> */}
			<ReviewAward />
		</Fragment>
	)
}

export default Review
