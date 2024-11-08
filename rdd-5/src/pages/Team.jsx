import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

export function Team({ match }) {
    Team.propTypes = {
        match: PropTypes.object.isRequired
    };

    const { team: teamName } = match.params;

    return (
        <h1>Team {teamName}</h1>
    )
}

export default withRouter(Team);