import type { ReactElement } from 'react'
import type { IGames } from 'types/generalTypes'
import GameCard from './gameCard'

export default function GameList({ games }: IGames | undefined): ReactElement {
	return (
		<div className='mx-6 flex flex-wrap items-start justify-around lg:flex-row'>
			{games.map(game => (
				<GameCard data={game} />
			))}
		</div>
	)
}
