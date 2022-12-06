import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { SearchContext } from '../../Context/SearchContext'
import useFetch from '../../Hooks/useFetch'
import "./Reservation.css"

function Reservation({ setOpen, hotelId }) {

    const [selectedRooms, setSelectedRooms] = useState([])

    const { data } = useFetch(`/hotels/room/${hotelId}`)
    const { dates } = useContext(SearchContext)

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value))

    }

    const getDatesFromRange = (date1, date2) => {
        const start = new Date(date1.getTime())
        const end = new Date(date2.getTime())
        const date = start

        let list = []

        while (date <= end) {
            list.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }

        return list
    }

    const allDates = getDatesFromRange(dates[0]?.startDate, dates[0]?.endDate)
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => allDates.includes(new Date(date).getTime()))
        return !isFound
    }

    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map(roomId => {
                const res = axios.put(`/rooms/availability/${roomId}`, { dates: allDates })
                return res.data
            }))
        } catch (err) {

        }

    }
    return (
        <div className="reservation">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} className="rClose" />
                <span>Select your rooms:</span>
                {data?.map((item, idx) =>
                (<div className="rItem" key={idx}>
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                    <div className="rSelectRooms">
                        {item.roomNumber?.map((room, idx) => (
                            <div className="room" key={idx}>
                                <label>{room.number}</label>
                                <input type="checkbox" value={room._id} onChange={handleSelect} disabled={!isAvailable(room)} />
                            </div>
                        ))}
                    </div>
                </div>)
                )}
                <button className="rButton" onClick={handleClick}>Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reservation