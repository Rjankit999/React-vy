import React from 'react'
import CardInfor from './CardInfor'
const RightCard = () => {
    return (
        <div className='h-full w-100 overflow-hidden relative bg-amber-300 rounded-4xl'>
            <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661590863910-69abf33b8f3f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />

            <CardInfor/>

        </div>
    )
}

export default RightCard
