import React from 'react'
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
  return (
    <div className="mx-auto max-w-80 border rounded-md border-gray-300 shadow bg-white">
      <Link to={`/carDescription/${car._id}`} className="group">
        <figure className="overflow-hidden rounded-md object-cover ">
          <img
            className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
            src={car.image}
            alt={car.make}
          />
        </figure>
        <div className="mt-3 space-y-0.5 p-4">
          <p className="font-semibold text-slate-900 text-xl">{car.make}</p>
          <p className=" text-slate-400 text-md">{car.model}</p>
        </div>
      </Link>
    </div>
  );
}

export default CarCard