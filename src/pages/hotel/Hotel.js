import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'
import './Hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../Hooks/useFetch'
import { useLocation } from 'react-router-dom'


function Hotel() {

  const location = useLocation()
  const id = location.pathname.split("/")[2]
  console.log(id);

  const [sliderNumber, setSliderNumber] = useState(0)
  const [openSlider, setOpenSlider] = useState(false)

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)

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
      {loading ? ("Loading") : (<>
        <div className="hotelContainer">
          {openSlider && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="closeIcon" onClick={() => setOpenSlider(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowIcon" onClick={() => handleMove("l")} />
            <div className="sliderWrapper">
              <img src={data.photos[sliderNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrowIcon" onClick={() => handleMove("r")} />
          </div>}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">Excellent location - {data.distance}m from center</span>
            <span className="hotelPriceHighlight">Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi</span>
            <div className="hotelImages">
              {data.photos?.map((photo, idx) =>
              (
                <div className="hotelImgWrapper" key={idx}>
                  <img src={photo} className='hotelImg' onClick={() => { handleOpen(idx) }} alt="" />
                </div>
              )
              )}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">
                  {data.description}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>{data.title}</span>
                <h2>
                  <b>${data.cheapestPrice}</b> (per night)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </>)}
    </div>
  )
}

export default Hotel