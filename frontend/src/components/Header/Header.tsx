import { Link, useLocation } from "react-router-dom";
import Dropdown from "../DropDown/DropDown.tsx";
import SearchInput from "../SearchInput/SearchInput.tsx";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types.ts";

const Header = ({}: HeaderProps) => {
  const options = [
    { value: "customer", label: "Customer" },
    { value: "employee", label: "Employee" },
  ];
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  const role = "admin";
  const location = useLocation();
  // const role = location.pathname.startsWith("/boardmember");
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>MeterMate</div>
      <div className="SearchOptions"></div>
      <Dropdown options={options} onSelect={handleSelect} />
      <div className={styles.SearchInput}>
        <SearchInput />
      </div>
      <div className={styles.SearchButton}>
        {role === "admin" ? (
          <Link to={"uploadcustomerdata"}>
            <button className={styles.ActionButton}>Add</button>
          </Link>
        ) : role === "boardMember" ? (
          <Link to={"addcustomers"}>
            <button className={styles.ActionButton}>Add Customer</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
