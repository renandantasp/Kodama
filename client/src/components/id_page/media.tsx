import GetGameById from 'api/getGameById'
import Loading from 'components/loading'
import type { ReactElement } from 'react'

interface Props {
	game_id: string
}

export default function Media({ game_id }: Props): ReactElement {
	const {
		isLoading: isLoadingScreenshot,
		error: errorScreenshot,
		data: dataScreenshot
	} = GetGameById(game_id, 'screenshots')

	if (isLoadingScreenshot)
		return (
			<div className='h-full flex w-full items-center justify-center lg:h-[32rem] lg:w-[24rem] '>
				<Loading />
			</div>
		)
	if (errorScreenshot) return <div>ERRROOOOOO</div>
	const pics = dataScreenshot.results
	if (pics.length > 5) {
		pics.length = 5
	}

	return (
		<div className=''>
			{/* <iframe className='rounded-lg' src={trailerUrl} /> */}
			<div className='mx-8 hidden lg:mt-10 lg:flex lg:flex-wrap lg:justify-around'>
				{pics.map((pic, index) => (
					<img
						key={pic.id}
						className={`m-1 ${
							index > 0 ? 'w-[11.7rem]' : 'w-full px-1.5'
						} rounded-lg`}
						src={pic.image}
						alt={pic.id}
					/>
				))}
			</div>

			<div className='relative flex h-[13em] flex-row overflow-x-auto lg:hidden'>
				{pics.map(pic => (
					<img
						key={pic.id}
						className='mr-4 rounded-lg p-1 '
						src={pic.image}
						alt={pic.id}
					/>
				))}
			</div>
		</div>
	)
}
