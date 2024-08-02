import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Busqueda = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>VACACIONES DE LUJO PARA 2 PERSONAS</h2>
                    <p className='py-4 text-justify'>
                        ¡Bienvenido a la aventura de tus sueños! En Destinos, nos enorgullece presentarte nuestros exclusivos paquetes turísticos
                        a los destinos más paradisíacos del planeta. Imagina playas de arena blanca, aguas cristalinas y paisajes que parecen salidos de un sueño.
                        Desde las vibrantes islas del Caribe hasta los secretos mejor guardados del Pacífico Sur, tenemos el viaje perfecto para cada tipo de explorador.

                        Nuestros itinerarios están diseñados para ofrecerte una experiencia inolvidable, 
                        combinando lujo, confort y autenticidad. Con nosotros, cada momento se convierte en una oportunidad para relajarte, 
                        explorar y conectar con lo mejor de la naturaleza y la cultura local.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <RiCustomerService2Fill size={30} />
                        </button>
                        <div>
                            <h3 className='py-2'>LIDERES EN SERVICIO</h3>
                            <p className='py-1'>SOMOS UNA COMPAÑÍA CON MAS DE 20 AÑOS DE EXPERIENCIA</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <MdOutlineTravelExplore size={30} />
                        </button>
                        <div>
                            <h3 className='py-2'>LIDERES EN SERVICIO</h3>
                            <p className='py-1'>SOMOS UNA COMPAÑÍA CON MAS DE 20 AÑOS DE EXPERIENCIA</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='border text-center rounded-md'>
                    <p className='pt-2'>OBTEN UN 10% DE DESCUENTO</p>
                    <p className='py-4'>DURANTE LAS PROXIMAS 12 HORAS</p>
                    <p className='bg-gray-800 rounded-b-md text-gray-200 py-2'>AGENDA TU DESTINO</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destinos</label>
                        <select className='border rounded-md p-2'>
                            <option>Grande Antigua</option>
                            <option>Key West</option>
                            <option>Maldives</option>
                            <option>Cozumel</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label>Fecha de Partida</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Fecha de regreso</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <button className='w-full my-4'>Consulta disponibilidad</button>
                </form>
            </div>
        </div>
    );
};

export default Busqueda;