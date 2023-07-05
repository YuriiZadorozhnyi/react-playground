import { memo } from "react";
import SearchInput from "./SearchInput.tsx";

const Search = () => {
    const onSearch = (value: string) => {
        console.log(value);
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    return (
        <div>
            <h1>Search</h1>
            <SearchInput onSearch={onSearch} />
        </div>
    )
}

export default memo(Search)
