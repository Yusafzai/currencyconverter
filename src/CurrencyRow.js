import React from 'react'

function CurrencyRow(props) {
    const {
      currencyOptions,
      selectedCurrency,
      onChangeCurrency,
      onChangeAmount,
      amount
    } = props
    return (
        <div>
      <input type="number" className="input focus:outline-none focus:ring focus:border-blue-300" value={amount} onChange={onChangeAmount} />
      <select className="appearance-none cursor-pointer w-20 bg-gray-700 text-gray-300" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option className="" key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
    )
}

export default CurrencyRow
