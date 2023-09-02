import type { ReactElement } from 'react'

interface Props {
	game: string
	img_game: string
}

export default function GameVideo({ game, img_game }: Props): ReactElement {
	console.log(img_game)
	return (
		<div className='aspect-w-16 aspect-h-9'>
			{img_game !== null ? (
				<img src={img_game} alt={game} className='rounded-t-lg object-cover' />
			) : (
				<img
					src='/notFound.jpeg'
					alt={game}
					className='rounded-t-lg object-cover'
				/>
			)}
		</div>
	)
}
