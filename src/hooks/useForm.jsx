import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm(initialState);
    }

    const handleInputChange = (e) => {
        e.preventDefault();

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return [form, handleInputChange, reset];

}
