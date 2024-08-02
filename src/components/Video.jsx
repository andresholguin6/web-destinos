import React from 'react'
import video from '../assets/playa.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
function Video() {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={video} autoPlay loop muted />
            {/* div para hacer la superposición y poner encima el formulario */}
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>Viajes de primera clase</h1>
                <h3 className='py-4'>Las mejores ubicaciones del mundo</h3>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border px-1 pl-3 py-1
                rounded-md text-black bg-gray-100/90' >
                    <div>
                        <input
                            className='bg-transparent w-[240px] sm:w-[400px] font-[Poppins] focus:outline-none'
                            type="text"
                            placeholder='Busca un destino' />
                    </div>
                    <div>
                        <button>
                            <AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} />
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Video