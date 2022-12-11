import GetGames from 'api/getGames'
import GameList from 'components/gameList'
import type { ReactElement } from 'react'

export default function Homepage(): ReactElement {
	const { isLoading, error, data } = GetGames()
	if (isLoading) return <div>calma</div>
	if (error) return <div>ERRROOOOOO</div>

	return (
		<div>
			<div className='mb-4'>
				<h1 className='mb-2 text-center text-3xl font-bold lg:text-start lg:text-6xl'>
					New and trending
				</h1>
				<h3 className='text-center text-sm lg:text-start'>
					Based on player counts and release date
				</h3>
			</div>
			{/* ordering/filtering components */}

			<GameList games={data.results} />
		</div>
	)
}
