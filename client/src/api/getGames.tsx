import { useInfiniteQuery } from '@tanstack/react-query'

function GetInfiniteGames() {
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

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status
	} = useInfiniteQuery({
		queryKey: ['games'],
		queryFn: fetchGames,
		getNextPageParam: (lastPage, pages) => lastPage.next
	})

	return {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status
	}
}

export default GetInfiniteGames
