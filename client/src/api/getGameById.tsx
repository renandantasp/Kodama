import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

export default function GetGameById(id: string): UseQueryResult {
	return useQuery({
		queryKey: ['repoData'],
		queryFn: async () =>
			fetch(
				`${import.meta.env.VITE_RAWG_URL}games/${id}${
					import.meta.env.VITE_RAWG_KEY
				}`
			).then(async res => res.json())
	})
}
