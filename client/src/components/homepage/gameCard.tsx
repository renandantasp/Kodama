import type { ReactElement } from 'react'
import { useState } from 'react'

import { AiOutlineGift, AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import type { IGame } from 'types/generalTypes'
import PlatformList from '../platformsList'
import GameCardDetails from './gameCardDetails'
import GameVideo from './gameVideo'

interface Properties {
	data: IGame
}

export default function GameCard({ data }: Properties): ReactElement {
	const game: IGame = data
	const [viewMore, setViewMore] = useState(false)
	const onToggleView = (): void => {
		setViewMore(!viewMore)
	}

	return (
		<div className='group my-4 w-[22em] rounded-lg bg-neutral-800 duration-300 ease-in-out hover:z-10 hover:rounded-b-none lg:w-[24rem] lg:rounded-b-lg lg:hover:scale-105'>
			<GameVideo game={game.name} img_game={game.background_image} />
			<div className='p-4'>
				<div className='flex items-center justify-between'>
					<PlatformList
						slugs={game.parent_platforms.map(p => p.platform.slug)}
					/>
					<p className='rounded border border-lime-500 px-1.5 text-sm font-medium text-lime-500'>
						{game.metacritic}
					</p>
				</div>
				<a href={`games/${game.slug}`} className='text-2xl font-bold'>
					{game.name}
				</a>
				<div className='mt-2 flex flex-row'>
					<button
						type='button'
						className='mr-2 flex flex-row items-center rounded bg-neutral-700 p-1 text-xs text-white duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-800'
					>
						<AiOutlinePlus /> {game.suggestions_count}
					</button>
					<button
						type='button'
						className='mr-2 items-center rounded bg-neutral-700 p-1 px-2 text-white duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-800 group-hover:opacity-100 lg:invisible lg:opacity-0 lg:group-hover:visible'
					>
						<AiOutlineGift />
					</button>
					<button
						type='button'
						className='mr-2 items-center rounded bg-neutral-700 p-1 px-2 text-white duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-800 group-hover:opacity-100 lg:invisible lg:opacity-0 lg:group-hover:visible'
					>
						<BiDotsHorizontalRounded />
					</button>
				</div>
			</div>
			{viewMore ? (
				<GameCardDetails data={game} />
			) : (
				<div className='absolute hidden w-full opacity-0 duration-300 ease-in-out group-hover:opacity-100 lg:group-hover:flex'>
					<GameCardDetails data={game} />
				</div>
			)}
			<button
				type='button'
				onClick={onToggleView}
				className='w-full rounded-b-lg p-2 pb-4 text-center text-xs underline lg:hidden'
			>
				Show more
			</button>
		</div>
	)
}
