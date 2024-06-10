import { Link, useNavigate, useNavigation } from "react-router-dom";
import styles from "./Logout.module.scss";
import { LogoutProps } from "./Logout.types.ts";

const Logout = ({}: LogoutProps) => {
  const navigate = useNavigate();
  navigate("/");
  localStorage.removeItem("user");

  return <>Logout Page</>;
};

export default Logout;
