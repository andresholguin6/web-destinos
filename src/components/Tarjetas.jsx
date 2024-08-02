import React from 'react';

const Tarjetas = (props) => {
  return (
    <div className='relative rounded-md'>
      <img className='w-full h-full object-cover rounded-md' src={props.bg} alt='/' />
      <div className='bg-gray-900/30 absolute rounded-md top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Tarjetas;