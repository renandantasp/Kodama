import Modal from '@mui/material/Modal'
import type { ReactElement } from 'react'
import { useState } from 'react'
import {
	AiOutlineClose,
	AiOutlineEllipsis,
	AiOutlineMenu
} from 'react-icons/ai'
import Search from './search'

export default function Navbar(): ReactElement {
	const [open, setOpen] = useState(false)
	const onOpen = (): void => setOpen(true)
	const onClose = (): void => setOpen(false)

	return (
		<div className='z-20 flex w-full items-center justify-between bg-transparent p-4 text-xs lg:p-10 lg:pt-8 lg:text-base'>
			<a
				href='/'
				className='cursor-pointer select-none whitespace-nowrap font-black'
			>
				K O D A M A
			</a>

			<Search />

			<div className='hidden w-48 transition duration-200 ease-in-out lg:flex'>
				<div className='flex items-center'>
					<a className='mr-6 text-sm' href='/login'>
						LOGIN
					</a>
					<a className='mr-6 text-sm' href='/signup'>
						SIGNUP
					</a>
					<a href='/'>
						<AiOutlineEllipsis />
					</a>
				</div>
			</div>

			<button
				type='button'
				onClick={onOpen}
				className='block transition duration-200 ease-in-out lg:hidden'
			>
				<AiOutlineMenu />
			</button>

			<Modal
				open={open}
				onClose={onClose}
				className='flex-end mr-4 mt-4 flex items-start justify-end'
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<div className='flex w-64 flex-col duration-700 ease-in-out'>
					<div className='flex flex-row items-center justify-between rounded-t-lg bg-neutral-900 p-4'>
						<a
							href='/login'
							className='mr-2 rounded-full bg-white px-2 py-1 text-sm text-black'
						>
							Log In
						</a>
						<a
							href='/signup'
							className='mr-2 rounded-full bg-white px-2 py-1 text-sm text-black'
						>
							Sign Up
						</a>
						<button type='button' onClick={onClose} className='text-white'>
							<AiOutlineClose />
						</button>
					</div>
					<div className='flex flex-col rounded-b-lg bg-white p-4 text-neutral-900'>
						<a href='/' className='mb-2 text-xl font-medium'>
							Home
						</a>
						<div className='mb-2 flex flex-col'>
							<a href='/' className='my-1 text-xl font-medium'>
								Browse
							</a>
							<a href='/' className='my-1 text-sm'>
								Reviews
							</a>
							<a href='/' className='my-1 text-sm'>
								Collections
							</a>
							<a href='/' className='my-1 text-sm'>
								Genres
							</a>
							<a href='/' className='my-1 text-sm'>
								Platforms
							</a>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}
