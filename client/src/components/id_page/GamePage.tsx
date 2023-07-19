import type { IGame } from 'types/generalTypes'
import type { ReactElement } from 'react'

export default function GamePage({ game }: IGame): ReactElement {
	return (
		<div
			className={` h-128 w-screen bg-contain bg-center bg-[url('${game.background_image}')]`}
		>
			a
		</div>
	)
}
