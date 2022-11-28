import type { ReactElement } from 'react'
import type { IGame } from 'types/generalTypes'

export default function GameCard({ data }: unknown): ReactElement {
	const game: IGame = data as IGame
	return (
		<div className='m-4 h-80 w-1/2 rounded-lg bg-neutral-800 lg:w-72'>
			<img
				className='h-1/2 min-w-full  overflow-hidden rounded-t-lg object-cover object-top'
				src={game.background_image}
				alt={`${game.name} Cover`}
			/>
			<div className='p-3'>
				<p className='text-2xl font-bold'>{game.name}</p>
			</div>
		</div>
	)
}
