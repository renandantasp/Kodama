import type { ReactElement } from 'react'
import type { IUser } from 'types/generalTypes'
import SimpleGameCard from './simpleGameCard'

interface Props {
	user: IUser
}

function BacklogSection({ user }: Props): ReactElement {
	return (
		<div className='flex w-full flex-col'>
			<p className='pl-0 text-center text-4xl font-bold lg:pl-4 lg:text-start'>
				Backlog Games
			</p>
			<div className='mt-4 flex w-full flex-col flex-wrap lg:flex-row'>
				{user.backlog.map(gameId => (
					<SimpleGameCard gameId={gameId} />
				))}
			</div>
		</div>
	)
}

export default BacklogSection
