export interface IGames {
	count: number
	next: string | null
	previous: string | null
	results: IGame[]
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
	ratings: IRating[]
	ratings_count: number
	reviews_text_count: number
	description: string
	description_raw: string
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
	platforms: IPlatGame[] | null
	parent_platforms?: IParentPlatGame[]
	genres: IGenre[]
	developers: ICompany[]
	publishers: ICompany[]
	stores: IGameStore[]
	clip: unknown
	tags: unknown
	esrb_rating: { id: number; name: string; slug: string } | null
	short_screenshots: unknown
}

export interface ICompany {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

export interface IGameStore {
	id: number
	store: IStore
	url: string
}
export interface IStore {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
	domain: string
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

export interface IParentPlatform {
	id: number
	name: string
	slug: string
}

export interface IParentPlatGame {
	platform: IParentPlatform
}

export interface IGenre {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

export interface IBio {
	description: string
	birth: string
	location: string
	link: string
}

export interface IUser {
	uid: string | null
	name: string
	username: string
	email: string | null
	emailVerified: boolean
	notifications: INotification[]
	bio: IBio
	profileImage: string
	essays: string[]
	lists: string[]
	backlog: string[]
	played: string[]
	followed: [string]
	followers: [string]
}

export interface INotification {
	link: string
	message: string
	icon: number
	seen: boolean
	notifyTime: Date
}

export interface IContext {
	isLoading: boolean
	user: IUser | null
}

export interface IComment {
	text: string
	userId: string
	timeStamp: Date
}

export interface ILike {
	userId: string
	timeStamp: Date
}

export interface IEssay {
	id: string
	userId: string
	userUsername: string
	gameId: number | null
	essayTitle: string
	essayText: string
	essayCreated: Date
	isGame: boolean
	rating: number | null
	comments: IComment[]
	likes: ILike[]
}
