import axios from "axios"
import { UserDetail, UserLogin } from "../CommonTypes"
import { BASE_URL } from "../helpers/global-function-variables"
import { ServerResponse } from "../models/server-response.model"

// user Login
export const userLogin = async(userLogin: UserLogin) => {
  const res:ServerResponse<UserDetail> = (await (axios.post(`${BASE_URL}/api/admin/login`, userLogin))).data;
  if (res.response?.token) {
    localStorage.setItem("user", JSON.stringify(res.response))
  }
  return res.response;
}
