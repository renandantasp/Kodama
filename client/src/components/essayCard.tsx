import GetGameById from 'api/getGameById'
import type { ReactElement } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
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

	const titleSize = 36
	const displayTitle =
		essay.essayTitle.length < titleSize
			? essay.essayTitle
			: `${essay.essayTitle.slice(0, titleSize)}...`

	return (
		<div className='group my-3 flex h-[13rem] w-[90vw] items-start rounded-lg bg-gradient-to-t from-[#222222] to-[#303030] duration-300 ease-in-out lg:m-3 lg:hover:scale-110 xl:w-[22rem] 2xl:w-[19rem]'>
			{data !== undefined ? (
				<img
					src={data.background_image}
					className='absolute h-[13rem] w-[90vw] rounded-lg object-cover opacity-40 lg:w-[65vw] xl:w-[22rem] 2xl:w-[19rem]'
					alt={data.name}
				/>
			) : null}
			<div className='z-20 w-full flex-col'>
				<div className='z-20 flex h-[7.5rem] w-full items-end justify-start px-3'>
					{essay.isGame ? (
						<p className='text-amber-400'>{RatingParser(essay.rating)}</p>
					) : null}
				</div>
				<div className='z-20 flex h-[3.5rem] w-full items-start justify-start px-3 pb-1'>
					<a href={`/essays/${essay.id}`} className='text-xl font-medium'>
						{displayTitle}
					</a>
				</div>
				<div className='flex w-full flex-row items-center justify-between px-3 text-sm text-neutral-300'>
					<p>@{essay.userUsername}</p>
					<div className='flex flex-row'>
						<div className='mr-2 flex flex-row items-center rounded p-0.5 px-1 outline outline-1 outline-neutral-500'>
							<div className='mx-0.5'>
								<AiFillHeart />
							</div>
							<p className='mx-0.5'>{essay.likes.length}</p>
						</div>
						<div className='mr-2 flex flex-row items-center rounded p-0.5 px-1 outline outline-1 outline-neutral-500'>
							<div className='mx-0.5'>
								<BiComment />
							</div>
							<p className='mx-0.5'>{essay.comments.length}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EssayCard
