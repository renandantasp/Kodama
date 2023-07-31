import type { UseInfiniteQueryResult } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'
import type { IGames } from 'types/generalTypes'

function GetInfiniteGames(): UseInfiniteQueryResult<IGames> {
	const fetchGames = async ({
		pageParam: pageParameter = 1
	}): Promise<unknown> => {
		const response = await fetch(
			`${import.meta.env.VITE_RAWG_URL}games${
				import.meta.env.VITE_RAWG_KEY
			}&page=${pageParameter}`
		)
		return response.json()
	}

	const result = useInfiniteQuery({
		queryKey: ['games'],
		queryFn: fetchGames,
		getNextPageParam: lastPage => lastPage.next
	})

	return result
}

export default GetInfiniteGames
