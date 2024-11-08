import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

function NotFound ({ location }) {
    NotFound.propTypes = {
        location: PropTypes.object.isRequired
    };

    return <h1>No match for <code>{location.pathname}</code></h1>;
}

export default withRouter(NotFound);
