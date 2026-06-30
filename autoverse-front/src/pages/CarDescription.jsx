import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCarById } from "../JS/Actions/carActions";
import {Button} from "antd";
import Loading from "../components/UI/Loading";
import EditCar from "../components/UI/EditCar";
import DeleteCar from "../components/UI/DeleteCar";

export default function CarDescription() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  const load = useSelector(state=> state.carReducer.load)
  const car = useSelector((state) => state.carReducer.car);

  if (!car) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const fmt = (p) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(p);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Button onClick={() => navigate(-1)}>Back</Button>
      {/* Loading */}
      {load && <Loading />}
      {/* Image */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title & Price */}
      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {car.year} {car.make} {car.model}
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 capitalize">
            {car.color}
          </p>
        </div>
        <p className="text-3xl font-bold text-indigo-600">{fmt(car.price)}</p>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
        {car.description}
      </p>

      {/* Specs */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Autonomy", value: `${car.autonomy} km` },
          { label: "Charging Time", value: `${car.chargingTime} hrs` },
          { label: "Year", value: car.year },
          { label: "Color", value: car.color },
        ].map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl border border-gray-200 dark:border-gray-700 p-4"
          >
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">
              {spec.label}
            </p>
            <p className="text-base font-semibold text-gray-900 dark:text-white capitalize">
              {spec.value}
            </p>
          </div>
        ))}

        {/* Edit & Delete car */}
        <div className="flex justify-center items-center  h-16 gap-4 my-2">
          <EditCar id={car._id} />
          <DeleteCar id={car._id} />
        </div>
      </div>
    </div>
  );
}
