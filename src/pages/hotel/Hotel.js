import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'
import './Hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Hotel() {
  const [sliderNumber, setSliderNumber] = useState(0)
  const [openSlider, setOpenSlider] = useState(false)
  const photos = [
    { src: 'https://imgs.search.brave.com/kzn3jtWOeyqpysDZjhild5iv7bNDLiq7hxO0wc2JvIU/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y2M0YVNuRjlKUDlI/ZjBfQ3QxLUFRSGFE/dCZwaWQ9QXBp' },
    { src: 'https://www.ezdanhotels.qa/wp-content/uploads/2018/07/Tower-room-web.jpg' },
    { src: 'htps://imgs.search.brave.com/MzHc7CBf8lFgK7Lx55gg3dDJR4gw3yuz1st7tzKbR-I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Y29yaW50aGlhLmNv/bS9tZWRpYS8yMTU0/L2NvcmludGhpYS1r/YXJ0b3VtLWV4ZWN1/dGl2ZS1yb29tLmpw/Zw' },
    { src: 'https://imgs.search.brave.com/2D61a0fGzHVjtbHnCoF1eCKjsGxwWlHBRmLKEOXnZrs/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5u/b2JsZXRvbmhvdGVs/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8xMS9waG90/by0xMy5qcGc' },
    { src: 'https://imgs.search.brave.com/fSSKniaO7VunWHcil0tQrNpvLKwv3AxcdkdV8ZOrd10/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9uZG9uaG91c2Vo/b3RlbHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzEx/LzguLTMtc3RhbmRh/cmQtdHdpbi0zLmpw/Zw' },
    { src: 'https://imgs.search.brave.com/to7SDwHAHqaClCK1IQoyDLSKt0H4K3PfXOI6UN4jVyg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kMWJ2/cG9hZ3g4aHFiZy5j/bG91ZGZyb250Lm5l/dC9vcmlnaW5hbHMv/bGFyZ2UtdHdpbi1y/b29tLTEyODcxYTJj/NDRjNmJlMWZkNDUw/NGQ4NDQ3YmYxYzA5/LmpwZw' }
  ]
  const handleOpen = (idx) => {
    setSliderNumber(idx)
    setOpenSlider(true)
  }

  const handleMove = (dir) => {
    let newSlideNumber;

    if (dir === 'l') {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1
    }
    setSliderNumber(newSlideNumber)
  }
  return (
    <div className="">
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        {openSlider && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="closeIcon" onClick={() => setOpenSlider(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowIcon" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrowIcon" onClick={() => handleMove("r")} />
        </div>}
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
            {photos.map((photo, idx) =>
            (
              <div className="hotelImgWrapper" key={idx}>
                <img src={photo.src} className='hotelImg' onClick={() => { handleOpen(idx) }} />
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