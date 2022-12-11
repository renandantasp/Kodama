import type { ReactElement } from 'react'
import type { IGames } from 'types/generalTypes'
import GameCard from './gameCard'

export default function GameList({ games }: IGames | undefined): ReactElement {
	return (
		<div className='flex w-full flex-wrap items-center justify-around lg:flex-row'>
			{games.map(game => (
				<GameCard data={game} />
			))}
		</div>
	)
}
