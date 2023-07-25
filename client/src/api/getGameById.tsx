import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

export default function GetGameById(id: string, mod?: string): UseQueryResult {
	console.log(id)
	const baseUrl: string = import.meta.env.VITE_RAWG_URL
	const key: string = import.meta.env.VITE_RAWG_KEY

	const link = `${baseUrl}games/${id}${mod ? `/${mod}` : ''}${key}`

	return useQuery({
		queryKey: [link],
		queryFn: async () => fetch(link).then(async res => res.json())
	})
}
