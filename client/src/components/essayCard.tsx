import GetGameById from 'api/getGameById'
import type { ReactElement } from 'react'
import type { IEssay } from 'types/generalTypes'
import { RatingParser } from 'utils/parser'

interface Props {
	essay: IEssay
}

function EssayCard({ essay }: Props): ReactElement {
	const { data, isLoading } =
		essay.gameId !== null
			? GetGameById(essay.gameId)
			: { data: undefined, isLoading: undefined }
	return (
		<div className='m-3 flex h-[10rem] w-[80vw] items-start rounded-lg bg-gradient-to-t from-[#202020] to-[#303030] duration-300 ease-in-out hover:scale-110 lg:w-[15vw]'>
			{data !== undefined ? (
				<img
					src={data.background_image}
					className='absolute h-[10rem] w-[80vw] rounded-lg opacity-40 lg:w-[15vw]'
					alt={data.name}
				/>
			) : null}

			{essay.isGame ? (
				<div className='z-20 flex w-full flex-row items-center justify-between px-4'>
					<p className='p-3 text-2xl font-medium'>{essay.essayTitle}</p>
					<p className='text-amber-400'>{RatingParser(essay.rating)}</p>
				</div>
			) : (
				<div className='z-20 flex w-full flex-row items-center justify-between px-4'>
					<p className='p-3 text-2xl font-medium'>{essay.essayTitle}</p>
				</div>
			)}
		</div>
	)
}

export default EssayCard
