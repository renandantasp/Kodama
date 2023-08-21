import type { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthRoutes(): ReactElement {
	const hasUser = localStorage.getItem('hasUser')

	return hasUser !== '1' ? <Outlet /> : <Navigate to='/' />
}

export default AuthRoutes
