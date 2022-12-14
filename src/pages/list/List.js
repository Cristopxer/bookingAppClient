import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import useFetch from '../../Hooks/useFetch'
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/SearchItem/SearchItem'
import './List.css'
import { SearchContext } from '../../Context/SearchContext'

function List() {
  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const { data, loading, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`)
  const { dispatch } = useContext(SearchContext)

  const handleClick = () => {
    reFetch()
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
  }


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => { setOpenDate(!openDate) }}>{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && <DateRange
                onChange={item => setDates([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                minDate={new Date()}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" onChange={(e) => setMin(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" onChange={(e) => setMax(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} onChange={e => setOptions({ room: e.target.value })} />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? ("Loading...") : (
              <>
                {destination.length === 0 ? (<h1>Let's book the world</h1>) : data.map((item) => (
                  <SearchItem key={item._id} item={item} />
                ))
                }
              </>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List