import React from 'react'
import './FeaturedProperties.css'

function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/30565641.jpg?k=5aa6e2c62d9f84253c10d3c625617a70d8a1e93579091081e1229850934bc556" alt="" className="fpImg" />
        <span className="fpName">Villa Rock</span>
        <span className="fpCity">Barcelona</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/60345914.jpg?k=847c9404a7398f20d1c41febf7c96ab0f8ad5ad74062faae44a3efa73e709d62" alt="" className="fpImg" />
        <span className="fpName">Villa Wellnes</span>
        <span className="fpCity">Budapest</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6" alt="" className="fpImg" />
        <span className="fpName">The Apartments by the Sloane Club</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Wonderfull</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/48243386.jpg?k=9891532fb6d24d301b65659650e79812c426f46de905fba30bb8a8c5fea52d85" alt="" className="fpImg" />
        <span className="fpName">LivinParis - Luxury 3 Bedrooms Paris</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.0</button>
          <span>Very Good</span>
        </div>
      </div>
    </div >
  )
}

export default FeaturedProperties