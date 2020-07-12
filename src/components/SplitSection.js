import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section key={id} className={`py-20 text-justify ${reverseOrder && `bg-gray-100`}`}>
    <div className={`container mx-auto px-16 items-center flex flex-wrap`}>
      <div className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ${reverseOrder && `lg:pl-20`}`}>{primarySlot}</div>
      <div
        className={`w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
