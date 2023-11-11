import React from 'react'

function Title() {
    return (
        <div className="title-container grid items-center justify-center gap-3">
            <div className="title">
                <h1 className='text-4xl font-bold tracking-widest'>Our Menu</h1>
            </div>
            <div className="underline w-[200px] h-[5px] rounded-2xl bg-orange-400"></div>
        </div>
    )
}

export default Title