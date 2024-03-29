/* eslint-disable import/no-deprecated */
import type { ReactElement } from 'react'
import type { IGame } from '../../types/generalTypes'
import GameCard from './gameCard'

interface Props {
	games: IGame[]
}

export default function GameList({ games }: Props): ReactElement {
	return (
		<div className='flex flex-col flex-wrap items-center justify-between lg:mr-6 lg:flex-row lg:items-start'>
			{games.map((game: IGame) => (
				<GameCard key={game.id} data={game} />
			))}
		</div>
	)
}
