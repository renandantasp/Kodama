import GetGameById from 'api/getGameById'
import Loading from 'components/loading'
import PlatformList from 'components/platformsList'
import type { ReactElement } from 'react'
import { useState } from 'react'

interface Props {
	gameId: number
}

function SimpleGameCard({ gameId }: Props): ReactElement {
	const { isLoading, data } = GetGameById(gameId)

	if (isLoading) {
		return (
			<div className='m-2 flex flex-col flex-wrap items-center justify-between lg:mr-6 lg:flex-row lg:items-start'>
				<Loading />
			</div>
		)
	}

	return (
		<div className='m-2 flex flex-col flex-wrap items-center justify-between lg:mr-6 lg:flex-row lg:items-start'>
			<div className='w-[80vw] mb-3 lg:w-[15vw] rounded-lg bg-neutral-800'>
				<div className='aspect-w-16 aspect-h-9'>
					<img
						src={data.background_image}
						alt={data.name}
						className='w-full rounded-t-lg object-cover'
					/>
				</div>
				<div className='flex flex-col p-4'>
					<div className='flex flex-row items-center justify-between'>
						<PlatformList
							slugs={data.parent_platforms.map(p => p.platform.slug)}
						/>
						{data.metacritic ? (
							<p className='rounded border border-lime-500 px-1.5 text-sm font-medium text-lime-500'>
								{data.metacritic}
							</p>
						) : (
							<div />
						)}
					</div>
					<a href={`/games/${data.slug}`} className='text-2xl font-bold'>
						{data.name}
					</a>
				</div>
			</div>
		</div>
	)
}

export default SimpleGameCard
