import AxiosInstance from "./Axios.Instance";

export const getallCustomersAPI = async () => {
  try {
    const response = await AxiosInstance.get("/user/getall-customers/");
    // localStorage.setItem("token-info", response);
    // console.log(response);
    return response;
  } catch (error: any) {
    return error.message;
  }
};

export const deleteCustomerAPI = async (data) => {
  try {
    const response = await AxiosInstance.post("/user/deletecustomers", data);
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const UpdateCustomerAPI = async (data) => {
  try {
    const response = await AxiosInstance.post("/user/updatecustomer", data);
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
};
