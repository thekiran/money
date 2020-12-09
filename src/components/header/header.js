import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

import './header.css'

import Currency from './Currency'
// import { Redirect } from 'react-router-dom'

const Header = () => {
	const BASE_URL = 'https://api.exchangeratesapi.io/latest'

	const [ currencyOptions, setCurrencyOptions ] = useState([])
	const [ fromCurrency, setFromCurrency ] = useState()
	const [ toCurrency, setToCurrency ] = useState()
	const [ exchangeRate, setExchangeRate ] = useState()
	const [ amount, setAmount ] = useState(1000)
	const [ amountInFromCurrency, setAmountInFromCurrency ] = useState(false)

	let toAmount, fromAmount
	if (amountInFromCurrency) {
		fromAmount = amount
		toAmount = amount * exchangeRate
	} else {
		toAmount = amount
		fromAmount = amount / exchangeRate
	}

	useEffect(() => {
		fetch(BASE_URL).then((res) => res.json()).then((data) => {
			const firstCurrency = Object.keys(data.rates)[26]
			setCurrencyOptions([ data.base, ...Object.keys(data.rates) ])
			setFromCurrency(data.base)
			setToCurrency(firstCurrency)
			setExchangeRate(data.rates[firstCurrency])
		})
		
		gsap.from(".head-title",{duration:'2',x: -300,y: -300,ease:"elastic"})
		gsap.from(".head-text",{duration:'1',opacity: 0.3,scale:0 ,x: -300,y: -300,ease:"back"})
		// gsap.from(".tab-text",{duration:'1',opacity: 0,scale:0 ,x: 0,y: 0,ease:"power1"}) 
		
		// gsap.to(".review-title",{x: 0,y: 0})
	}, [])

	useEffect(
		() => {
			if (fromCurrency != null && toCurrency != null) {
				fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
					.then((res) => res.json())
					.then((data) => setExchangeRate(data.rates[toCurrency]))
			}
		},
		[ fromCurrency, toCurrency ]
	)

	function handleFromAmountChange(e) {
		setAmount(e.target.value)
		setAmountInFromCurrency(true)
	}

	function handleToAmountChange(e) {
		setAmount(e.target.value)
		setAmountInFromCurrency(false)
	}

	return (
		<Fragment>
			<div className='head-container'>
				<div className='header-content'>
					<h3 className='head-title'>A cheaper, faster way to send money abroad.</h3>
					<p className='head-text'>
						Join over 8 million people and businesses who get a better deal when they send money with the
						real exchange rate.
					</p>

					<div className='head-anims'>
						{/* <h5>Is TransferWise safe?</h5>
						<p>Yes, here’s why</p> */}
					</div>
				</div>
				<div className='main-content'>
					<div className='calc'>
						<form id='calc-form'>
							<label className='calc-inp' htmlFor='calc-inp'>
								You send
							</label>
							<Currency
								currencyOptions={currencyOptions}
								selectedCurrency={toCurrency}
								onChangeCurrency={(e) => setToCurrency(e.target.value)}
								onChangeAmount={handleToAmountChange}
								amount={toAmount}
								disabled={false}
							/>
						</form>
						<span id='rate'> </span>
						<div className='res'>
							<form>
								<label className='calc-out' htmlFor='calc-out'>
									They receive
								</label>
							</form>

							<Currency
								currencyOptions={currencyOptions}
								selectedCurrency={fromCurrency}
								onChangeCurrency={(e) => setFromCurrency(e.target.value)}
								onChangeAmount={handleFromAmountChange}
								amount={Number(fromAmount).toFixed(2)}
								disabled={true}
							/>
						</div>
					</div>

					<button
						onClick={() => {
							window.alert(
								'This is not an actual business website and you cannot send real money. But, you can visit main website transferwise.com'
							)
						}}
						className='get-btn'>
						Get Started
					</button>
				</div>
			</div>
		</Fragment>
	)
}

export default Header
