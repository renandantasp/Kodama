import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import type { IGames } from 'types/generalTypes'

export default function GetRandomGame(): UseQueryResult<IGames> {
	const baseUrl: string = import.meta.env.VITE_RAWG_URL
	const key = `&key=${import.meta.env.VITE_RAWG_KEY}`

	const random = useRef(Math.round(Math.random() * 100))

	const link = `${baseUrl}games?page_size=1&page=${random.current}&ordering=-metacritic${key}`
	return useQuery({
		queryKey: [link],
		queryFn: async () => fetch(link).then(async res => res.json())
	})
}
