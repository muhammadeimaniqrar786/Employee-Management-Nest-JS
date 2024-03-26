import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './assets/sass/index.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './pages/error/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout/Layout';
import TasksList from './pages/tasks/TasksList';
import CreateTask from './pages/tasks/CreateTask';
import UsersList from './pages/users/UsersList';
import CreateUser from './pages/users/CreateUser';
import RolesList from './pages/roles/RolesList';
import CreateRole from './pages/roles/CreateRole';
import PermissionsList from './pages/permissions/PermissionsList';
import CreatePermission from './pages/permissions/CreatePermission';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/auth/">
          <Route exact path="login" element={<Login />} />
          <Route exact path="Register" element={<Register />} />
        </Route>
        <Route path='/'>
          <Route exact index element={<Layout content={<Dashboard />} />} />
          <Route path='tasks/'>
            <Route exact index element={<Layout content={<TasksList />} />} />
            <Route exact path='create' element={<Layout content={<CreateTask />} />} />
          </Route>
          <Route path='users/'>
            <Route exact index element={<Layout content={<UsersList />} />} />
            <Route exact path='create' element={<Layout content={<CreateUser />} />} />
          </Route>
          <Route path='roles/'>
            <Route exact index element={<Layout content={<RolesList />} />} />
            <Route exact path='create' element={<Layout content={<CreateRole />} />} />
          </Route>
          <Route path='permissions/'>
            <Route exact index element={<Layout content={<PermissionsList />} />} />
            <Route exact path='create' element={<Layout content={<CreatePermission />} />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    <ToastContainer />
  </>;
}

export default App;
