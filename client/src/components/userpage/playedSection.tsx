import type { ReactElement } from 'react'
import type { IUser } from 'types/generalTypes'
import SimpleGameCard from './simpleGameCard'

interface Props {
	user: IUser
}

function PlayedSection({ user }: Props): ReactElement {
	return (
		<div>
			<p className='text-center text-4xl font-bold lg:text-start'>
				Played Games
			</p>
			<div className='mt-4 flex flex-col flex-wrap lg:flex-row'>
				{user.played.map(gameId => (
					<SimpleGameCard gameId={gameId} />
				))}
			</div>
		</div>
	)
}

export default PlayedSection
