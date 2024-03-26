import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const DashboardRoutes = () => {
    return <>
        <Routes>
            <Route path='/'>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    </>;
}

export default DashboardRoutes;