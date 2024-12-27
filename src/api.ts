import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
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

export const getRoom = () =>
  instance.get(`rooms/1`).then((response) => response.data);
