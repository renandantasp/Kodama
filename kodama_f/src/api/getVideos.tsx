import { useQuery } from '@tanstack/react-query'
import type * as yt from 'youtube-search'

export default function GetVideos({ game_name }): yt.YouTubeSearchResults {
	const response: yt.YouTubeSearchResults = useQuery({
		queryFn: async () =>
			fetch(
				`${import.meta.env.VITE_YT_URL}?max_results=1&q=${game_name}${
					import.meta.env.VITE_YT_KEY
				}`
			).then(async res => res.json())
	})
	return response
}
