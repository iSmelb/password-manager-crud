import React from 'react';
import { useForm } from 'react-hook-form';
import useSwitchPassword from '../../hook/useSwitchPassword';
import MyButton from "../UI/MyButton/MyButton";
import SwitchPassword from '../UI/SwitchPassword/SwitchPassword';
import cl from './Form.module.scss';

function RegisterForm({ submitFunc }) {
    const [showPassword, onSwitch, inputType] = useSwitchPassword()
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset
    } = useForm({ mode: "onBlur" })
    const password = watch("password")

    const onSubmit = (data) => {
        submitFunc(data.userName, data.password)
        reset()
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                User name:
                <input  {...register('userName', {
                    required: "This field is required",
                })} />
            </label>
            <div className={cl.error}>
                {errors?.userName && <p>{errors?.userName?.message}</p>}
            </div>
            <label>
                Password (6 characters minimum):
                <div className={cl.inputConteiner}>
                    <input type={inputType} {...register('password', {
                        required: "This field is required",
                        minLength: {
                            value: 6,
                            message: "Min length is 6 characters"
                        },
                    })} />
                    <SwitchPassword showState={showPassword} onClick={onSwitch} className={cl.showPassword} />
                </div>
            </label>
            <div className={cl.error}>
                {errors?.password && <p>{errors?.password?.message}</p>}
            </div>
            <label>
                Password Confirm:
                <div className={cl.inputConteiner}>
                    <input type={inputType} {...register('confirmPassword', {
                        required: "This field is required",
                        validate: value => value === password || `The passwords don't match`
                    })} />
                    <SwitchPassword showState={showPassword} onClick={onSwitch} className={cl.showPassword} />
                </div>
                
            </label>
            <div className={cl.error}>
                {errors?.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}
            </div>
            <MyButton type="submit">Sign up</MyButton>
        </form>
    )
}

export default RegisterForm