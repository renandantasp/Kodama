import { Modal } from '@mui/material'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

interface Props {
	children: ReactElement
}

function InfoModal({ children }: Props): ReactElement {
	const [open, setOpen] = useState(false)
	const onOpen = (): void => setOpen(true)
	const onClose = (): void => setOpen(false)
	return (
		<div>
			<button
				type='button'
				onClick={onOpen}
				className='block transition duration-200 ease-in-out'
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
				<div className='flex w-40 flex-col duration-700 ease-in-out  -mr-2 lg:mt-6 lg:mr-4'>
					<div className='flex flex-row items-center justify-end rounded-t-lg bg-neutral-900 pl-4 '>
						<button
							type='button'
							onClick={onClose}
							className='h-full flex w-10 justify-center rounded-tr bg-neutral-600 p-1.5  text-neutral-300'
						>
							<AiOutlineClose />
						</button>
					</div>
					{children}
				</div>
			</Modal>
		</div>
	)
}

export default InfoModal
