import React from 'react'

const Currency = (props) => {
	const { currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount, disabled } = props
	return (
		<React.Fragment>
			<input
				type='text'
				id='calc-inp'
				className='input'
				disabled={disabled}
				value={amount}
				onChange={onChangeAmount}
			/>
			<div className='select'>
				<select value={selectedCurrency} name='slct' id='slct' onChange={onChangeCurrency}>
					{currencyOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</React.Fragment>
	)
}

export default Currency
