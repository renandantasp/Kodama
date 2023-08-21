import type { ReactElement } from 'react'
import Search from '../search'
import NavbarRight from './navbarRight'

export default function Navbar(): ReactElement {
	return (
		<div className='z-20 flex w-full items-center justify-between bg-transparent p-2 text-xs lg:p-10 lg:pt-8 lg:text-base'>
			<a
				href='/'
				className='cursor-pointer select-none whitespace-nowrap font-black'
			>
				K O D A M A
			</a>

			<div className='flex w-full flex-row justify-center'>
				<Search />
			</div>

			<NavbarRight />
		</div>
	)
}
