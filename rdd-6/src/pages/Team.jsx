import {useParams} from "react-router-dom";

export function Team() {
    const {team: teamName} = useParams();
    return (
        <h1>Team {teamName}</h1>
    )
}