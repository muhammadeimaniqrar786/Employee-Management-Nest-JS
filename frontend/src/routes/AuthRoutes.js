import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AuthRoutes = () => {
    return <>
        <Routes>
            <Route path="/auth/">
                <Route path="login" element={<Login />} />
                <Route path="Register" element={<Register />} />
            </Route>
        </Routes>
    </>;
}

export default AuthRoutes;