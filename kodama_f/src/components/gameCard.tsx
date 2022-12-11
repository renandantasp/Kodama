import type { ReactElement } from 'react'

import { AiOutlineGift, AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import type { IGame } from 'types/generalTypes'
import GameVideo from './gameVideo'
import PlatformList from './platformsList'

export default function GameCard({ data }: unknown): ReactElement {
	const game: IGame = data as IGame

	return (
		<div className='group m-4 w-96 rounded-lg bg-neutral-800 duration-300 ease-in-out hover:z-30 hover:rounded-b-none lg:w-72 lg:hover:scale-105'>
			<GameVideo game={game.name} img_game={game.background_image} />
			<div className='p-2 pb-4'>
				<PlatformList slugs={game.parent_platforms.map(p => p.platform.slug)} />
				<p className='text-2xl font-bold'>{game.name}</p>
				<div className='flex flex-row'>
					<button className='mr-2 flex flex-row items-center rounded bg-neutral-700 p-1 text-xs text-white duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-800'>
						<AiOutlinePlus /> {game.suggestions_count}
					</button>
					<button className='mr-2 items-center rounded bg-neutral-700 p-1 px-2 text-white duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-800 group-hover:opacity-100 lg:invisible lg:opacity-0 lg:group-hover:visible'>
						<AiOutlineGift />
					</button>
					<button className='mr-2 items-center rounded bg-neutral-700 p-1 px-2 text-white duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-800 group-hover:opacity-100 lg:invisible lg:opacity-0 lg:group-hover:visible'>
						<BiDotsHorizontalRounded />
					</button>
				</div>
			</div>
			<div className='h-0 invisible absolute flex w-full flex-col rounded-b-lg bg-neutral-800 px-2 pt-1 opacity-0 duration-300 ease-in-out group-hover:py-4 group-hover:opacity-100 lg:group-hover:visible'>
				<div className='flex flex-row justify-between py-1'>
					<p className='text-xs text-neutral-500'>Release date:</p>
					<p className='text-xs text-neutral-200'>{game.released}</p>
				</div>
				<div className='my-1 w-full border-t border-solid border-neutral-500 ' />
				<div className='flex flex-row justify-between py-1'>
					<p className='text-xs text-neutral-500'>Genres:</p>
					<p className='text-xs text-neutral-200'>
						{game.genres.map(genre => genre.name).join(', ')}
					</p>
				</div>
				<a
					href='/'
					className='mt-4 mb-2 w-full rounded bg-neutral-700 p-2 text-sm text-neutral-300 duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-700'
				>
					Show more like this
				</a>
			</div>
		</div>
	)
}
