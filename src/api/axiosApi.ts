import axios from "axios";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_DATA,
  headers: {
    "Content-Type": "application/json",
  },
});

export const SignUp = async (newMember: {
  email: string;
  password: string;
  nickName: string;
}) => {
  const response = await axiosApi.post("/register", newMember);

  return response.data;
};

export const Login = async (user: { email: string; password: string }) => {
  const response = await axiosApi.post("/login", user);

  console.log("로그인 토큰", response.data);

  return response.data;
};
