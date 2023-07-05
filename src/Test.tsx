import {memo} from "react";
import { useNavigate  } from "react-router-dom";

type TestProps = {
    text: string;
};

const Test: React.FC<TestProps> = ({text}) => {
    const navigate = useNavigate ();

    const goToSearch = () => {
        navigate('/search');
    }

    return (
        <>
            <button onClick={goToSearch} >Go to SEARCH</button>
            <div>{text}</div>
        </>
)
}

export default memo(Test)
