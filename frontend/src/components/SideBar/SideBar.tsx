import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import { SideBarProps } from "./SideBar.types.ts";

const sidebarTabs = {
  // admin: ["Home", "Customers", "Deleted Customers",],
  admin: [
    { tabname: "Home", path: "/admin" },
    { tabname: "Customer", path: "/admin/allcustomers" },
    { tabname: "Deleted Customers", path: "/admin/deletedCustomers" },
  ],
  boardMember: [
    { tabname: "Home", path: "/boardMember" },
    { tabname: "Customer", path: "/boardMember/allcustomers" },
    { tabname: "Deleted Customers", path: "/boardMember/deletedCustomers" },
  ],
};
const SideBar = ({}: SideBarProps) => {
  const role = "admin";

  const currentUser = sidebarTabs[role];
  console.log(currentUser);
  return (
    <div className={styles.SidebarContainer}>
      <ul className={styles.SidebarList}>
        {currentUser.map((tab) => (
          <li>
            <Link className={styles.Link} to={tab.path}>
              {tab.tabname}
            </Link>
          </li>
        ))}
        <Link to={"/logout"}>
          <li>LogOut</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
