import type { ReactElement } from 'react'
import { lazy } from 'react'

const Navbar = lazy(async () => import('../components/Navbar'))
const Sidebar = lazy(async () => import('../components/Sidebar'))

interface Properties {
	children: JSX.Element
}

export default function DefaultLayout({ children }: Properties): ReactElement {
	return (
		<div className='h-screen'>
			<Navbar />
			<Sidebar />
			<div className='relative ml-64'>{children}</div>
		</div>
	)
}
