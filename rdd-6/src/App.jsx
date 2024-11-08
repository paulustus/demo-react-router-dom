import {Routes, Route, Link, Navigate} from "react-router-dom"
import {Home} from "./pages/Home.jsx";
import {TeamInfo} from "./pages/TeamInfo.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {Team} from "./pages/Team.jsx";

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
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/team">
                    <Route index element={<TeamInfo /> } />
                    <Route path=":team" element={<Team /> } />
                </Route>
                <Route path="/redi" element={<Navigate replace to="/" />} />
                <Route path="*" element={<NotFound /> } />
            </Routes>
        </>
    )
}

export default App
