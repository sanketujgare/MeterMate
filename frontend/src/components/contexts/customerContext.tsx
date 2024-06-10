import React, { createContext, useState, useContext, useEffect } from "react";

import { Customer } from "../CustomersScreen/CustomersScreen.types";
import { getallCustomersAPI } from "../../services/Customer.services";
// Create a context for the customers
interface customercontexttype {
  customers: Customer[];
  loading: boolean;
}
const CustomerContext = createContext<customercontexttype | null>(null);

export const CustomerProvider = ({ children }: any) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate fetching data from the backend
  //   setTimeout(() => {
  //     const fetchedCustomers = [

  //       // Add more customer objects here
  //     ];
  //     setCustomers(fetchedCustomers);
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const getcustomersData = async () => {
    const response = await getallCustomersAPI();
    console.log(response);

    setCustomers(response.data);
  };
  useEffect(() => {
    getcustomersData();
  }, []);

  return (
    <CustomerContext.Provider value={{ customers, loading }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (context === null) {
    throw new Error("useCustomers must be used within a CustomerProvider");
  }
  return context;
};
