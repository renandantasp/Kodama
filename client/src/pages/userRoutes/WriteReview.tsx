import { Checkbox } from '@mui/material'
import Navbar from 'components/navigation/navbar'
import type { ReactElement } from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function WriteReview(): ReactElement {
	const [essayText, setEssayText] = useState('')
	const [title, setTitle] = useState('')
	const [isPreview, setIsPreview] = useState(false)
	const [gameEssay, setGameEssay] = useState(false)
	console.log(gameEssay)
	const [rating, setRating] = useState(0)
	const [gameId, setGameId] = useState('')
	return (
		<div>
			<Navbar />
			<div className='flex w-full flex-col items-center justify-center px-10'>
				<p className='mb-10 mt-4 text-center text-5xl font-bold'>
					Write your Essay!
				</p>
				<div className='flex w-full flex-col items-center justify-center'>
					<input
						placeholder='Title'
						value={title}
						className='mb-4 w-full rounded bg-neutral-800 p-3 font-medium text-neutral-200 outline outline-1 outline-neutral-500 placeholder:text-neutral-500 lg:w-[50vw]'
						onChange={e => setTitle(e.target.value)}
					/>
					<div className='mb-8 w-full rounded bg-neutral-800 p-3 outline outline-1 outline-neutral-500 lg:w-[50vw]'>
						<p className='lg:text-md text-xs '>Is this a Game Essay?</p>
						<Checkbox
							value={gameEssay}
							color="info"
							onClick={() => setGameEssay(!gameEssay)}
						/>

						<p className='lg:text-md text-xs '>Select the Game</p>
						<p className='lg:text-md text-xs '>Rating</p>
					</div>
					<div className='mb-0 flex w-full flex-row items-start lg:w-[50vw]'>
						<button
							type='button'
							onClick={() => setIsPreview(false)}
							className={`mr-0.5 rounded-t border-x border-t px-1 ${
								isPreview
									? 'border-neutral-600 text-neutral-600'
									: 'bg-neutral-200 text-neutral-600'
							}`}
						>
							Edit
						</button>
						<button
							type='button'
							onClick={() => setIsPreview(true)}
							className={`mr-0.5 rounded-t border-x border-t px-1 ${
								isPreview
									? 'bg-neutral-200 text-neutral-600'
									: 'border-neutral-600 text-neutral-600'
							}`}
						>
							Preview
						</button>
					</div>
					<div className='w-full lg:w-[50vw]'>
						<textarea
							className={`mt-0 h-[70vh] ${
								isPreview ? 'hidden' : ''
							} w-full rounded-r rounded-b bg-neutral-800 text-neutral-200 outline-0`}
							onChange={e => setEssayText(e.target.value)}
							value={essayText}
						/>
						<div
							className={`${
								isPreview ? '' : 'hidden'
							} h-[70vh] w-full rounded-r rounded-b bg-neutral-800 p-3 text-neutral-200 outline outline-1 outline-neutral-500`}
						>
							<ReactMarkdown>{essayText}</ReactMarkdown>
						</div>
					</div>
				</div>
				<div className=' hidden w-full flex-row justify-center'>
					<div className='flex flex-col'>
						<input
							placeholder='Title'
							className='mr-10 mb-2 rounded bg-neutral-800 p-2 text-neutral-200 outline outline-1 outline-neutral-500'
							onChange={e => setTitle(e.target.value)}
						/>
						<textarea
							className='mr-10 h-[70vh] w-[30vw] rounded bg-neutral-800 text-neutral-200 outline-0'
							onChange={e => setEssayText(e.target.value)}
							value={essayText}
						/>
					</div>
					<div className='h-[70vh] w-[30vw] rounded bg-neutral-800'>
						<ReactMarkdown>{essayText}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WriteReview
