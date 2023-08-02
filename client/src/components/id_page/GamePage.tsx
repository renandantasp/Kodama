import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import Media from 'components/id_page/media'
import Ratings from 'components/id_page/ratings'
import Navbar from 'components/navbar'
import PlatformList from 'components/platformsList'
import Sidebar from 'components/sidebar'
import StoreButtons from 'components/storeButtons'
import type { ReactElement } from 'react'
import { useEffect } from 'react'
import type { IGame } from 'types/generalTypes'
import DateParser from 'utils/parser'

interface Props {
	game: IGame
}

function FormatArray(arr : any[]): ReactJSXElement[] {
	return arr.map((element, index) =>
	(index === arr.length -1 ? 
		<a key={element.name} href={`/games/${element.slug}`} className='hover:text-neutral-500 duration-200'>{element.name}</a>
		:
		<a key={element.name} href={`/games/${element.slug}`}>
			<span key={element.id} className='hover:text-neutral-500 duration-200'>{element.name}</span>
			{', '}
		</a>
	)
	)
}

function FormatPlat(arr : any[]): ReactJSXElement[] {
	return arr.map((element, index) =>
	(index === arr.length -1 ? 
		<a key={element.name} href={`/games/${element.platform.slug}`} className='hover:text-neutral-500 duration-200'>{element.platform.name}</a>
		:
		<a key={element.name} href={`/games/${element.platform.slug}`}>
			<span key={element.name} className='hover:text-neutral-500 duration-200'>{element.platform.name}</span>
			{', '}
		</a>
	)
	)
}

export default function GamePage({ game }: Props): ReactElement {
	useEffect(() => {
    document.title = game.name;
  }, []);
	const descr = <div dangerouslySetInnerHTML={{ __html: game.description }} />
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
										{DateParser(game.released).toUpperCase()}
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
								<h3 className='text-xl mb-1 font-medium'>About</h3>
								<div className='text-sm mb-8'>{descr}</div>
								<div className='flex flex-row flex-wrap justify-start'>
									<div className='w-[50%] my-2'>
										<p className='text-neutral-600 mb-2'>Plaform</p>
										<div className='text-sm pr-4'>
										{FormatPlat(game.platforms)}
										</div>
									</div>
									{game.metacritic ?
										<div className=' w-[50%] my-4'>
											<p className='text-neutral-600 mb-2'>Metascore</p>
											<p className='rounded border w-fit border-lime-500 px-1.5 text-sm font-medium text-lime-500'>
												{game.metacritic}
											</p>
										</div> 
										:
										<div/>
									}
									<div className=' w-[50%] my-2'>
										<p className='text-neutral-600 mb-2'>Genre</p>
										<div className='text-sm pr-4 '>
											{FormatArray(game.genres)}
										</div>
									</div>
									<div className=' w-[50%] my-2'>
										<p className='text-neutral-600 mb-2'>Release Date</p>
										<p className='text-sm'>{DateParser(game.released)}</p>
									</div>
									<div className=' w-[50%] my-2'>
										<p className='text-neutral-600 mb-2'>Developer</p>
										<div className='text-sm pr-4 '>
											{FormatArray(game.developers)}
										</div>
									</div>
									<div className=' w-[50%] my-2'>
										<p className='text-neutral-600 mb-2'>Publisher</p>
										<div className='text-sm pr-4 ' >
											{FormatArray(game.publishers)}
										</div>
									</div>
									<div className=' w-[50%] my-2'>
										<p className='text-neutral-600 mb-2'>Rating</p>
										<p className='text-sm'>{game.esrb_rating.name}</p>
									</div>
								</div>
							</div>
						</section>
						<section className='flex flex-col lg:w-[45%]'>
							<div className='hidden lg:block'>
								<Media game_id={game.slug} />
							</div>
								<p className='text-neutral-500 lg:text-start text-center lg:px-8 py-4 text-lg '>Where to buy</p>
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
