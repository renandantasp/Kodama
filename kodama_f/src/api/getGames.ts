import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

export default function GetGames(): UseQueryResult {
	const response: UseQueryResult = useQuery({
		queryKey: ['repoData'],
		queryFn: async () =>
			fetch(
				`${import.meta.env.VITE_RAWG_URL}games${import.meta.env.VITE_RAWG_KEY}`
			).then(async res => res.json())
	})
	return response
}
