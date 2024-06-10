import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import SideBar from "../../components/SideBar/SideBar.tsx";
import styles from "./BoardMemberPage.module.scss";
import { BoardMemberPageProps } from "./BoardMemberPage.types.ts";
import { useState } from "react";

const BoardMemberPage = ({}: BoardMemberPageProps) => {
  const location = useLocation();
  const isBoardMember = location.pathname.startsWith("/boardMember");
  const [modal, setModal] = useState(false);
  // const handlebutton=(){

  // }

  return (
    <div className={styles.BoardMemberPage}>
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

export default BoardMemberPage;
