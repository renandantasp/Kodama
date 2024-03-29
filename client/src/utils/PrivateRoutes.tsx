import type { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes(): ReactElement {
	const hasUser = localStorage.getItem('hasUser')

	return hasUser === '1' ? <Outlet /> : <Navigate to='/auth/login' />
}

export default PrivateRoutes
