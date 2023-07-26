import * as yt from 'youtube-search-without-api-key'

async function GetVideos(game: string): Promise<unknown> {
	return yt.search(`${game} game trailer`)
}

export default GetVideos
