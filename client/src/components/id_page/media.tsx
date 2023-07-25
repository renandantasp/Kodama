import GetGameById from 'api/getGameById'
import type { ReactElement } from 'react'

interface Props {
	game_id: string
}

export default function Media({ game_id }: Props): ReactElement {
	const { isLoading, error, data } = GetGameById(game_id, 'screenshots')

	if (isLoading) return <div>calma</div>
	if (error) return <div>ERRROOOOOO</div>
	console.log(data)
	return (
		<div className='relative overflow-x-auto flex h-[13em] flex-row'>
			{data.results.map(s => (
				<img className='mr-4 p-1 rounded-lg' src={s.image} alt={s.id} />
			))}
		</div>
	)
}
