import React from 'react'

const CardInfor = () => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <div className='bg-white rounded-full flex justify-center h-10 w-10 items-center text-2xl font-medium'>
                    <h1 >1</h1>
                </div>
                <div>
                    <p className='mb-10 font-medium text-white'>Lorem ipsum, dolor . Laboriosam voluptates consequatur voluptas odit corrupti dolorem totam, laudantium magni officiis accusantium debitis, ad omnis incidunt dolor, praesentium temporibus magnam vero.</p>
                    <div className='flex justify-between items-center'>
                        <button className=' bg-blue-600 text-white px-5 py-3 rounded-full font-medium text-2xl'>Satisfied</button>
                        <button className='h-13 w-13 text-white bg-blue-600 rounded-full font-bold text-2xl'><i className="ri-arrow-right-line"></i></button>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default CardInfor
