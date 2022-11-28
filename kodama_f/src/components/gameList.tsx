import type { ReactElement } from 'react'
import type { IGames } from 'types/generalTypes'
import GameCard from './gameCard'

export default function GameList({ games }: IGames | undefined): ReactElement {
	return (
		<div className='flex flex-col flex-wrap items-center justify-center lg:flex-row'>
			{games.map(game => (
				<GameCard data={game} />
			))}
		</div>
	)
}
