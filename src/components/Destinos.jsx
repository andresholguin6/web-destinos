import React from 'react'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
function Destinos() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Resorts Exclusivos</h1>
        <p className='p-4'>En las mejores playas del caribe</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='rounded-md w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={borabora} alt="/" />
            <img className='rounded-md w-full h-full object-cover' src={borabora2} alt="/" />
            <img className='rounded-md w-full h-full object-cover' src={keywest} alt="/" />
            <img className='rounded-md w-full h-full object-cover' src={maldives} alt="/" />
            <img className='rounded-md w-full h-full object-cover' src={maldives2} alt="/" />
        </div>
    </div>
  )
}

export default Destinos