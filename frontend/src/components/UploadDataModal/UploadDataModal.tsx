import { Link } from "react-router-dom";
import styles from "./UploadDataModal.module.scss";
import { UploadDataModalProps } from "./UploadDataModal.types.ts";

const UploadDataModal = ({ handleData, setModal }: UploadDataModalProps) => {
  return (
    <div className={styles.OuterModalContainer}>
      <div className={styles.InnerContainer}>
        <div className={styles.Content}>
          <span>Confirm</span>
          <div className={styles.ModalButtons}>
            <Link to="/admin/uploadcustomerData">
              <button onClick={handleData}>upload</button>
            </Link>
            <Link to={"/admin/addcustomers"}>
              <button onClick={() => setModal(false)}>Add</button>
            </Link>
            {/* <Link to={"/admin/addcustomers"}> */}
            <button onClick={() => setModal(false)}>close</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDataModal;
