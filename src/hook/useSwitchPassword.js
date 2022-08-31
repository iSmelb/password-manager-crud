import { useState } from 'react'

function useSwitchPassword() {
    const [showPassword, setShowPassword] = useState(false)
    const onSwitch = () => {
        setShowPassword(prev => !prev)
    }
    const inputType = showPassword ? 'text' : 'password'

    return [showPassword, onSwitch, inputType]
}


export default useSwitchPassword