import React from 'react'
import './SearchItem.css'

function SearchItem() {
    return (
        <div className="searchItem">
            <img src="https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment with air conditioning</span>
                <span className="siFeatures">Entire studio - 1 bathroon - 21m2 - 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">$123.00</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem