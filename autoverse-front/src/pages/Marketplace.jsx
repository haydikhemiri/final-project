import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../JS/Actions/carActions'
import CarCard from '../components/UI/CarCard'
import Loading from '../components/UI/Loading'
import AddCar from '../components/UI/AddCar'

const Marketplace = () => {
  const dispatch = useDispatch()
  const load = useSelector((state) => state.carReducer.load);
  const cars = useSelector(state => state.carReducer.cars)

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl font-semibold my-10">
  <span className="new-season">New Season </span>
  <span className="products">Products</span>

  <style>{`
    .new-season {
      color: #1f2937; /* dark gray */
      font-style: italic;
      letter-spacing: 1px;
    }

    .products {
      color: #374151; /* a bit lighter dark */

      font-style: italic;
      letter-spacing: 1px;

      position: relative;
      display: inline-block;

      animation: softGlow 2.5s ease-in-out infinite;
    }

    /* glow خفيف موش ألوان بزاف */
    @keyframes softGlow {
      0%, 100% {
        text-shadow: 0 0 0px #6b7280;
        opacity: 0.85;
      }
      50% {
        text-shadow: 0 0 8px #9ca3af;
        opacity: 1;
      }
    }
  `}</style>
</h1>
      <p className="text-center text-xl text-slate-500">
        Discover the new and trending products added to the collection.
      </p>
      <div className=" md:w-10/12 mx-auto">
        <AddCar />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 my-8 bg-white md:w-10/12 mx-auto p-5 border rounded border-gray-300">
        {/* Loading */}
        {load ? (
          <Loading />
        ) : (
          cars.map((car) => <CarCard key={car._id} car={car} />)
        )}
      </div>
    </div>
  );
}

export default Marketplace