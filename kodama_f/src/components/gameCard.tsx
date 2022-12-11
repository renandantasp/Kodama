import type { ReactElement } from 'react'

import type { IGame } from 'types/generalTypes'
import GameVideo from './gameVideo'
import PlatformList from './platformsList'

export default function GameCard({ data }: unknown): ReactElement {
	const game: IGame = data as IGame

	return (
		<div className='m-4 w-72 rounded-lg bg-neutral-800'>
			<GameVideo game={game.name} img_game={game.background_image} />
			<div className='p-2 pb-8'>
				<PlatformList slugs={game.parent_platforms.map(p => p.platform.slug)} />
				<p className='text-2xl font-bold'>{game.name}</p>
			</div>
		</div>
	)
}
