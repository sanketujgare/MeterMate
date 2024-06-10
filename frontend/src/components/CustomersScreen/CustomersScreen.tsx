import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./CustomersScreen.module.scss";
import customers, { CustomersScreenProps } from "./CustomersScreen.types.ts";

import { useEffect, useState } from "react";
import {
  CustomerProvider,
  useCustomers,
} from "../contexts/customerContext.tsx";
import { getallCustomersAPI } from "../../services/Customer.services.ts";

const CustomersScreen = ({}: CustomersScreenProps) => {
  const [customersData, setcustomersData] = useState([]);
  const getcustomersData = async () => {
    const response = await getallCustomersAPI();
    console.log(response);
    setcustomersData(response.data);
  };
  useEffect(() => {
    getcustomersData();
  }, []);

  const { customers, loading } = useCustomers();

  console.log(customers);

  return (
    <div className={styles.CustomerListContainer}>
      <h3>Customers</h3>
      <div className={styles.CustomersList}>
        {customersData.map((item) => (
          <div key={item._id} className={styles.Customer}>
            <div className={styles.ImageContainer}>
              <img className={styles.Image} src={item.profilePic} alt="" />
            </div>

            <div className={styles.Info}>
              <span className={styles.Name}>
                {item.firstname} {item.lastname}
              </span>
              <span className={styles.Username}> {item.username}</span>

              <div className="Address">
                <span>{item.address.country}</span>
                <span>{item.address.city}</span>
                <span>{item.address.state}</span>
              </div>
              <Link className={styles.ViewLink} to={`${item._id}`}>
                <span>View</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default CustomersScreen;
