import {useNavigate} from "react-router-dom";

export function TeamInfo() {
    let navigate = useNavigate();
    
    function handleClick() {
        navigate("/");
    }

    return (
        <>
            <h1>Teams are a number of individuals which have fun while working together.</h1>
            <button onClick={handleClick}>Go Home</button>
        </>
    )
}