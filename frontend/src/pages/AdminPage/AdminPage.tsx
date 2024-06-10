import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AdminDashBoard from "../../components/AdminDashBoard/AdminDashBoard.tsx";
import Header from "../../components/Header/Header.tsx";
import SideBar from "../../components/SideBar/SideBar.tsx";
import styles from "./AdminPage.module.scss";
import { AdminPageProps } from "./AdminPage.types.ts";
import CustomersScreen from "../../components/CustomersScreen/CustomersScreen.tsx";
import CustomerDetail from "../../components/CustomerDetail/CustomerDetail.tsx";
import { useEffect, useState } from "react";
import customers from "../../components/CustomersScreen/CustomersScreen.types.ts";
// import { getallCustomersAPI } from "../../services/GetallCustomers.ts";

const AdminPage = ({}: AdminPageProps) => {
  const [customersData, setCustomers] = useState(customers);

  const [deletedCustomers, setDeletedCustomers] = useState([]);


  // handleD

  return (
    <div className={styles.AdminPage}>
      <Header />
      <div className={styles.MainScreen}>
        <div className={styles.Sidebar}>
          <SideBar />
        </div>

        <div className={styles.DashBoard}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
