import styles from "./CustomerDetail.module.scss";
import { CustomerDetailProps } from "./CustomerDetail.types.ts";

// import customers from "../CustomersScreen/CustomersScreen.types.ts";
import { Link, useParams } from "react-router-dom";
import Modal from "../Modal/Modal.tsx";
import { useState } from "react";
import { useCustomers } from "../contexts/customerContext.tsx";

const CustomerDetail = ({}: CustomerDetailProps) => {
  const { customerId } = useParams<{ customerId: string }>();
  const { customers, loading } = useCustomers();
  const customer = customers.find((customer) => customer._id === customerId);
  console.log(customerId);
  const [modal, setModal] = useState(false);
  if (!customer) {
    return <div>Customer not found</div>;
  }

  const handleDelete = () => {
    customers.filter((customer) => customer._id != customerId);
    console.log("deleted customer", customer);

    setModal(false);
  };
  return (
    <div className={styles.CustomerDetail}>
      <div className={styles.CustomerInfo}>
        <div className={styles.CustomerImage}>
          <img className={styles.Image} src={customer.profilePic} alt="" />
        </div>
        <div className={styles.PersonalInfo}>
          <h1>
            {customer.firstname} {customer.lastname}
          </h1>
          <p>Email: {customer.email}</p>
          <p>Address: {customer.address.city}</p>
        </div>
      </div>
      <div className={styles.UpdateBtn}>
        <Link to={`/admin/allcustomers/editform/${customer._id}`}>
          <button className={styles.btnUpdate}>Update</button>
        </Link>
      </div>

      <div className={styles.OtherInfo}>
        <div className={styles.MeterInfo}>
          <h2>Meters Assigned:</h2>
          <div className={styles.MeterContainer}>
            {/* {customer.metersAssigned.map((meter, index) => (
              <div key={index} className={styles.Meter}>
                <span>{meter.meterId}</span>

                <span>{meter.ref.balanceAmount}</span>
                <span>{meter.ref.avgConsumption}</span>
              </div>
            ))} */}
          </div>
        </div>
        <div className={styles.Buttons}>
          {/* <Link to={"/admin/allcustomers"}> */}
          <button className={styles.btnDelete} onClick={() => setModal(true)}>
            Delete
          </button>
          {/* </Link> */}
          <Link to={"/admin/allcustomers"}>
            <button className={styles.btnClose}>Close</button>
          </Link>
        </div>
      </div>
      {modal && <Modal handleDelete={handleDelete} setModal={setModal} />}
    </div>
  );
};

export default CustomerDetail;
