
const { test, addCar, getAllCars, getCarById, deleteCarById, updateCarById } = require('../controllers/carControllers');

// require express
const express = require('express');

// get router from express
const Router = express.Router();

// route test
Router.get("/test", test)

// add car route
Router.post("/add_car", addCar)

// get all cars route
Router.get("/get_all_cars", getAllCars)

// get car by id route
Router.get("/get_car_by_id/:id", getCarById)

// delete car by id route
Router.delete("/delete_car_by_id/:id", deleteCarById)

// update car by id route
Router.put("/update_car_by_id/:id", updateCarById)

// export Router
module.exports = Router;