import React from 'react';
import { RouteInfo } from './CommonTypes';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


const AdminRouting: RouteInfo[] = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
]
export default AdminRouting;