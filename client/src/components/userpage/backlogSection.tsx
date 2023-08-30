import { useAuth } from 'contexts/AuthContext'
import type { ReactElement } from 'react'
import SimpleGameCard from './simpleGameCard'

function PlayedSection(): ReactElement {
	const { user } = useAuth()

	return (
		<div>
			<p className='text-4xl text-center lg:text-start font-bold'>Backlog Games</p>
			<div className='mt-4 flex flex-col lg:flex-row'>
				{user?.backlog.map(gameId => (
					<SimpleGameCard gameId={gameId} />
				))}
			</div>
		</div>
	)
}

export default PlayedSection
