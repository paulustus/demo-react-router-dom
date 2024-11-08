import {Route, Link, Switch, Redirect} from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import  NotFound from './pages/NotFound.jsx';
import { Team } from './pages/Team.jsx';
import TeamInfo from "./pages/TeamInfo.jsx";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/team" component={TeamInfo} />
                <Route path="/team/:team" component={Team} />
                <Route path="/team/new" component={Team} />
                <Redirect exact path="/redi" to="/" />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default App;
