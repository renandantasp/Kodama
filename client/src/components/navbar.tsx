/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/button-has-type */
import Modal from '@mui/material/Modal'
import type { ReactElement } from 'react'
import { useState } from 'react'
import {
	AiOutlineClose,
	AiOutlineEllipsis,
	AiOutlineMenu
} from 'react-icons/ai'

export default function Navbar(): ReactElement {
	const [open, setOpen] = useState(false)
	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	return (
		<div className='z-20 flex w-full items-center justify-between bg-transparent p-4 text-xs lg:absolute lg:p-10 lg:pt-8 lg:text-base'>
			<a
				href='/'
				className='cursor-pointer select-none whitespace-nowrap font-black'
			>
				K O D A M A
			</a>
			<input
				className='w-[60%] ml-0 mr-3 rounded-full bg-neutral-500 px-4 py-1.5 opacity-50 transition placeholder:text-neutral-100 hover:bg-white hover:text-black hover:opacity-100 placeholder:hover:text-neutral-800 focus:bg-white focus:text-black focus:opacity-100 lg:mx-6 lg:flex-1 lg:py-2'
				placeholder='&#xF002;   Search for games'
			/>

			<div className='hidden transition duration-200 ease-in-out lg:flex'>
				<div className='flex items-center'>
					<a className='mr-6 text-sm' href='/'>
						LOG IN
					</a>
					<a className='mr-6 text-sm' href='/'>
						SIGNUP
					</a>
					<a href='/'>
						<AiOutlineEllipsis />
					</a>
				</div>
			</div>
			<button
				onClick={handleOpen}
				className='block transition duration-200 ease-in-out lg:hidden'
			>
				<AiOutlineMenu />
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				className='flex-end mr-4 mt-4 flex items-start justify-end'
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<div className='flex w-64 flex-col duration-700 ease-in-out'>
					<div className='flex flex-row items-center justify-between rounded-t-lg bg-neutral-900 p-4'>
						<a href='/' className='mr-2 text-sm text-white hover:underline'>
							Log In
						</a>
						<a href='/' className='mr-2 text-sm text-white hover:underline'>
							Sign Up
						</a>
						<button onClick={handleClose} className='text-white'>
							<AiOutlineClose />
						</button>
					</div>
					<div className='flex flex-col rounded-b-lg bg-white p-4 text-neutral-900'>
						<a href='/' className='mb-2 text-lg font-medium'>
							Home
						</a>
						<div className='mb-2 flex flex-col'>
							<a href='/' className='text-lg font-medium'>
								Link father
							</a>
							<a href='/' className='ml-4'>
								Link father
							</a>
							<a href='/' className='ml-4'>
								Link father
							</a>
							<a href='/' className='ml-4'>
								Link father
							</a>
						</div>
						<a href='/' className='mb-2 text-lg font-medium'>
							Another Link
						</a>
					</div>
				</div>
			</Modal>
		</div>
	)
}
