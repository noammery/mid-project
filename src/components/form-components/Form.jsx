import { useForm } from 'react-hook-form'
import './style.css'
import * as yup from "yup";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    firstName: yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    phoneNumber: yup.string().required().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
    email: yup.string().email().required(),
    amount: yup.string().required("Amount is required field").matches(/^[0-9]+$/, "Must be only digits"),
    creditCard:yup.string().required().matches(/^[0-9]+$/, "Must be only digits").min(16, 'Must be exactly 5 digits').max(16, 'Must be exactly 12 digits'),
    adress: yup.string().required(),
});

export default function Form() {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <div className='Form'>
            <h1>Donation Form</h1>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className='input-small'>
                    <div>
                        <label>First Name</label>
                        <input {...register('firstName')} />
                        {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}

                    </div>
                    <div >
                        <label>Last Name</label>
                        <input {...register('lastName')} />
                        {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
                    </div>
                </div>

                <div className='input-small'>
                    <div>
                        <label>Phone Number </label>
                        
                        <input {...register('phoneNumber')} placeholder='0505555555' />
                        {errors?.phoneNumber && <p>{errors?.phoneNumber?.message || "Error!"}</p>}
                    </div>

                    <div >
                        <label>Email Address</label>
                        <input {...register('email')} />
                        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                    </div>
                </div>

                <div >
                    <label>How much do you wish to donate?</label>
                    <input {...register('amount')} />
                    {errors?.amount && <p>{errors?.amount?.message || "Error!"}</p>}
                </div>

                <div >
                    <label>Credit card</label>
                    <input {...register('creditCard')} />
                    {errors?.creditCard && <p>{errors?.creditCard?.message || "Error!"}</p>}
                </div>

                <div >
                    <label>Billing Address</label>
                    <input {...register('adress')} />
                    {errors?.adress && <p>{errors?.adress?.message || "Error!"}</p>}
                </div>

                <input value="SUBMIT" type="submit" disabled={!isValid} />
            </form>
        </div>
    )
}