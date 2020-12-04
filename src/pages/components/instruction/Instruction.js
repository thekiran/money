import React, { useRef, useCallback, useEffect } from 'react'
import one from '../../../img/about.svg'
import two from '../../../img/school.svg'
import three from '../../../img/money.svg'
import four from '../../../img/about.svg'
import five from '../../../img/calculator.svg'
import six from '../../../img/report.svg'
import './instruction.css'

const Instruction = (cont) => {
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					console.log(entries[0].target.children[1].children)
					entries[0].target.children[0].classList.add('anim')
					entries[0].target.children[1].children[0].classList.remove('left')
					entries[0].target.children[1].children[1].classList.remove('up')
					entries[0].target.children[1].children[2].classList.remove('right')
					// entries[0].target.children[1].classList.add('anim')
				} else {
					// console.log(entries[0].target)
					entries[0].target.children[0].classList.remove('anim')
					entries[0].target.children[1].children[0].classList.add('left')
					entries[0].target.children[1].children[1].classList.add('up')
					entries[0].target.children[1].children[2].classList.add('right')
					// entries[0].target.children[1].classList.remove('anim')
				}
			},
			{
				// rootMargin: '0px 0px -300px 0px'
				threshold: 0.5
			}
		)
	)   

	let	obs = useCallback((node) => { 
		// initobs(node)
		
		if(observer.current && node !== null) {
			// console.log(node)
			observer.current.observe(node)
			// console.log(observer.current)
		 
		}else{
			// console.log('none')
		}
		// else if(observer.current && observer.current !== null){
		// 	console.log(node)
		// 		//
		// }
		
	})   
	// useEffect(()=>{
	// 	window.onload(e=>{
	// 		const t = document.querySelector("ins-content")
		
	// 		console.log(t);
	// 	})
		
	// })
	return (
		<div id='instructions' className='instruction-container'>
			<div ref={obs} className='ins-content'>
				<h1 className='inst-title'>How to send money from USD to EUR.</h1>
				<div className='int-grid'>
					<div className='inst-cover left'>
						<div className='inst-one'>
							<img src={one} alt='school' className='inst-img' />
							<h6>1. Register for free.</h6>
							<p>
								Sign up online or in our app for free. All you need is an email address, or a Google or
								Facebook account.
							</p>
						</div>
					</div>
					<div className='inst-cover up'>
						<div className='inst-two'>
							<img src={two} alt='school' className='inst-img' />
							<h6>2. Choose an amount to send.</h6>
							<p>
								Tell us how much you want to send. We’ll show you our fees upfront, and tell you when
								your money should arrive.
							</p>
						</div>
					</div>

					<div className='inst-cover right'>
						<div className='inst-three'>
							<img src={three} alt='school' className='inst-img' />
							<h6>3. Add recipient’s bank details.</h6>
							<p>
								Fill in the details of your recipient’s bank account. If you don’t know their details,
								we can request them for you.
							</p>
						</div>
					</div>

					<div className='inst-cover'>
						<div className='inst-four'>
							<img src={four} alt='school' className='inst-img' />
							<h6>4. Verify your identity.</h6>
							<p>
								For some currencies, or for large transfers, we need a photo of your ID. This helps us
								keep your money safe.
							</p>
						</div>
					</div>

					<div className='inst-cover'>
						<div className='inst-five'>
							<img src={five} alt='school' className='inst-img' />
							<h6>5. Pay for your transfer.</h6>
							<p>Send your money with a bank transfer.</p>
						</div>
					</div>

					<div className='inst-cover'>
						<div className='inst-six'>
							<img src={six} alt='school' className='inst-img' />
							<h6>6. That’s it.</h6>
							<p>
								We’ll handle the rest. You can track your transfer in your account, and we'll tell your
								recipient it's coming.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Instruction
