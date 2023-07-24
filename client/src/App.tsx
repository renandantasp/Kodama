import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactElement } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

const Homepage = lazy(async () => import('pages/Homepage'))
const Game = lazy(async () => import('pages/Game'))
// const DefaultLayout = lazy(async () => import('layouts/DefaultLayout'))

export default function App(): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/games/:id' element={<Game />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}
