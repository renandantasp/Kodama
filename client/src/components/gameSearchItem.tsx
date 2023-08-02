import type { ReactElement } from 'react'
import type { IGame } from 'types/generalTypes'
import PlatformList from './platformsList'

interface Props {
	game: IGame
}

function GameSearchItem({ game }: Props): ReactElement {
	return (
		<div className='flex flex-row rounded p-2 hover:bg-white hover:text-black'>
			<img
				src={game.background_image}
				alt={game.name}
				className=' h-14 mr-4 w-10 rounded object-cover'
			/>

			<a href={`/games/${game.slug}`}>
				<div className='text-[0.75em]'>
					{game.platforms === null ? (
						<div />
					) : (
						<PlatformList
							slugs={game.parent_platforms.map(p => p.platform.slug)}
						/>
					)}
				</div>
				<p>{game.name}</p>
			</a>
		</div>
	)
}

export default GameSearchItem
