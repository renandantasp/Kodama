import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import Media from 'components/id_page/media'
import Ratings from 'components/id_page/ratings'
import Navbar from 'components/navigation/navbar'
import Sidebar from 'components/navigation/sidebar'
import PlatformList from 'components/platformsList'
import StoreButtons from 'components/storeButtons'
import { useAuth } from 'contexts/AuthContext'
import { ToggleBacklog, TogglePlayed } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import type { IGame } from 'types/generalTypes'
import { ReleaseDateParser } from 'utils/parser'

interface Props {
	game: IGame
}

function FormatArray(path: string, arr: any[]): ReactJSXElement[] {
	return arr.map((element, index) =>
		index === arr.length - 1 ? (
			<a
				key={element.name}
				href={`/${path}/${element.slug}`}
				className='duration-200 hover:text-neutral-500'
			>
				{element.name}
			</a>
		) : (
			<a key={element.name} href={`/${path}/${element.slug}`}>
				<span key={element.id} className='duration-200 hover:text-neutral-500'>
					{element.name}
				</span>
				{', '}
			</a>
		)
	)
}

function FormatPlat(arr: any[]): ReactJSXElement[] {
	return arr.map((element, index) =>
		index === arr.length - 1 ? (
			<a
				key={element.name}
				href={`/games/${element.platform.slug}`}
				className='duration-200 hover:text-neutral-500'
			>
				{element.platform.name}
			</a>
		) : (
			<a key={element.name} href={`/platform/${element.platform.slug}`}>
				<span
					key={element.name}
					className='duration-200 hover:text-neutral-500'
				>
					{element.platform.name}
				</span>
				{', '}
			</a>
		)
	)
}

