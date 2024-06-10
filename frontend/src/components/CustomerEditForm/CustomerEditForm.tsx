import { Link, useParams } from "react-router-dom";
import styles from "./CustomerEditForm.module.scss";
import { CustomerEditFormProps } from "./CustomerEditForm.types.ts";
import { useForm } from "react-hook-form";
import customers from "../CustomersScreen/CustomersScreen.types.ts";
import { useState } from "react";
import { useCustomers } from "../contexts/customerContext.tsx";

export const CustomerEditForm = ({}: CustomerEditFormProps) => {
  const { customerId } = useParams<{ customerId: string }>();
  const { customers, loading } = useCustomers();
  const customer = customers.find((customer) => customer._id === customerId);
  console.log(customerId);
  console.log(customer);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: customer,
  });
  const [togglePassword, setTogglePassWord] = useState(false);

  if (!customer) {
    return <div>Customer not found</div>;
  }
  const onSubmit = (data, e) => {
    // onSave(data);
    e.preventDefault();

    console.log(data);
  };

  return (
    <div className={styles.CustomerEditForm}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Field}>
          <label htmlFor="firstname">First Name:</label>
          <input id="firstname" type="text" {...register("firstname")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="lastname">Last Name:</label>
          <input id="lastname" type="text" {...register("lastname")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="">Full Name:</label>
          <input id="fullname" type="text" {...register("fullname")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" {...register("username")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="password">Password:</label>

          <input
            id="password"
            type={togglePassword ? "text" : "password"}
            {...register("password")}
          /> 
          <button
            className={styles.TogglePasswordBtn}
            onClick={() => setTogglePassWord(!togglePassword)}
          >
            view
          </button>
        </div>

        <div className={styles.Field}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" {...register("email")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="role">Role:</label>
          <input id="role" type="text" {...register("role")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="profilepic">Profile Picture:</label>
          <input id="profilepic" type="text" {...register("profilePic")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="empId">Employee ID:</label>
          <input id="empId" type="text" {...register("empId")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="addressCity">Address - City:</label>
          <input id="addressCity" type="text" {...register("address.city")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="addressState">Address - State:</label>
          <input id="addressState" type="text" {...register("address.state")} />
        </div>

        <div className={styles.Field}>
          <label htmlFor="addressCountry">Address - Country </label>:
          <input
            id="addressCountry"
            type="text"
            {...register("address.country")}
          />
        </div>

        {/* Meters Assigned */}
        {customer.metersAssigned.map((meter, index) => (
          <div key={index}>
            <div className={styles.Field}>
              <label htmlFor={`metersAssigned[${index}].meterId`}>
                Meter ID:
              </label>
              <input
                id={`metersAssigned[${index}].meterId`}
                type="text"
                {...register(`metersAssigned[${index}].meterId`)}
              />
            </div>
          </div>
        ))}

        <button className={styles.ButtonSave} type="submit">
          Save
        </button>
        <Link to={"/admin/allcustomers"}>
          <button className={styles.Buttonclose} type="submit">
            close
          </button>
        </Link>
        {isSubmitSuccessful && <div>Form Submitted Successfully</div>}
      </form>
    </div>
  );
};
