import GetInifinteGames from 'api/getGames'
import GameList from 'components/gameList'
import type { ReactElement } from 'react'
import { useEffect } from 'react'

export default function Homepage(): ReactElement {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status
	} = GetInifinteGames()

	useEffect(() => {
		let fetching = false
		const handleScroll = async e => {
			const { scrollHeight, scrollTop, clientHeight } =
				e.target.scrollingElement
			if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
				fetching = true
				if (hasNextPage) await fetchNextPage()
				fetching = false
			}
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [fetchNextPage, hasNextPage])

	if (status === 'loading') return <div>calma</div>
	if (status === 'error') return <div>ERRROOOOOO</div>

	return (
		<div>
			<div className='mb-4'>
				<h1 className='mb-2 text-center text-3xl font-bold lg:text-start lg:text-6xl'>
					New and trending
				</h1>
				<h3 className='text-center text-sm lg:text-start'>
					Based on player counts and release date
				</h3>
			</div>
			{/* ordering/filtering components */}
			<div className='lg:mb-48'>
				{data?.pages.map((page, index) => (
					<GameList key={index} games={page.results} />
				))}
			</div>
		</div>
	)
}
