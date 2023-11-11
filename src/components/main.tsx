import React, { useState } from 'react'
import menu from './data'

function Main({ filterItems, donnes}) {

    return (
        <div className="main p-6" style={{display:'grid', gap:'20px', gridTemplateColumns:'repeat(2, 1fr)'}}>
            {
                donnes.map((item) => (
                    <div className='flex gap-5' key={item.id}>
                        <div className="img-container">
                            <img className='w-[500px] h-[200px] rounded-xl' style={{border:'5px solid orange'}} src={item.img} alt="" />
                        </div>
                        <div className="info flex-col gap-6">
                            <div className="titles flex items-center justify-between py-2" style={{borderBottom:'2px solid orange'}}>
                                <h1 className='font-bold tracking-widest text-lg'>{item.title}</h1>
                                <p className='text-orange-500 font-bold'>{item.price}$</p>
                            </div>
                            <div className="info-containe">
                                <p className='tracking-widest font-semibold'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Main