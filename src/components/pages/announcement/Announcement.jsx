import React from 'react'
import './Announcement.css'
const Announcement = () => {
    return (
        <div>
            <div className="border-bottom d-flex bg-dark">
                <div className='announcements bg-danger px-3 py-1 text-white'><h4>Announcement</h4></div>
                <marquee behavior="scroll" direction="left" className='py-2 h6 text-white'>School closed for 15 days for the Summer Vacation. </marquee>
            </div>
        </div>
    )
}

export default Announcement
