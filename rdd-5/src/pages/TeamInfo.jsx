import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

function TeamInfo({ history }) {
    TeamInfo.propTypes = {
        history: PropTypes.object.isRequired
    };

    function handleClick() {
        history.push("/");
    }

    return (
        <>
            <h1>Teams are a number of individuals which have fun while working together.</h1>
            <button onClick={handleClick}>Go Home</button>
        </>
    );
}

export default withRouter(TeamInfo);
