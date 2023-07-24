import Ratings from 'components/id_page/ratings'
import Navbar from 'components/navbar'
import PlatformList from 'components/platformsList'
import Sidebar from 'components/sidebar'
import type { ReactElement } from 'react'
import type { IGame } from 'types/generalTypes'
import DateParser from 'utils/parser'

interface Props {
	game: IGame // Here, we define a prop called 'data' of type X
}

export default function GamePage({ game }: Props): ReactElement {
	console.log(game)
	return (
		<div className='w-full'>
			<Navbar />
			<Sidebar />
			<div className='lg:relative lg:mt-2 lg:pl-64'>
				<div className='pt-20 text-xs lg:mx-[19%] lg:pt-[8.5em]'>
					<div className='flex flex-col justify-start lg:flex-row'>
						<section className='w-full lg:w-[55%]'>
							<p className='mb-3 text-center text-[.7em] tracking-[.17em] text-neutral-400 lg:text-start'>
								{' '}
								HOME / GAMES / {game.name.toUpperCase()}{' '}
							</p>
							<div className='flex flex-row items-center justify-center text-[.9em] tracking-[.25em] lg:justify-start'>
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
							<h1 className='mb-6 mt-2 text-center text-4xl font-bold lg:text-start lg:text-7xl'>
								{game.name}
							</h1>
							<div className='mb-8 flex flex-col items-center lg:flex-row lg:justify-start'>
								<button
									type='button'
									className='mb-4 w-[14em] rounded bg-neutral-100 p-2 text-start lg:mr-4'
								>
									<p className='text-[.9em] text-neutral-400'> Add to </p>
									<p className='text-[1.5em] text-neutral-900'> My Games </p>
								</button>
								<button
									type='button'
									className='mb-4 w-[14em] rounded border p-2 text-start lg:mr-4'
								>
									<p className='text-[.9em] text-neutral-400'> Add to </p>
									<p className='text-[1.5em]'> My Wishlist </p>
								</button>
								<button
									type='button'
									className='w-[14em] rounded border p-2 text-start'
								>
									<p className='text-[.9em] text-neutral-400'> Save to </p>
									<p className='text-[1.5em]'> Collection </p>
								</button>
							</div>
							<Ratings rating={game.ratings} />
							<p className='text-sm'>{game.description_raw}</p>
						</section>
						<section className='w-full items-center justify-center text-center lg:ml-14'>
							<p>VIDEOS</p>
							<p>LOJAS</p>
							<p>SCREENSHOTS</p>
							<p>AND SHIT</p>
						</section>
					</div>
				</div>
			</div>
			<img
				src={game.background_image}
				alt={game.name}
				className='absolute top-0 -z-10 h-[100vh] w-full select-none object-cover object-top opacity-20'
			/>
			<div className='absolute top-0 -z-10 h-[100vh] w-full bg-gradient-to-t from-neutral-900 bg-no-repeat' />
		</div>
	)
}
