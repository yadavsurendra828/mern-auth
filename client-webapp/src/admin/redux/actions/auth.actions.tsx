// import { error } from '../actions';
import { userLogin } from "../../services"
import { UserLogin } from "../../CommonTypes"
import { Dispatch } from "redux"
import { LOGIN_FAIL, LOGIN_SUCCESS, SET_MESSAGE } from "./types"
import { history } from "../../helpers";

export const login = (userCredencial: UserLogin) => async(dispatch: Dispatch<any>) => {
  return userLogin(userCredencial ).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      history.push("/#/admin/dashboard")
      window.location.reload();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
