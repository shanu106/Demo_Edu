import React from 'react';

const Event = ({ title, date, location, image }) => {
  return (
    <div className=' h-44 bg-[#495057] w-44 rounded-3xl flex flex-col items-center justify-center'>
      <img src={image} alt={title} className="w-full h-full rounded-lg object-cover" />
      {/* <h4 className='text-[#e9ecef] font-serif text-center'>{title}</h4>
      <p className='text-[#ced4da] text-sm'>{date}</p>
      <p className='text-[#adb5bd] text-xs'>{location}</p> */}
    </div>
  );
};

export default Event;
