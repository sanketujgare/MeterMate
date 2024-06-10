import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import AdminPage from "../../pages/AdminPage/AdminPage";
import { GUARDS } from "./guard";
import AdminDashBoard from "../AdminDashBoard/AdminDashBoard";
import CustomersScreen from "../CustomersScreen/CustomersScreen";
import CustomerDetail from "../CustomerDetail/CustomerDetail";
import { CustomerEditForm } from "../CustomerEditForm/CustomerEditForm";
import AddNewCustomer from "../AddNewCustomer/AddNewCustomer";
import UploadCustomerData from "../UploadCustomerData/UploadCustomerData";
import BoardMemberPage from "../../pages/BoardMemberPage/BoardMemberPage";
import Logout from "../Logout/Logout";

type predicate = () => boolean;

// can activate is higher order component menas it takes component and returns component.

const canActivate = (
  Component: React.ComponentType<any>,
  guards: predicate[],
  to: string = "/"
) => {
  console.log("hello");
  return () => {
    console.log(to);
    if (!guards.every((guard) => guard())) return <Navigate to={to} />;

    return <Component />;
  };
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "/admin",
    // element: <AdminPage />,
    // Component: canActivate(AdminPage, [() => true, () => true]),
    Component: canActivate(
      AdminPage,
      [GUARDS.isLoggedIn, GUARDS.grantAccessTo(["admin"])],
      //   [() => true, () => false],
      "/"
    ),

    children: [
      {
        path: "",
        element: <AdminDashBoard />,
      },
      {
        path: "allcustomers",
        element: <CustomersScreen />,
      },
      {
        path: "allcustomers/:customerId",
        element: <CustomerDetail />,
      },
      {
        path: "allcustomers/editform/:customerId/",
        element: <CustomerEditForm />,
      },
      {
        path: "deletedcustomers",
        element: <CustomersScreen />,
      },
      {
        path: "addcustomers",
        element: <AddNewCustomer />,
      },
      {
        path: "uploadcustomerdata",
        element: <UploadCustomerData />,
      },
    ],
  },
  {
    path: "/boardMember",
    element: <BoardMemberPage />,
    children: [
      {
        path: "",
        element: <AdminDashBoard />,
      },
      {
        path: "allcustomers",
        element: <CustomersScreen />,
      },
      {
        path: "allcustomers/:customerId",
        element: <CustomerDetail />,
      },
      {
        path: "allcustomers/editform/:customerId/",
        element: <CustomerEditForm />,
      },
      {
        path: "deletedcustomers",
        element: <CustomersScreen />,
      },
      {
        path: "addcustomers",
        element: <AddNewCustomer />,
      },
    ],
  },
]);
