import Navbar from 'components/navigation/navbar'
import RatingButton from 'components/ratingButton'
import SearchGameEssay from 'components/searchGameEssay'
import type { ReactElement } from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function WriteReview(): ReactElement {
	const [essayText, setEssayText] = useState('')
	const [title, setTitle] = useState('')
	const [isPreview, setIsPreview] = useState(false)
	const [gameEssay, setGameEssay] = useState(false)
	const [rating, setRating] = useState(1)
	const [gameId, setGameId] = useState('')
	const checkboxColor = {
		main: '#fff',
		light: '#aaa',
		dark: '#fff',
		contrastText: '#fff'
	}

	return (
		<div>
			<Navbar />
			<div className='flex w-full flex-col items-center justify-center px-10'>
				<p className='mb-10 mt-4 text-center text-3xl font-bold'>
					Write your Essay!{' '}
					<span className='text-neutral-500'>Still in development</span>
				</p>
				<div className='flex w-full flex-col items-center justify-center'>
					<input
						placeholder='My New Essay'
						value={title}
						className='mb-4 w-full rounded-t border-b border-neutral-600 bg-neutral-900 p-5 pb-1 pl-3 text-2xl font-medium text-neutral-200 placeholder:text-neutral-500 lg:w-[50vw]'
						onChange={e => setTitle(e.target.value)}
					/>
					<div className='my-6 w-full rounded bg-neutral-900 lg:w-[50vw]'>
						<div className='flex flex-row items-center'>
							<button
								type='button'
								onClick={() => setGameEssay(!gameEssay)}
								className={`rounded-full p-1 px-2 text-sm ${
									gameEssay
										? 'bg-white text-neutral-900'
										: 'outline outline-1 outline-neutral-500'
								}`}
							>
								{gameEssay ? 'Game Essay' : 'Generic Essay'}
							</button>
						</div>
						{gameEssay ? (
							<div>
								<SearchGameEssay />
								<div className='flex flex-row'>
									<RatingButton
										value={rating}
										activation={1}
										actFunction={setRating}
									/>
									<RatingButton
										value={rating}
										activation={3}
										actFunction={setRating}
									/>
									<RatingButton
										value={rating}
										activation={5}
										actFunction={setRating}
									/>
									<RatingButton
										value={rating}
										activation={7}
										actFunction={setRating}
									/>
									<RatingButton
										value={rating}
										activation={9}
										actFunction={setRating}
									/>
								</div>
							</div>
						) : null}
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
							} w-full rounded-r rounded-b border-0 bg-neutral-900 text-neutral-200 outline outline-1 outline-neutral-700 focus:ring-1 focus:ring-neutral-700`}
							onChange={e => setEssayText(e.target.value)}
							value={essayText}
						/>
						<div
							className={`${
								isPreview ? '' : 'hidden'
							} h-[70vh] w-full rounded-r rounded-b bg-neutral-900 p-3 text-neutral-200 outline outline-1 outline-neutral-700`}
						>
							<ReactMarkdown>{essayText}</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WriteReview
