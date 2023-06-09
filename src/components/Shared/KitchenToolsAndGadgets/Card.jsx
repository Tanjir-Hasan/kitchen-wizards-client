import React from 'react';

const Card = ({ item }) => {

    const { name, description, image } = item;

    return (
        <div className='lg:flex justify-between items-center mb-8 border-2 border-[#0F1D22] rounded-lg shadow-xl p-4'>
            <img src={image} alt="" className='lg:w-96 -rotate-12 rounded-e-xl hover:scale-110 duration-700' />
            <div className='lg:w-1/2'>
                <h2 className='text-xl text-[#193844] font-semibold lg:border-b-4 border-[#0F1D22] py-5'>{name}</h2>
                <p className='font-thin'>{description}</p>
            </div>
        </div>
    );
};

export default Card;