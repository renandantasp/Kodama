import type { ReactElement } from 'react'
import type { IGame } from 'types/generalTypes'
import PlatformList from './platformsList'

interface Props {
	game: IGame
}

function SearchGameEssayItem({ game }: Props): ReactElement {
	return (
		<button
			type='button'
			onClick={() => console.log(game.id)}
			className='flex flex-row rounded-b p-2 w-full hover:bg-white hover:text-black'
		>
			<img
				src={game.background_image}
				alt={game.name}
				className='h-[2rem] mr-4 w-[2rem] rounded object-cover'
			/>

			<div>
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
			</div>
		</button>
	)
}

export default SearchGameEssayItem
