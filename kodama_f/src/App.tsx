import type { ReactElement } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Homepage = lazy(async () => import('pages/Homepage'))
const DefaultLayout = lazy(async () => import('layouts/DefaultLayout'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<DefaultLayout>
				<Routes>
					<Route path='/' element={<Homepage />} />
				</Routes>
			</DefaultLayout>
		</BrowserRouter>
	)
}
