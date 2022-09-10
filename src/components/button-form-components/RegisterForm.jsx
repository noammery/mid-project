import { useForm } from "react-hook-form";
import * as yup from "yup";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";



const schema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: yup.string().email().required()
});

export default function RegisterForm(props) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (data, event) => {
    event.preventDefault();
    props.newEvent();
    alert(JSON.stringify(data)+"\nYOU CAN SEE YOUR EVENTS ON CALENDAR PAGE");
    reset();
    props.handleClose();
    

  };

  return (
    <div className="Form" sx={{pb:'20px'}}>
      <h1>Registration Form</h1>
      {/* autoComplete="off" */}
      <form  >
        <div className="input-small">
          <div>
            <label>First Name</label>
            <input {...register("firstName")} />
            {errors?.firstName && (
              <p>{errors?.firstName?.message || "Error!"}</p>
            )}
          </div>
          <div>
            <label>Last Name</label>
            <input {...register("lastName")} />
            {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
          </div>
        </div>

        <div className="input-small">
          <div>
            <label>Phone Number </label>

            <input {...register("phoneNumber")} placeholder="0505555555" />
            {errors?.phoneNumber && (
              <p>{errors?.phoneNumber?.message || "Error!"}</p>
            )}
          </div>

          <div>
            <label>Email Address</label>
            <input {...register("email")} />
            {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
          </div>
        </div>

        <Button sx={{mt:'30px'}} color="primary" fullWidth  variant="contained" disabled={!isValid} onClick={handleSubmit(onSubmit)} >Register</Button>
      </form>
    </div>
  );
}
