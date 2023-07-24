import type { ReactElement } from 'react'
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
	const rounded = ['rounded-l-lg', '', '', 'rounded-r-lg']

	const cl = rating.map(
		(r, index) =>
			`h-full text-end ${configs[r.title].color} ${sizes[index]} ${
				rounded[index]
			}`
	)

	const bars = rating.map((r, index) => (
		<div key={r.id} className={cl[index]}>
			<p className='relative top-2 text-4xl'>
				{r.percent >= 25 ? configs[r.title].emoji : ''}
			</p>
		</div>
	))

	return (
		<div className='flex w-full flex-col items-center'>
			<p className='mt-8 mb-4 text-xl  font-bold'>
				{rating[0].title[0].toUpperCase() + rating[0].title.slice(1)}{' '}
				<span>{configs[rating[0].title].emoji}</span>
			</p>
			<div className='flex h-[48px] w-full px-4'>{bars}</div>
		</div>
	)
}
