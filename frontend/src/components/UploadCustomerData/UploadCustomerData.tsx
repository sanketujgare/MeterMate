import { useState } from "react";
import styles from "./UploadCustomerData.module.scss";
import { UploadCustomerDataProps } from "./UploadCustomerData.types.ts";
import Modal from "../Modal/Modal.tsx";
import UploadDataModal from "../UploadDataModal/UploadDataModal.tsx";

const UploadCustomerData = ({}: UploadCustomerDataProps) => {
  const [modal, setModal] = useState(true);
  const handleData = () => {
    setModal(false);
  };
  const buttonOptions = ["upload", "add"];

  return (
    <div>
      <div>
        upload Customers Data
        <input type="file" />
      </div>
      {modal && <UploadDataModal handleData={handleData} setModal={setModal} />}
    </div>
  );
};

export default UploadCustomerData;
