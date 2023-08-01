import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NotFound from 'components/notFound'
import type { ReactElement } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

const Homepage = lazy(async () => import('pages/Homepage'))
const Game = lazy(async () => import('pages/Game'))
const Login = lazy(async () => import('pages/Login'))
const SignUp = lazy(async () => import('pages/SignUp'))
const PasswordRecovery = lazy(async () => import('pages/PasswordRecovery'))
// const DefaultLayout = lazy(async () => import('layouts/DefaultLayout'))

export default function App(): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/password_recovery' element={<PasswordRecovery />} />
					<Route path='/games/:id' element={<Game />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}
