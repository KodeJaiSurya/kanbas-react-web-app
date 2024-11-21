import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const enrollCourse = async (courseId: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/current/course/${courseId}`
  );
  return response.data;
};
export const unenrollCourse = async (courseId: any) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/current/course/${courseId}`
  );
  return response.data;
};
