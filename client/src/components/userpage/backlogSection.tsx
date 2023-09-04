import type { ReactElement } from 'react'
import type { IUser } from 'types/generalTypes'
import SimpleGameCard from './simpleGameCard'

interface Props {
	user: IUser
}

function BacklogSection({ user }: Props): ReactElement {
	return (
		<div>
			<p className='text-center text-4xl font-bold lg:text-start'>
				Backlog Games
			</p>
			<div className='mt-4 flex flex-col lg:flex-row'>
				{user.backlog.map(gameId => (
					<SimpleGameCard gameId={gameId} />
				))}
			</div>
		</div>
	)
}

export default BacklogSection
