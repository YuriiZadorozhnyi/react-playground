import { useState, useEffect } from "react";

const useStateWithLocalStorage = <T>(
    localStorageKey: string,
    initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
    // Get the stored value from localStorage
    const storedValue = localStorage.getItem(localStorageKey);

    // Use the stored value if available, otherwise use the initial value
    const [value, setValue] = useState<T>(
        storedValue !== null ? JSON.parse(storedValue) : initialValue
    );

    // Update the localStorage value whenever the state changes
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [localStorageKey, value]);

    return [value, setValue];
};

export default useStateWithLocalStorage;
