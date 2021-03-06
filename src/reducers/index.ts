import { DataArray, User } from "../types";

import {
  FETCH_USER,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGOUT_USER,
  FETCH_DELIVERY_DATA,
} from "../actions";
import { supabase } from "../supabaseClient";

const initialState = {
  user: supabase.auth.user() || {},
  isFetching: false,
  error: "",
  isLoggedIn: false,
  deliveryData: {
    id: 0,
    delivery_date: "",
    total_pay: 0,
    total_orders: 0,
    total_miles: 0,
    total_mpg: 0,
    total_time: 0,
    gas_price: 0,
    gas_cost: 0,
    miles_per_order: 0,
    cost_per_order: 0,
    cost_to_operate: 0,
    net_pay: 0,
    net_pay_per_hour: 0,
  },
};

interface FetchUserAction {
  type: "FETCH_USER";
}
interface FetchSuccessAction {
  type: "FETCH_SUCCESS";
  payload: User;
}
interface FetchErrorAction {
  type: "FETCH_ERROR";
  payload: string;
}
interface LogoutUserAction {
  type: "LOGOUT_USER";
  payload: boolean;
}
interface FetchDeliveryDataAction {
  type: "FETCH_DELIVERY_DATA";
  payload: DataArray;
}

type Action =
  | FetchUserAction
  | FetchSuccessAction
  | FetchErrorAction
  | LogoutUserAction
  | FetchDeliveryDataAction;

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        user: action.payload,
        isLoggedIn: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case FETCH_DELIVERY_DATA:
      return {
        ...state,
        deliveyData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
