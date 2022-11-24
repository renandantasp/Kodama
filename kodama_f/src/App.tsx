import type { ReactElement } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Homepage = lazy(async () => import('pages/Homepage'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
		</BrowserRouter>
	)
}
