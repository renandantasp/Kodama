import type { ReactElement } from 'react'

export default function GameVideo({ game, img_game }): ReactElement {
	return (
		<div className='aspect-w-16 aspect-h-9'>
			<img src={img_game} alt={game} className='rounded-t-lg object-cover' />
		</div>
	)
}
