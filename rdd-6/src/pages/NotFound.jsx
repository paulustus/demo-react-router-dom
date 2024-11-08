import {useLocation} from "react-router-dom";

export function NotFound() {
    const location = useLocation();
    return <h1>No match for <code>{location.pathname}</code></h1>
}