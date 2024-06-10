import AxiosInstance from "./Axios.Instance";

export const loginRequst = async (username: string, password: string) => {
  try {
    const data = { username, password };
    const response = await AxiosInstance.post("/auth/login", data);
    // localStorage.setItem("token-info", "hello");
    // localStorage.setItem("user", "admin");
    // console.log(response);
    // return response;
    return 'admin';
  } catch (error: any) {
    return error.message;
  }
};

export const logoutRequst = (username: string, password: string) => {
  const data = { username, password };
  const response = AxiosInstance.delete("api/logout", data);

  // localStorage.removeItem("token-info");

  return response;
};
