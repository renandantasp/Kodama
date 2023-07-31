import type { ReactElement } from 'react'
import type { IGame } from 'types/generalTypes'

interface Props {
	data: IGame
}

export default function GameCard({ data }: Props): ReactElement {
	return (
		<div className='flex w-full flex-col rounded-b-lg bg-neutral-800 px-2 py-4'>
			<div className='flex flex-row justify-between py-1'>
				<p className='text-xs text-neutral-500'>Release date:</p>
				<p className='text-xs text-neutral-200'>{data.released}</p>
			</div>
			<div className='my-1 w-full border-t border-solid border-neutral-500 ' />
			<div className='flex flex-row justify-between py-1'>
				<p className='text-xs text-neutral-500'>Genres:</p>
				<p className='text-xs text-neutral-200'>
					{data.genres.map(genre => genre.name).join(', ')}
				</p>
			</div>
			<a
				href='/'
				className='my-4 mb-2 w-full rounded bg-neutral-700 p-2 text-sm text-neutral-300 duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-700'
			>
				Show more like this
			</a>
		</div>
	)
}
