// Login.tsx

import React, { useEffect, useReducer, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { LoginInput, LoginProps, LoginState } from "./Login.types";
import styles from "./Login.module.scss";
import { LoginFormReducer } from "./LoginReducer";
import { loginRequst } from "../../services/Authentication.services";
import { Navigate, useNavigate } from "react-router-dom";

const initialState: LoginState = {
  isLoggedIn: false,
  error: null,
};

const Login = ({}: LoginProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<LoginInput>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({});
    }
  }, [formState, reset]);

  const [state, dispatch] = useReducer(LoginFormReducer, initialState);
  const navigate = useNavigate();
  const makeLoginRequest = async (data: LoginInput) => {
    try {
      const { username, password } = data;
      dispatch({ type: "LoginStatus", payload: { isLoggedIn: false } });

      // const response = await loginRequst(username, password);

      // console.log(response);
      // const role = localStorage.getItem("user");
      // Navigate(role);
      // localStorage.setItem("token", "12345678");
      localStorage.setItem("user", JSON.stringify("admin"));
      // const role = "admin";
      const user = JSON.parse(localStorage.getItem("user") as string);
      // console.log(role);
      navigate(user);

      dispatch({ type: "LoginStatus", payload: { isLoggedIn: true } });
    } catch (error: any) {
      dispatch({ type: "LoginFailed", payload: { error: error.message } });
    }
  };

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    try {
      const { username, password } = data;
      const response = await makeLoginRequest({ username, password });
      console.log(data);
      // console.log(response);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.LoginForm}>
      <div className={styles.Login}>
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="username/email"
            minLength={5}
            {...register("username", {
              required: "Username is required",
              pattern: {
                value:
                  /^(?=.{5,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                message: "Invalid username format",
              },
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 15,
                message: "Username must be at most 15 characters",
              },
            })}
          />
          {errors.username && (
            <span className={styles.error}>{errors.username.message}</span>
          )}

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="password"
            {...register("password", {
              required: "Password is required",
              //   pattern: {
              //     value:
              //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,20}$/,
              //     message:
              //       "Password must be 8-20 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character",
              //   },
            })}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}

          <input className={styles.loginbtn} type="submit" value="Login" />
        </form>
        {state.error && <div className={styles.error}>{state.error}</div>}
      </div>
    </div>
  );
};

export default Login;
