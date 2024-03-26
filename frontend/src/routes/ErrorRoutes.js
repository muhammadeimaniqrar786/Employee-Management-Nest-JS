import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/error/NotFound";

const ErrorRoutes = () => {
    return <>
        <Routes>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>;
}

export default ErrorRoutes;