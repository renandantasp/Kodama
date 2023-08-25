import SearchGame from 'api/searchGame'
import type { ReactElement } from 'react'
import React, { useState } from 'react'
import GameSearchItem from './gameSearchItem'
import Loading from './loading'

function Search(): ReactElement {
	const [query, setQuery] = useState('')

	const onQueryChange = e => {
		setQuery(e.target.value)
	}

	const { isLoading, data } = SearchGame(query)

	const searchMode = query.length > 0 ? 'lg:rounded-none ' : 'lg:rounded-full'

	return (
		<div className='z-50 w-[80%] lg:w-[100%] lg:px-8'>
			<input
				className={`${searchMode} content:border-t ml-0 mr-3 w-full rounded-full bg-neutral-600 px-4 py-1.5 opacity-50 transition duration-300 
                ease-in-out placeholder:text-neutral-100 hover:bg-black hover:text-white hover:opacity-80 placeholder:hover:text-neutral-500
                focus:bg-black focus:text-white focus:opacity-100 focus:outline-none placeholder:focus:text-neutral-500 lg:py-2`}
				placeholder='&#xF002;   Search for games'
				value={query}
				onChange={onQueryChange}
			/>
			{query.length > 0 ? (
				<div className='absolute left-0 w-[100%] rounded-b bg-black lg:left-auto lg:w-[78.95%]'>
					{isLoading ? (
						<div className='h-32 flex flex-row justify-center py-8'>
							<Loading />
						</div>
					) : (
						<div>
							{data !== undefined ? (
								<div>
									{data.results.length === 0 ? (
										<p className='p-2 text-center lg:rounded-b-full'> No games found. </p>
									) : (
										data.results.map(game => (
											<GameSearchItem key={game.name} game={game} />
										))
									)}
								</div>
							) : (
								<div />
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
