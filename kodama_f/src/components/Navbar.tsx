/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/button-has-type */
import Modal from '@mui/material/Modal'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { AiOutlineEllipsis, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar(): ReactElement {
	const [open, setOpen] = useState(false)
	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	return (
		<div className='flex items-center justify-between p-4 lg:p-10 lg:pt-8'>
			<div className='font-black'> K O D A M A </div>
			<input
				className='mx-6 rounded-full bg-neutral-700 px-4 py-1 transition placeholder:text-sm placeholder:text-neutral-400 hover:bg-white placeholder:hover:text-neutral-800 focus:bg-white focus:text-black lg:flex-1 lg:py-2'
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
				className='flex-end mt-14 mr-4 flex items-start justify-end'
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<div className='flex h-3/4 flex-col'>
					<div className='rounded-t-lg bg-purple-500 p-4'>
						<a href='/' className='rounded-full bg-neutral-900 text-white'>
							Home
						</a>
						<a href='/' className='rounded-full bg-neutral-900 text-white'>
							Home
						</a>
						<a href='/' className='rounded-full bg-neutral-900 text-white'>
							Home
						</a>
					</div>
					<div className='w-32 rounded-b-lg bg-white p-4 text-neutral-900'>
						<a href='/' className='text-lg font-medium'>
							Home
						</a>
					</div>
				</div>
			</Modal>
		</div>
	)
}
