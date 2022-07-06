import React, { Suspense } from "react"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './admin/redux/redux-store'

import "./admin/assets/scss/style.scss"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Containers
const DefaultLayout = React.lazy(() => import('./admin/layout/DefaultLayout'))
const Login = React.lazy(() => import("./admin/views/pages/login/Login"))

const Routing = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<Navigate to="login" replace />} />
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  )
}
export default Routing
