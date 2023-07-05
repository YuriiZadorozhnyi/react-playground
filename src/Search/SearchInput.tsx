import React, { useEffect } from "react";
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage.ts";

interface SearchInputProps {
    onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useStateWithLocalStorage("searchTerm", "");

    useEffect(() => {
        // Set a timer to trigger the search after the debounce delay
        const timerId = setTimeout(() => {
            onSearch(searchTerm);
        }, 300);

        // Clear the timer on cleanup
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm, onSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
        />
    );
};

export default SearchInput;
