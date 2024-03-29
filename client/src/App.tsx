import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NotFound from 'components/notFound'
import { AuthProvider } from 'contexts/AuthContext'
import InactivityTimeout from 'hooks/InactivityTimeout'
import About from 'pages/About'
import Essay from 'pages/Essay'
import Essays from 'pages/Essays'
import ProfilePage from 'pages/userRoutes/ProfilePage'
import WriteReview from 'pages/userRoutes/WriteReview'
import type { ReactElement } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthRoutes from 'utils/AuthRoutes'
import PrivateRoutes from 'utils/PrivateRoutes'

const queryClient = new QueryClient()

const Homepage = lazy(async () => import('pages/Homepage'))
const Game = lazy(async () => import('pages/Game'))
const Login = lazy(async () => import('pages/auth/Login'))
const SignUp = lazy(async () => import('pages/auth/SignUp'))
const PasswordRecovery = lazy(async () => import('pages/PasswordRecovery'))

export default function App(): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<BrowserRouter>
					<InactivityTimeout>
						<Routes>
							<Route path='/' element={<Homepage />} />
							<Route element={<AuthRoutes />}>
								<Route path='/auth/login' element={<Login />} />
								<Route path='/auth/signup' element={<SignUp />} />
							</Route>
							<Route path='/password_recovery' element={<PasswordRecovery />} />
							<Route path='/games/:id' element={<Game />} />
							<Route path='/essays/:id' element={<Essay />} />
							<Route path='/essays' element={<Essays />} />
							<Route path='/about' element={<About />} />
							<Route path='/@:id' element={<ProfilePage />} />
							<Route path='/@:id/notifications' element={<ProfilePage />} />
							<Route element={<PrivateRoutes />}>
								<Route element={<WriteReview />} path='/write_review' />
							</Route>
							<Route path='*' element={<NotFound />} />
						</Routes>
					</InactivityTimeout>
				</BrowserRouter>
			</AuthProvider>
		</QueryClientProvider>
	)
}
