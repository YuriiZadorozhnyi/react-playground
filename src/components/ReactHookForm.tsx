import { useForm, SubmitHandler } from "react-hook-form"
import { useContext } from "react";
import { GlobalContext } from "../App.tsx";

export enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

export interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
    gender: GenderEnum;
}

type FormInputKeys = keyof IFormInput;

export default function ReactHookForm() {
    const globalContext = useContext(GlobalContext);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<IFormInput>({ defaultValues: globalContext });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    console.log("firstName value was changed: " + watch("firstName"));

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
            <label>First Name</label>
            <input {...register("firstName", { required: true, maxLength: 20 })} />

            <label>Last Name</label>
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i, required: true, maxLength: 20 })} />

            <label>Age</label>
            <input type="number" {...register("age", { min: 5, max: 50, required: true })} />
            {errors.age && <span style={{ color: 'red' }}>Age must be between 5 and 50</span>}

            <label>Gender Selection</label>
            <select {...register("gender", { required: true })}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>

            {errors && Object.keys(errors).map(error => <p style={{ color: 'red' }} key={error}>{`${error}:${errors[error as FormInputKeys]?.type}`}</p>)}
            <input type="submit" />
        </form>
    )
}
