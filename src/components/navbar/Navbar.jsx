import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

// import './navbarStyles.css'

function Navbar() {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    };

    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
            <div>
                <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>DESTINOS</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinos</li>
                <li>Viajes</li>
                <li>Reservas</li>
                <li>Vistas</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className= 'mr-2'size={20} />
                <BsPerson size={20} />
            </div>

            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black'size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul className=''>
                    <h1>DESTINOS</h1>
                    <li className='border-b-2'>Home</li>
                    <li className='border-b-2'>Destinos</li>
                    <li className='border-b-2'>Viajes</li>
                    <li className='border-b-2'>Reservas</li>
                    <li className='border-b-2'>Vistas</li>
                </ul>
                <div className='flex flex-col'>
                    <button className='my-6'>Buscar</button>
                    <button>Cuenta</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaInstagram className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar