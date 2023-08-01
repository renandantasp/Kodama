import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { IGames } from 'types/generalTypes'

export default function GetRandomGame(): UseQueryResult<IGames> {
	const baseUrl: string = import.meta.env.VITE_RAWG_URL
	const key = `&key=${import.meta.env.VITE_RAWG_KEY}`

	const date = new Date()
	const timeMoment =
		date.getMinutes() * date.getMonth() * date.getDay() * date.getFullYear()

	const randomId = Math.ceil(1 + ((timeMoment * 555) % 1000)).toString()
	const link = `${baseUrl}games?page_size=1&page=${randomId}&ordering=-metacritic${key}`
	console.log(link)
	return useQuery({
		queryKey: [link],
		queryFn: async () => fetch(link).then(async res => res.json())
	})
}
