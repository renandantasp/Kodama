import type { ReactElement } from 'react'
import { AiOutlineComment, AiOutlinePlus } from 'react-icons/ai'
import type { IRating } from 'types/generalTypes'

interface Props {
	rating: IRating[]
}

export default function Ratings({ rating }: Props): ReactElement {
	const configs = {
		exceptional: {
			color: 'bg-gradient-to-t from-emerald-700 to-lime-400',
			emoji: ' 🎯 '
		},
		recommended: {
			color: 'bg-gradient-to-t from-indigo-700 to-cyan-400',
			emoji: '👍'
		},
		meh: {
			color: 'bg-gradient-to-t from-orange-700 to-yellow-400',
			emoji: '😐'
		},
		skip: {
			color: 'bg-gradient-to-t from-red-900 to-rose-500 ',
			emoji: '⛔️'
		}
	}
	const sizes = ['w-[40%]', 'w-[30%]', 'w-[20%]', 'w-[10%]']
	const rounded = ['rounded-l', '', '', 'rounded-r']

	const cl = rating.map(
		(r, index) =>
			`h-full ${configs[r.title].color} ${sizes[index]} ${rounded[index]}`
	)

	const bars = rating.map((r, index) => (
		<div key={r.id} className={cl[index]}>
			<p className='relative top-2 text-4xl'>
				{r.percent >= 25 ? configs[r.title].emoji : ''}
			</p>
		</div>
	))

	return (
		<div className='flex w-full mb-8 flex-col items-center lg:items-start'>
			<div className='mb-6 flex flex-col items-center lg:items-start'>
				<p className='mb-1 text-xl font-bold tracking-[.1em]'>
					{rating[0].title[0].toUpperCase() + rating[0].title.slice(1)}{' '}
					<span>{configs[rating[0].title].emoji}</span>
				</p>
				<p className='text-sm tracking-[.1em] text-neutral-500 underline'>
					{rating.reduce((prev, current) => prev + current.count, 0)} RATINGS
				</p>
			</div>
			<div className='flex h-[48px] w-full'>{bars}</div>
			<div className='my-3 flex flex-row flex-wrap'>
				{rating.map(r => (
					<div
						key={r.id}
						className=' flex flex-row items-center rounded-full border border-neutral-900 p-2 hover:border-neutral-500 '
					>
						<div
							className={`${
								configs[r.title].color
							} mr-1 h-[10px] w-[10px] rounded-full`}
						/>
						<p className='mr-3 font-bold'>
							{r.title[0].toUpperCase() + r.title.slice(1)}
						</p>
						<p className='text-neutral-300'>{r.count}</p>
					</div>
				))}
			</div>
			<div className='flex w-full flex-col lg:flex-row'>
				<button
					type='button'
					className='mb-3 w-full rounded bg-neutral-800 p-4 text-sm font-medium text-neutral-500 lg:mb-0 lg:mr-3 lg:w-[40%]'
				>
					<div className='flex flex-row justify-center'>
						<AiOutlinePlus />
						<p className='mx-3'>Write a review</p>
						<p>{rating.reduce((prev, current) => prev + current.count, 0)}</p>
					</div>
				</button>
				<button
					type='button'
					className='w-full rounded bg-neutral-800 p-4 text-sm font-medium text-neutral-500 lg:w-[40%]'
				>
					<div className='flex flex-row justify-center'>
						<AiOutlineComment />
						<p className='mx-3'>Write a comment</p>
					</div>
				</button>
			</div>
		</div>
	)
}
