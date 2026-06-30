import { ADD_CAR_ERROR, ADD_CAR_LOADING, ADD_CAR_SUCCESS, CLEAR_ERRORS_CAR, CLEAR_SUCCESS_CAR, DELETE_CAR_ERROR, DELETE_CAR_LOADING, DELETE_CAR_SUCCESS, EDIT_CAR_ERROR, EDIT_CAR_LOADING, EDIT_CAR_SUCCESS, GET_CARS_ERROR, GET_CARS_LOADING, GET_CARS_SUCCESS, GET_CAR_BY_ID_ERROR, GET_CAR_BY_ID_LOADING, GET_CAR_BY_ID_SUCCESS } from "../ActionTypes/carActionTypes"
import axios from "axios"

export const getAllCars = () => async (dispatch) => {
    dispatch({ type: GET_CARS_LOADING})
    try {
        const result = await axios.get("/api/cars/get_all_cars");
        dispatch({type: GET_CARS_SUCCESS, payload: result.data})
    } catch (error) {
        dispatch({ type: GET_CARS_ERROR, payload: error.response.data });
    }
}

export const getCarById = (id) => async (dispatch) => {
  dispatch({ type: GET_CAR_BY_ID_LOADING });
  try {
    const result = await axios.get(`/api/cars/get_car_by_id/${id}`);
    dispatch({ type: GET_CAR_BY_ID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CAR_BY_ID_ERROR, payload: error.response.data });
  }
};


export const deleteCarById = (id, navigate) => async (dispatch) => {
  dispatch({ type: DELETE_CAR_LOADING });
  try {
    const result = await axios.delete(`/api/cars/delete_car_by_id/${id}`);
    dispatch({ type: DELETE_CAR_SUCCESS, payload: result.data });
    navigate("/marketplace");
  } catch (error) {
    dispatch({ type: DELETE_CAR_ERROR, payload: error.response.data });
  }
};


export const addCar = (newCar) => async (dispatch) => {
  dispatch({ type: ADD_CAR_LOADING });
  try {
    const result = await axios.post("/api/cars/add_car", newCar);
    dispatch({ type: ADD_CAR_SUCCESS, payload: result.data });
    dispatch(getAllCars());
  } catch (error) {
    dispatch({ type: ADD_CAR_ERROR, payload: error.response.data });
  }
};

export const editCar = (id, newData) => async (dispatch) => {
  dispatch({ type: EDIT_CAR_LOADING });
  try {
    const result = await axios.put(`/api/cars/update_car_by_id/${id}`, newData);
    dispatch({ type: EDIT_CAR_SUCCESS, payload: result.data });
    dispatch(getCarById(id));
  } catch (error) {
    dispatch({ type: EDIT_CAR_ERROR, payload: error.response.data });
  }
};

export const clearSuccessCar = () => {
  return {
    type: CLEAR_SUCCESS_CAR,
  };
};

export const clearErrorsCar = () => {
  return {
    type: CLEAR_ERRORS_CAR,
  };
};


