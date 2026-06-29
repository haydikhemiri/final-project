const Car = require("../models/car")



// test car controller
exports.test = async (req, res) => {
    try {
        return res.status(200).send("Car test controller is working")
    } catch (error) {
        return res.status(500).send("Error in test car controller: " + error);
    }
}

// add car controller
exports.addCar = async (req, res) => {
    try {
        const newCar = new Car(req.body)
        await newCar.save()
        return res
          .status(201)
          .send({ success: [{ msg: "Car added successfully" }], car: newCar });
    } catch (error) {
        return res
          .status(500)
          .send({ errors: [{ msg: "Server error adding car" }], error: error });
    }
}

// get all cars controller
exports.getAllCars = async (req, res) => {
    try {
        const foundCars = await Car.find()
        if (foundCars.length === 0) {
            return res.status(404).send({errors: [{msg: "No cars found"}]})
        }
        return res.status(200).send({
          success: [{ msg: "Cars found successfully" }],
          count: foundCars.length,
          cars: foundCars,
        });
    } catch (error) {
                return res
                  .status(500)
                  .send({
                    errors: [{ msg: "Server error getting all cars" }],
                    error: error,
                  });
    }
}

// get car by id controller
exports.getCarById = async (req, res) => {
    try {
        const {id} = req.params
        const foundCar = await Car.findById(id)
        if (!foundCar) {
            return res.status(404).send({errors: [{msg: "Car not found"}]})
        }
        return res.status(200).send({success: [{msg: "Car found successfully"}], car: foundCar})
    } catch (error) {
                return res
                  .status(500)
                  .send({
                    errors: [{ msg: "Server error getting car by id" }],
                    error: error,
                  });
    }
}

// delete car by id controller
exports.deleteCarById = async (req, res) => {
    try {
        const {id} = req.params
        const deletedCar = await Car.findByIdAndDelete(id)
        if (!deletedCar) {
          return res.status(404).send({ errors: [{ msg: "Car not found to delete" }] });
        }
        return res
          .status(200)
          .send({
            success: [{ msg: "Car deleted successfully" }],
            car: deletedCar,
          });
    } catch (error) {
                return res
                  .status(500)
                  .send({ errors: [{ msg: "Server error deleting car by id" }], error: error });
    }
}


// update car by id controller
exports.updateCarById = async (req, res) => {
    try {
        const {id} = req.params;
        const newData = req.body;
        const updatedCar = await Car.findByIdAndUpdate(id, newData, {
          returnDocument: "after",
        });
        if (!updatedCar) {
          return res.status(404).send({ errors: [{ msg: "Car not found to update" }] });
        }
        return res.status(200).send({
          success: [{ msg: "Car updated successfully" }],
          car: updatedCar,
        });
    } catch (error) {
                return res
                  .status(500)
                  .send({ errors: [{ msg: "Server error updating car by id" }], error: error });
    }
}
