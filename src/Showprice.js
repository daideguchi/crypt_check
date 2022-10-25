import React from 'react'
import "./Showprice.css"

function Showprice({exchange,urlimg}) {
  return (
      <div className="showprice-card">
          <img className="showprice__img" src={urlimg} alt="currency" />
          <div className="showprice__info">
              <div className="showprice__currency">{exchange}</div>
              <div className="showprice__price">100</div>
          </div>
    </div>
  )
}

export default Showprice