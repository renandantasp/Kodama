import type { ReactElement } from 'react'
import type { IGame } from '../types/generalTypes'
import GameCard from './gameCard'

interface Properties {
	games: [IGame]
}

export default function GameList({ games }: Properties): ReactElement {
	return (
		<div className='mx-6 flex flex-col flex-wrap items-center justify-around lg:flex-row lg:items-start'>
			{games.map((game: IGame) => (
				<GameCard key={game.name} data={game} />
			))}
		</div>
	)
}
