import React from 'react'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <div className='buy'>
      <h2>Buy/Sell Instantly</h2>
      <Link className='btn btn-outline-danger px-5' to='Buy'>
        Buy
      </Link>
      <Link className='btn btn-outline-danger px-5' to='Sell'>
        Sell
      </Link>
      <div className='sells'>
        <label htmlFor=''>coins to buy</label>
        <div>
          <select name='' id=''>
            <option value=''>coins Naira</option>
            <option value=''>coins pounds</option>
            <option value=''>coins cedis</option>
            <option value=''>coins cefas</option>
          </select>
        </div>
        <label htmlFor=''>coins to buy</label>
        <div>
          <select name='' id=''>
            <option value=''>coins Zambia</option>
            <option value=''>coins Egypt</option>
            <option value=''>coins Malawi</option>
            <option value=''>coins Dubai</option>
          </select>
        </div>
      </div>
      <button className='px-4 btn-warning text-white'>Continue</button>
    </div>
  )
}

export default Sell
