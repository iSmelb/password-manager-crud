import React from 'react';
import { useForm } from 'react-hook-form';
import useSwitchPassword from '../../hook/useSwitchPassword';
import MyButton from "../UI/MyButton/MyButton";
import SwitchPassword from '../UI/SwitchPassword/SwitchPassword';
import cl from './Form.module.scss';

const template = {
    account: '',
    password: '',
}

function ItemForm({submitFunc, cancelFunc, itemForEdit = template}) {
    const [showPassword, onSwitch, inputType] = useSwitchPassword()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur", defaultValues: itemForEdit })

    const onSubmit = (data) => {
        submitFunc(data)
        reset()
        cancelFunc()
    }

    const onCancel = (e) => {
        e.preventDefault();
        cancelFunc()
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                Account:
                <input {...register('account', {
                    required: "This field is required",
                })} />
            </label>
            <div className={cl.error}>
                {errors?.account && <p>{errors?.account?.message}</p>}
            </div>
            <label>
                Password:
                <div className={cl.inputConteiner}>
                    <input type={inputType} {...register('password', {
                        required: "This field is required"
                    })} />
                    <SwitchPassword showState={showPassword} onClick={onSwitch} className={cl.showPassword}/>
                </div>
            </label>
            <div className={cl.error}>
                {errors?.password && <p>{errors?.password?.message}</p>}
            </div>
            <div className={cl.buttons}>
                <MyButton type="submit">Save</MyButton>
                <MyButton onClick={onCancel}>Cancel</MyButton>
            </div>
        </form>
    )
}

export default ItemForm