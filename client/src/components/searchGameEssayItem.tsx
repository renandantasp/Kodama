import type { ReactElement } from 'react'
import type { IGame } from 'types/generalTypes'
import PlatformList from './platformsList'

interface Props {
	game: IGame
	setG: React.Dispatch<React.SetStateAction<IGame | null>>
	setQ: React.Dispatch<React.SetStateAction<string>>
}

function SearchGameEssayItem({ game, setG, setQ }: Props): ReactElement {
	function setGame(gameElement: IGame): void {
		setG(gameElement)
		setQ('')
	}
	return (
		<button
			type='button'
			onClick={() => setGame(game)}
			className='flex w-full flex-row rounded-b p-2 hover:bg-white hover:text-black'
		>
			<img
				src={game.background_image}
				alt={game.name}
				className='mr-4 h-[2rem] w-[2rem] rounded object-cover'
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
