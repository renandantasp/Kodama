import SearchGame from 'api/searchGame'
import type { ReactElement } from 'react'
import { useState } from 'react'
import GameSearchItem from './gameSearchItem'
import Loading from './loading'

function Search(): ReactElement {
	const [query, setQuery] = useState('')

	const onQueryChange = e => {
		setQuery(e.target.value)
	}

	const { isLoading, data } = SearchGame(query)

	if (!isLoading) {
		console.log(data)
	}

	return (
		<div className='z-50 w-[60%] lg:w-[80%] lg:pl-16'>
			<input
				className='ml-0 mr-3 w-full rounded-full bg-neutral-500 px-4 py-1.5 transition duration-300 ease-in-out placeholder:text-neutral-100 hover:bg-white hover:text-black hover:opacity-100 placeholder:hover:text-neutral-800 focus:bg-white focus:text-black focus:opacity-100 focus:outline-none placeholder:focus:text-black lg:py-2'
				placeholder='&#xF002;   Search for games'
				value={query}
				onChange={onQueryChange}
			/>
			{query.length > 0 ? (
				<div className='absolute left-0 w-[100%] rounded bg-black lg:left-auto lg:w-[73.2%]'>
					{isLoading ? (
						<div className='h-32 flex flex-row justify-center py-8'>
							<Loading />
						</div>
					) : (
						<div>
							{data === undefined ? (
								<p className='p-2 text-center'> No games found. </p>
							) : (
								data.results.map(game => (
									<GameSearchItem key={game.name} game={game} />
								))
							)}
						</div>
					)}
				</div>
			) : (
				<div />
			)}
		</div>
	)
}

export default Search