export default function GamePage({ game }: Props): ReactElement {
	useEffect(() => {
		document.title = game.name
	}, [])

	const { user } = useAuth()
	const descr = <div dangerouslySetInnerHTML={{ __html: game.description }} />

	const p = user === null ? false : user.played.includes(game.id)
	const [played, setPlayed] = useState(p)

	const b = user === null ? false : user.backlog.includes(game.id)
	const [backlog, setBacklog] = useState(b)

	useEffect(() => {
		const p = user === null ? false : user.played.includes(game.id)
		const b = user === null ? false : user.backlog.includes(game.id)

		setPlayed(p)
		setBacklog(b)
	}, [user])

	return (
		<div className='w-full'>
			<Navbar />
			<Sidebar />
			<div className='lg:relative lg:mt-2  lg:pl-64'>
				<div className='pt-4 text-xs lg:mx-[19%] lg:pt-0'>
					<div className='flex w-full flex-col justify-start px-8 lg:flex-row lg:px-0'>
						<section className='flex flex-col lg:w-[55%] '>
							<div className='my-2 w-full'>
								<p className='mb-3 text-center text-[.7em] tracking-[.17em] text-neutral-400 lg:text-start'>
									HOME / GAMES / {game.name.toUpperCase()}
								</p>
								<div className='flex flex-row  flex-wrap items-center justify-center text-[.9em] tracking-[.25em] lg:justify-start'>
									<p className='mr-4 w-fit rounded bg-neutral-100 py-0.5 px-1 text-neutral-900'>
										{ReleaseDateParser(game.released).toUpperCase()}
									</p>
									<div className='mx-1 lg:text-lg'>
										<PlatformList
											slugs={game.parent_platforms.map(p => p.platform.slug)}
										/>
									</div>
									<p className='text-neutral-100'>
										AVERAGE PLAYTIME: {game.playtime} HOURS
									</p>
								</div>
								<h1 className='mb-2 mt-2 text-center text-4xl font-bold lg:text-start lg:text-7xl'>
									{game.name}
								</h1>
							</div>
							<div className='lg:hidden'>
								<Media game_id={game.slug} />
							</div>
							<div className='my-4 w-full lg:w-[90%]'>
								<div className='mb-8 flex flex-col items-center  lg:flex-row lg:justify-start'>
									{localStorage.getItem('hasUser') === '1' ? (
										<div className='flex w-full flex-col lg:flex-row items-center'>
											<button
												type='button'
												onClick={async () =>
													TogglePlayed(user.username, game.id, setPlayed)
												}
												className={`mb-3 w-full rounded p-2 px-4 text-start lg:mr-4 lg:w-[33%]  
										${played === undefined ? 'hidden' : null}  ${
													played ? 'bg-lime-500' : 'bg-neutral-200'
												}`}
											>
												<div className={`${played ? 'hidden' : ''}`}>
													<p className='text-[.9em] text-neutral-400 '>
														{' '}
														Add to{' '}
													</p>
													<p className='text-[1.5em] text-neutral-900'>
														Played
													</p>
												</div>
												<div
													className={`flex flex-row items-center justify-center 
											${!played ? 'hidden' : ''}`}
												>
													<div className='mr-1 text-xl text-neutral-200'>
														<BiCheckCircle />
													</div>
													<p className='py-2 text-[1.5em] text-neutral-200'>
														Played
													</p>
												</div>
											</button>
											<button
												type='button'
												onClick={async () =>
													ToggleBacklog(user.username, game.id, setBacklog)
												}
												className={`${
													backlog === undefined ? 'hidden' : null
												} ${
													backlog ? 'bg-lime-500' : 'outline outline-1'
												}  mb-3 w-full rounded p-2 px-4 text-start lg:mr-4 lg:w-[23%]`}
											>
												{backlog ? (
													<div className='flex flex-row items-center justify-center '>
														<div className='mr-1 text-xl text-neutral-200'>
															<BiCheckCircle />
														</div>
														<p className='py-2 text-[1.5em] text-neutral-200'>
															Backlog
														</p>
													</div>
												) : (
													<div>
														<p className='text-[.9em] text-neutral-400'>
															{' '}
															Add to{' '}
														</p>
														<p className='text-[1.5em]'> Backlog </p>
													</div>
												)}
											</button>
										</div>
									) : (
										<div className='flex w-full flex-col lg:flex-row items-center whitespace-nowrap'>
											<a
												href='/auth/login'
												className='mb-3 w-full rounded bg-neutral-200 p-2 px-6 text-start text-lg text-neutral-900 lg:mr-4 lg:w-[33%]'
											>
												Add to Played
											</a>
											<a
												href='/auth/login'
												className='mb-3 w-full rounded p-2 px-6 text-start text-lg outline outline-1 outline-neutral-200 lg:mr-4 lg:w-[33%]'
											>
												Add to Backlog
											</a>
										</div>
									)}
								</div>
								<Ratings rating={game.ratings} />
								<h3 className='mb-1 text-xl font-medium'>About</h3>
								<div className='mb-8 text-sm'>{descr}</div>
								<div className='flex flex-row flex-wrap justify-start'>
									<div className='my-2 w-[50%]'>
										<p className='mb-2 text-neutral-600'>Plaform</p>
										<div className='pr-4 text-sm'>
											{FormatPlat(game.platforms)}
										</div>
									</div>
									{game.metacritic ? (
										<div className=' my-4 w-[50%]'>
											<p className='mb-2 text-neutral-600'>Metascore</p>
											<p className='w-fit rounded border border-lime-500 px-1.5 text-sm font-medium text-lime-500'>
												{game.metacritic}
											</p>
										</div>
									) : (
										<div />
									)}
									<div className=' my-2 w-[50%]'>
										<p className='mb-2 text-neutral-600'>Genre</p>
										<div className='pr-4 text-sm '>
											{FormatArray('genre', game.genres)}
										</div>
									</div>
									<div className=' my-2 w-[50%]'>
										<p className='mb-2 text-neutral-600'>Release Date</p>
										<p className='text-sm'>
											{ReleaseDateParser(game.released)}
										</p>
									</div>
									<div className=' my-2 w-[50%]'>
										<p className='mb-2 text-neutral-600'>Developer</p>
										<div className='pr-4 text-sm '>
											{FormatArray('developer', game.developers)}
										</div>
									</div>
									<div className=' my-2 w-[50%]'>
										<p className='mb-2 text-neutral-600'>Publisher</p>
										<div className='pr-4 text-sm '>
											{FormatArray('publisher', game.publishers)}
										</div>
									</div>
									<div className=' my-2 w-[50%]'>
										<p className='mb-2 text-neutral-600'>Rating</p>
										<p className='text-sm'>
											{game.esrb_rating !== null
												? game.esrb_rating.name
												: 'Not Rated'}
										</p>
									</div>
								</div>
							</div>
						</section>
						<section className='flex flex-col lg:w-[45%]'>
							<div className='hidden lg:block'>
								<Media game_id={game.slug} />
							</div>
							<p className='py-4 text-center text-lg text-neutral-500 lg:px-8 lg:text-start '>
								Where to buy
							</p>
							<StoreButtons stores={game.stores} />
						</section>
					</div>
				</div>
			</div>
			<img
				src={game.background_image}
				alt={game.name}
				className='absolute top-0 -z-10 h-[100vh] w-full select-none object-cover object-top opacity-20'
			/>
			<div className='absolute top-0 -z-10 h-[100vh] w-full bg-gradient-to-t from-neutral-900 via-neutral-900 bg-no-repeat' />
		</div>
	)
}
