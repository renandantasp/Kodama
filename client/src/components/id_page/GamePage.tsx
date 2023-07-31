import Media from 'components/id_page/media'
import Ratings from 'components/id_page/ratings'
import Navbar from 'components/navbar'
import PlatformList from 'components/platformsList'
import Sidebar from 'components/sidebar'
import type { ReactElement } from 'react'
import type { IGame } from 'types/generalTypes'
import DateParser from 'utils/parser'

interface Props {
	game: IGame
}

export default function GamePage({ game }: Props): ReactElement {
	const descr = <div dangerouslySetInnerHTML={{ __html: game.description }} />
	return (
		<div className='w-full'>
			<Navbar />
			<Sidebar />
			<div className='lg:relative lg:mt-2 lg:pl-64'>
				<div className='pt-4 text-xs lg:mx-[19%] lg:pt-[8.5em]'>
					<div className='flex w-full flex-col justify-start px-8 lg:flex-row lg:px-0'>
						<section className='flex flex-col lg:w-[55%] '>
							<div className='my-2 w-full'>
								<p className='mb-3 text-center text-[.7em] tracking-[.17em] text-neutral-400 lg:text-start'>
									HOME / GAMES / {game.name.toUpperCase()}
								</p>
								<div className='flex flex-row  flex-wrap items-center justify-center text-[.9em] tracking-[.25em] lg:justify-start'>
									<p className='mr-4 w-fit rounded bg-neutral-100 py-0.5 px-1 text-neutral-900'>
										{DateParser(game.released)}
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
									<button
										type='button'
										className='mb-3 w-full rounded bg-neutral-100 p-2 px-4 text-start lg:mr-4 lg:w-[33%]'
									>
										<p className='text-[.9em] text-neutral-400'> Add to </p>
										<p className='text-[1.5em] text-neutral-900'> My Games </p>
									</button>
									<button
										type='button'
										className='mb-3 w-full rounded border p-2 px-4 text-start lg:mr-4 lg:w-[23%]'
									>
										<p className='text-[.9em] text-neutral-400'> Add to </p>
										<p className='text-[1.5em]'> Wishlist </p>
									</button>
									<button
										type='button'
										className='mb-4 w-full  p-2 px-4 text-center lg:w-[23%]  lg:text-start'
									>
										<div className='flex flex-row justify-center lg:flex-col'>
											<p className='text-[1.5em] text-neutral-400 lg:text-[.9em]'>
												Save to
											</p>
											<p className='ml-1 text-[1.5em] lg:ml-0'> Collection </p>
										</div>
									</button>
								</div>
								<Ratings rating={game.ratings} />
								<h3 className='text-xl font-medium'>About</h3>
								<div className='text-sm'>{descr}</div>
							</div>
						</section>
						<section className='flex flex-row lg:w-[45%]'>
							<div className='hidden lg:block'>
								<Media game_id={game.slug} />
							</div>
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
