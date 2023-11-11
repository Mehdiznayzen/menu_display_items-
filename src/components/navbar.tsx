import React from 'react'

function Navbar({ filterItems }) {
    return (
        <div className="navbar">
            <ul className="navbar-nav flex items-center gap-7">
                <li><a href="" className='font-semibold text-orange-500 tracking-widest text-lg' onClick={(e) => {
                    e.preventDefault()
                    filterItems('all')
                }}>All</a></li>
                <li><a href="" className='font-semibold text-orange-500 tracking-widest text-lg' onClick={(e) => {
                    e.preventDefault()
                    filterItems('breakfast')
                }}>Breakfast</a></li>
                <li><a href="" className='font-semibold text-orange-500 tracking-widest text-lg' onClick={(e) => {
                    e.preventDefault()
                    filterItems('lunch')
                }}>Lunch</a></li>
                <li><a href="" className='font-semibold text-orange-500 tracking-widest text-lg' onClick={(e) => {
                    e.preventDefault()
                    filterItems('shakes')
                }}>Shakes</a></li>
            </ul>
        </div>
    )
}

export default Navbar