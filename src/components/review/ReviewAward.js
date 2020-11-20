import React, { useCallback, useRef } from 'react'

const ReviewAward = () => {
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					// console.log(entries[0].target)
					entries[0].target.children[0].classList.remove('anim')
					entries[0].target.children[1].children[0].classList.remove('anim')
					entries[0].target.children[1].children[1].classList.remove('mid')
					entries[0].target.children[1].children[2].classList.remove('right')
				} else {
					entries[0].target.children[0].classList.add('anim')
					entries[0].target.children[1].children[0].classList.add('anim')
					entries[0].target.children[1].children[1].classList.add('mid')
					entries[0].target.children[1].children[2].classList.add('right')
				}
			},
			{
				threshold: 0.75
			}
		)
	)
	// eslint-disable-next-line
	const aww = useCallback((node) => {
		if (observer.current) observer.current.observe(node)
	})
	return (
		<div className='review-award-container '>
			<div ref={aww} className='review-awards'>
				<div className='review-head anim'>
					<h2> TrustPilot score 4.7 out of 5, from 99,056 reviews</h2>
					<p>
						It’s your money. You can trust us to get it where it needs to be, but don’t take our word for
						it. Read our reviews.
					</p>
				</div>
				<div className='review-content-tabs'>
					<div className='re-cont-tab anim'>
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<h5>Excellent in all aspects. Fast, safe and easy to use the site. Thank you Transferwise!</h5>
						<span>John and Ann</span>
						<br />
						<span>Published 3 minutes ago</span>
					</div>
					<div className='re-cont-tab mid'>
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<h5> The best Service ever</h5>
						<span>Zouheir Benghali</span>
						<br />
						<span>Published 6 minutes ago</span>
					</div>
					<div className='re-cont-tab right'>
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<i className='fas fa-star' />
						<h5>very useful and good service </h5>
						<span>Massimo Buresti</span>
						<br />
						<span>Published 11 minutes ago</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewAward
