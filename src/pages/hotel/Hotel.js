import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'
import './Hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Hotel() {
  const photos = [
    { src: 'https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp' },
    { src: 'https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp' },
    { src: 'https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp' },
    { src: 'https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp' },
    { src: 'https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp' },
    { src: 'https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp' }
  ]
  return (
    <div className="">
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hoteTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $144 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo) =>
            (
              <div className="hotelImgWrapper">
                <img src={photo.src} className='hotelImg' />
              </div>
            )
            )}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptas corrupti minus tempora eligendi! Placeat, dicta error amet vitae explicabo numquam nostrum aliquid dolorem ipsa distinctio quia ipsam temporibus? Modi?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolorum error reprehenderit.</span>
              <h2>
                <b>$123</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel