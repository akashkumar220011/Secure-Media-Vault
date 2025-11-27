import API from "../../api/api";

export const signupUser = async (data:any) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

export const loginUser = async (data: any) => {
  const res = await API.post("/auth/login", data);
  localStorage.setItem("token", res.data.token);  // TOKEN STORE
  return res.data;
};

