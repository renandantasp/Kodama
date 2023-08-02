import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { IGames } from 'types/generalTypes'

function SearchGame(query: string): UseQueryResult<IGames> {
	const baseUrl: string = import.meta.env.VITE_RAWG_URL
	const key = `&key=${import.meta.env.VITE_RAWG_KEY}`

	const link = `${baseUrl}games?page_size=10&search=${query}${key}`

	return useQuery({
		queryKey: [link],
		queryFn: async () => fetch(link).then(async res => res.json())
	})
}

export default SearchGame
