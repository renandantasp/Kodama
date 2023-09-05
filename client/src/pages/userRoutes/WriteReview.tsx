import Navbar from 'components/navigation/navbar'
import RatingButton from 'components/ratingButton'
import SearchGameEssay from 'components/searchGameEssay'
import { useAuth } from 'contexts/AuthContext'
import { CreateEssay } from 'fbRequests/firebaseRequests'
import { Guid } from 'guid-typescript'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import type { IEssay, IGame } from 'types/generalTypes'

function WriteReview(): ReactElement {
	const { user } = useAuth()
	const navigate = useNavigate()

	const [essayText, setEssayText] = useState('')
	const [title, setTitle] = useState('')
	const [isPreview, setIsPreview] = useState(false)
	const [gameEssay, setGameEssay] = useState(false)
	const [rating, setRating] = useState(5)
	const [gameObj, setGameObj] = useState<IGame | null>(null)

	const essay: IEssay = {
		gameId: null,
		essayTitle: title,
		essayText,
		essayCreated: new Date(),
		isGame: false,
		rating: null
	}

	function SaveEssay(): void {
		CreateEssay(user?.username, essay).then(() => navigate('/'))
	}

	useEffect(() => {
		essay.essayTitle = title
		essay.essayText = essayText
		essay.essayCreated = new Date()
		essay.isGame = gameEssay

		if (gameEssay) {
			essay.rating = rating
		} else {
			essay.rating = null
		}
		if (gameObj) {
			essay.gameId = gameObj.id
		}
	}, [essayText, title, gameEssay, rating, gameObj])

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
								{gameObj === null ? (
									<div>
										<SearchGameEssay setGame={setGameObj} />
									</div>
								) : (
									<div>
										<div className='my-4 flex flex-row items-start'>
											<img
												className='mr-2 h-[5rem] w-[5rem] rounded-lg object-cover'
												src={gameObj.background_image}
												alt={gameObj.name}
											/>
											<div className='flex flex-col'>
												<div className='h-fit flex flex-row items-center'>
													<p className='mr-2 text-xl font-medium'>
														{gameObj.name}
													</p>
													<button
														type='button'
														onClick={() => setGameObj(null)}
														className='text-xl text-neutral-200'
													>
														<AiFillCloseCircle />
													</button>
												</div>
											</div>
										</div>
										<div className='flex flex-row'>
											<div className='mr-1 text-lg'>Rating:</div>
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
								)}
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
							} h-fit min-h-[70vh] w-full rounded-r rounded-b bg-neutral-900 p-3 text-neutral-200 outline outline-1 outline-neutral-700`}
						>
							<ReactMarkdown>{essayText}</ReactMarkdown>
						</div>
						<div className='flex w-full justify-end'>
							<button
								type='button'
								disabled={gameObj === null && gameEssay}
								onClick={() => SaveEssay()}
								className={`my-3 w-full rounded-lg p-1 px-2 text-neutral-900 lg:w-fit  ${
									gameObj === null && gameEssay
										? 'cursor-default bg-neutral-400'
										: 'cursor-pointer bg-neutral-200'
								}`}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WriteReview
