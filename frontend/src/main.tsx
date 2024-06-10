// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import {
//   BrowserRouter,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";
// import Login from "./components/Login/Login.tsx";
// import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard.tsx";
// import CustomersScreen from "./components/CustomersScreen/CustomersScreen.tsx";
// import CustomerDetail from "./components/CustomerDetail/CustomerDetail.tsx";
// const routers = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <Login />,
//   // },
//   {
//     path: "/",
//     element: <AdminDashBoard />,
//     children: [
//       {
//         path: "/allcustomers",
//         element: <CustomersScreen />,
//         children: [
//           {
//             path: "/allcustomers/:customerId",
//             element: <CustomerDetail />,
//           },
//         ],
//       },
//       {
//         path: "/deletedcustomers",
//         element: <CustomersScreen />,
//       },
//     ],
//   },
// ]);
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     {/* <BrowserRouter> */}
//     <RouterProvider router={routers}>
//       <App />
//     </RouterProvider>
//     {/* </BrowserRouter>
//      */}
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";
import CustomersScreen from "./components/CustomersScreen/CustomersScreen";
import CustomerDetail from "./components/CustomerDetail/CustomerDetail";
import "./index.css";
import AdminPage from "./pages/AdminPage/AdminPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
