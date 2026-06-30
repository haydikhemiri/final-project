import { ADD_CAR_ERROR, ADD_CAR_LOADING, ADD_CAR_SUCCESS, CLEAR_ERRORS_CAR, CLEAR_SUCCESS_CAR, DELETE_CAR_ERROR, DELETE_CAR_LOADING, DELETE_CAR_SUCCESS, EDIT_CAR_ERROR, EDIT_CAR_LOADING, EDIT_CAR_SUCCESS, GET_CARS_ERROR, GET_CARS_LOADING, GET_CARS_SUCCESS, GET_CAR_BY_ID_ERROR, GET_CAR_BY_ID_LOADING, GET_CAR_BY_ID_SUCCESS } from "../ActionTypes/carActionTypes";



const initialState = {
    load: false,
    errors: null,
    success: null,
    cars: [],
    car: {}
}


const carReducer = (state=initialState, {type, payload}) => {
    switch (type) {
      case GET_CARS_LOADING:
        return { ...state, load: true, errors: null, success: null };

      case GET_CARS_SUCCESS:
        return {
          ...state,
          load: false,
          cars: payload.cars,
          errors: null,
        };

      case GET_CARS_ERROR:
        return { ...state, load: false, errors: payload.errors, success: null };

      case GET_CAR_BY_ID_LOADING:
        return { ...state, load: true, errors: null, success: null };

      case GET_CAR_BY_ID_SUCCESS:
        return {
          ...state,
          load: false,
          car: payload.car,
          errors: null,
        };

      case GET_CAR_BY_ID_ERROR:
        return { ...state, load: false, errors: payload.errors, success: null };

      case DELETE_CAR_LOADING:
        return { ...state, load: true, errors: null, success: null };

      case DELETE_CAR_SUCCESS:
        return {
          ...state,
          load: false,
          errors: null,
          success: payload.success,
        };

      case DELETE_CAR_ERROR:
        return { ...state, load: false, errors: payload.errors, success: null };

      case ADD_CAR_LOADING:
        return { ...state, load: true, errors: null, success: null };

      case ADD_CAR_SUCCESS:
        return {
          ...state,
          load: false,
          errors: null,
          success: payload.success,
        };

      case ADD_CAR_ERROR:
        return { ...state, load: false, errors: payload.errors, success: null };

      case EDIT_CAR_LOADING:
        return { ...state, load: true, errors: null, success: null };

      case EDIT_CAR_SUCCESS:
        return {
          ...state,
          load: false,
          errors: null,
          success: payload.success,
        };

      case EDIT_CAR_ERROR:
        return { ...state, load: false, errors: payload.errors, success: null };

      case CLEAR_SUCCESS_CAR:
        return { ...state, success: null };

      case CLEAR_ERRORS_CAR:
        return { ...state, errors: null };

      default:
        return state;
    }
}



export default carReducer