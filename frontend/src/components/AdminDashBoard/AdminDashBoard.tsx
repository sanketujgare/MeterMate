import styles from "./AdminDashBoard.module.scss";
import { AdminDashBoardProps } from "./AdminDashBoard.types.ts";

const AdminDashBoard = ({}: AdminDashBoardProps) => {
  return (
    <div className={styles.DashBoard}>
      <div className={styles.Card}>
        <span className={styles.Heading}>Total Customer Count</span>
        <span className={styles.Info}>100000</span>
      </div>
      <div className={styles.Card}>
        <span className={styles.Heading}>Total Customer Count</span>
        <span className={styles.Info}>100000</span>
      </div>
      <div className={styles.Card}>
        <span className={styles.Heading}>Total Customer Count</span>
        <span className={styles.Info}>100000</span>
      </div>
    </div>
  );
};

export default AdminDashBoard;
