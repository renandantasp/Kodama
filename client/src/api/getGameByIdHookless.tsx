import type { IGame } from 'types/generalTypes'

export default async function GetGameByIdHookless(
	id: string | null,
	mod?: string
): Promise<IGame> {
	if (id === null) return null
	const baseUrl: string = import.meta.env.VITE_RAWG_URL
	const key = `?key=${import.meta.env.VITE_RAWG_KEY}`

	const link = `${baseUrl}games/${id}${mod ? `/${mod}` : ''}${key}`

	const res = await fetch(link)
	const data = res.json()
	return data
}
