import type { ReactElement } from 'react'
import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im'

interface Props {
	activation: number
	value: number
	actFunction: React.Dispatch<React.SetStateAction<number>>
}

function RatingButton({ activation, value, actFunction }: Props): ReactElement {
	let setValue = activation + 1
	if (value <= activation || value > activation + 1) {
		setValue = activation + 1
	} else {
		setValue = activation
	}
	return (
		<button
			type='button'
			onClick={() => actFunction(setValue)}
			className='mr-1 text-xl text-amber-400'
		>
			{value < activation ? (
				<div className='text-neutral-500'>
					<ImStarEmpty />
				</div>
			) : null}
			{value === activation ? <ImStarHalf /> : null}
			{value >= activation + 1 ? <ImStarFull /> : null}
		</button>
	)
}

export default RatingButton
