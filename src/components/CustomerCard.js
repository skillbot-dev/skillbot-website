import React from 'react';
import Card from './Card';

const CustomerCard = ({ testimonial }) => (
  <Card className="mb-8">
    <p className="mt-6">{testimonial.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <div>
        <p>{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.designation}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
