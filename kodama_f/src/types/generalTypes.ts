export interface IGames {
	count: number
	next: string | null
	previous: string | null
	results: [IGame]
	seo_title: string
	seo_descriptions: string
	seo_keywords: string
	seo_h1: string
	noindex: boolean
	nofollow: boolean
	description: string
	filters: unknown
	nofollow_collections: unknown
}
export interface IGame {
	id: number
	slug: string
	name: string
	released: string
	tba: boolean
	background_image: string
	rating: number
	rating_top: number
	ratings: [IRating]
	ratings_count: number
	reviews_text_count: number
	added: number
	added_by_status: unknown
	metacritic: number
	playtime: number
	suggestions_count: number
	updated: string
	user_game: unknown
	reviews_count: number
	saturated_color: string
	dominant_color: string
	platforms: [IPlatGame]
	parent_platforms: unknown
	genres: unknown
	stores: unknown
	clip: unknown
	tags: unknown
	esrb_rating: unknown
	short_screenshots: unknown
}

export interface IRating {
	id: number
	title: string
	count: number
	percent: number
}

export interface IPlatform {
	id: number
	name: string
	slug: string
	image: string | null
	year_end: number | null
	year_start: number | null
	games_count: number | null
	image_background: string
}

export interface IPlatGame {
	platform: IPlatform
	released_at: string
	requirements_en: { minimum: string; recommended: string } | null
	requirements_ru: { minimum: string; recommended: string } | null
}
