import React from 'react'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <div className='buy'>
      <h2>Buy/Sell Instantly</h2>
      <Link className='btn btn-outline-danger px-5' to='Buy'>Buy</Link>
      <Link className='btn btn-outline-danger px-5' to='Sell'>
        Sell
      </Link>
      <div className='buys'>
        <label htmlFor=''>coins to buy</label>
        <div>
          <select name='' id=''>
            <option value=''>coins Btc</option>
            <option value=''>coins eth</option>
            <option value=''>coins xsc</option>
            <option value=''>coins Xrp</option>
          </select>
        </div>
        <label htmlFor=''>coins to buyers</label>
        <div>
          <select name='' id=''>
            <option value=''>coins Btc</option>
            <option value=''>coins eth</option>
            <option value=''>coins xsc</option>
            <option value=''>coins Xrp</option>
          </select>
        </div>
      </div>
      <button className='px-4 btn-warning text-white'>Continue</button>
    </div>
  )
}

export default Buy
