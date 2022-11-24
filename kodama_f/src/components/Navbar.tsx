import type { ReactElement } from 'react'

export default function Navbar(): ReactElement {
	return (
		<nav className='flex items-center justify-between bg-neutral-900 py-7 px-12'>
			<p className='text-xl font-black tracking-widest'>K O D A M A</p>
			<input
				className='duration-400 w-2/3 rounded-full bg-neutral-700 py-2.5 px-5 text-neutral-400 placeholder-neutral-500 transition ease-in-out hover:bg-white hover:text-neutral-400'
				placeholder='Search for Games'
			/>
			<div className='flex justify-center'>
				<p className='mx-2 text-sm'>LOG IN</p>
				<p className='mx-2 text-sm'>SIGN UP</p>
				<p className='mx-2 text-sm'>API</p>
			</div>
		</nav>
	)
}
