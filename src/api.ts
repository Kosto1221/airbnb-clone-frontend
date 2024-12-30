import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  withCredentials: true,
});

// const axiosInstance = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/v1/",
// });

// const BASE_URL = "http://127.0.0.1:8000/api/v1";

// export async function getRooms() {
//   const response = await fetch(`${BASE_URL}/rooms/`);
//   const json = await response.json();
//   return json;
// }

// export async function getRooms() {
//   const response = await axios.get(`${BASE_URL}/rooms/`);
//   return response.data;
// }

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

// export async function getRooms() {
//   const response = await axiosInstance.get("room/");
//   return response.data;
// }

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance
    .get(`rooms/${roomPk}/reviews`)
    .then((response) => response.data);
};

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);
