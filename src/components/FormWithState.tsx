import React, { useState, useEffect } from 'react';

interface FormState {
    name: string;
    email: string;
}

const FormWithState: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
    });

    useEffect(() => {
        // Set the initial form values
        setFormState({
            name: 'Initial Name',
            email: 'initial@email.com',
        });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormWithState;
