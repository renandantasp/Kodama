import GetGameById from 'api/getGameById'
import type { ReactElement } from 'react'

interface Props {
	game_id: string
}

export default function Media({ game_id }: Props): ReactElement {
	const { isLoading, error, data } = GetGameById(game_id, 'screenshots')

	if (isLoading) return <div>calma</div>
	if (error) return <div>ERRROOOOOO</div>
	console.log('MEDIA APARECENDO!')
	return (
		<div className='lg:h-full relative flex h-[13em] flex-row overflow-x-auto overflow-y-hidden lg:flex-wrap lg:overflow-x-hidden'>
			{data.results.map(s => (
				<img className='mr-4 rounded-lg p-1' src={s.image} alt={s.id} />
			))}
		</div>
	)
}
