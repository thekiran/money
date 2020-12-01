import React from 'react'
import Chart from './CustomChart'

import './showcase.css'
const Showcase = () => {
	// const [ rates, setRates ] = useState({})
	// const [ array, setArray ] = useState([])

	// let date = new Date("25 Mar 2015")
	let d = new Date().toJSON().slice(0, 10)
	let date = d
	var day2 = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24).toJSON().slice(0, 10)
	var day3 = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * 2).toJSON().slice(0, 10)
	var day4 = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * 3).toJSON().slice(0, 10)
	var day5 = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * 4).toJSON().slice(0, 10)
	var day6 = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * 5).toJSON().slice(0, 10)
	// console.log(date)
	// console.log(day2)
	// console.log(day3)
	// console.log(day4)
	// console.log(day5)
	// console.log(day6)

	// console.log(array)
	// const {  } =
	// console.log(`{${rates}.${date}}`)

	// rate.map((rat) => console.log(rat))
	// console.log(rates)

	// console.log(date)
	// console.log(rate)

	const data = {
		chartData: {
			labels: [   day6,day5 ,day4,day3, day2,date ],
			datasets: [
				{
					// label: 'Population',
					data: [ 0.848536, 0.847536, 0.842525, 0.845536, 0.843953, 0.845737, 0.834237, 0.843099, 0.849401 ],
					fill: true,
					lineTension: 0.4,
					backgroundColor: 'rgba(183, 161, 150,0.1)',
					borderColor: 'rgba(255,255,255,1)',
					borderCapStyle: '',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(75,192,192,1)',
					pointBackgroundColor: '#000',
					pointBorderWidth: 10,
					pointHoverRadius: 10,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 10,
					pointRadius: 0,
					pointHitRadius: 100,
					visible: false
					// data: [65, 59, 80, 81, 56, 55, 40],
				}
			],
			options: {
				scales: {
					xAxes: [
						{
							display: false
						}
					],
					yAxes: [
						{
							display: false
						}
					]
				}
			}
		}
	}
	// useEffect(() => {
	// 	const url = 'https://api.exchangeratesapi.io/history?start_at=2020-09-01&end_at=2020-09-10&base=USD'
	// 	fetch(`${url}&symbols=EUR`).then((res) => res.json()).then((data) => setRates(data.rates))
	// }, [])

	// useEffect(
	// 	() => {
	// 		const rate = Object.entries(rates)
	// 		// const first = rate[0]
	// 		// console.log(first[1].EUR)
	// 		const dataArray = rate.map((r) => {
	// 			return Number(r[1].EUR)
	// 		})
	// 		// console.log(dataArray)
	// 		setArray(dataArray)
	// 	},
	// 	[ rates ]
	// )
	return (
		<div>
		<div className='showcase-container'>
			<div className='showcase-content left'>
				<div className='show-content'>
					<h6 className='show-title'>We use the real exchange rate.</h6>
					<div className='show-stats'>
						<span>As of 1 min ago, 1 USD → 0.85 EUR</span>
						<span>
							Mid market rate ?
							<span className='circle'>{/* ?<i class='fas fa-question'></i> */}</span>
						</span>
					</div>
				</div>
				<div className="show-cont">
				<div className='show-box'>
					<Chart chartData={data.chartData} location='Massachusetts' legendPosition='bottom' />
				</div> 
				</div>
				
				<div className='btn-track'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://transferwise.com/tools/exchange-rate-alerts/'>
						Track this change
					</a> 
				</div>
			</div>
			
			<div className='showcase-content side'>
			<div className='show-content'>
					<h6 className='show-title'>We use the real exchange rate.</h6>
					<div className='show-stats'>
						<span>As of 1 min ago, 1 USD → 0.85 EUR</span>
						<span>
							Mid market rate ?
							<span className='circle'>{/* ?<i class='fas fa-question'></i> */}</span>
						</span>
					</div>
				</div>
				<div className="show-cont">
				<div className='show-box'>
					<Chart chartData={data.chartData} location='Massachusetts' legendPosition='bottom' chart={true} />
				</div> 
				</div>
			</div>
			
			</div><div className='text-container'>
				<div className='show-text'>
					<h6>No hidden fees.</h6>
					<p>
						We’re on a mission to bring transparency to finance. We charge as little as possible, and we
						always show you upfront. No hidden fees. No bad exchange rates. No surprises.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Showcase
