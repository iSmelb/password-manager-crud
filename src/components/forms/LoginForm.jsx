import React from 'react';
import { useForm } from 'react-hook-form';
import useSwitchPassword from '../../hook/useSwitchPassword';
import MyButton from "../UI/MyButton/MyButton";
import SwitchPassword from '../UI/SwitchPassword/SwitchPassword';
import cl from './Form.module.scss';

function LoginForm({ submitFunc }) {
    const [showPassword, onSwitch, inputType] = useSwitchPassword()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onBlur" })

    const onSubmit = (data) => {
        submitFunc(data.userName, data.password)
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                User name:
                <input {...register('userName', {
                    required: "This field is required",
                })} />
            </label>
            <div className={cl.error}>
                {errors?.userName && <p>{errors?.userName?.message}</p>}
            </div>
            <label>
                Password:
                <div className={cl.inputConteiner}>
                    <input
                        type={inputType}
                        {...register('password', {
                            required: "This field is required"
                        })} />
                    <SwitchPassword showState={showPassword} onClick={onSwitch} className={cl.showPassword}/>
                </div>
            </label>
            <div className={cl.error}>
                {errors?.password && <p>{errors?.password?.message}</p>}
            </div>
            <MyButton type="submit">Login</MyButton>
        </form>
    )
}

export default LoginForm