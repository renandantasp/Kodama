import GetInifiniteGames from 'api/getGames'
import GameList from 'components/homepage/gameList'
import Navbar from 'components/navbar'
import Sidebar from 'components/sidebar'
import type { ReactElement } from 'react'
import { useEffect } from 'react'
import type { IGame } from 'types/generalTypes'

export default function Homepage(): ReactElement {
	const { data, fetchNextPage, hasNextPage, status } = GetInifiniteGames()

	const bars = (
		<div className=''>
			<Navbar />
			<Sidebar />
		</div>
	)

	useEffect(() => {
		let fetching = false

		async function handleScroll(): Promise<void> {
			const { scrollHeight, scrollTop, clientHeight } = document.documentElement // e.target.scrollingElement

			if (!fetching && scrollHeight - scrollTop <= clientHeight) {
				fetching = true
				if (hasNextPage)
					await fetchNextPage().then(() => {
						fetching = false
					})
			}
		}

		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [fetchNextPage, hasNextPage])

	if (status.toString() === 'loading') {
		return (
			<div>
				{bars}
				<div className='lg:relative lg:ml-64'>Loading...</div>
			</div>
		)
	}
	if (status.toString() === 'error') return <div>error</div>

	return (
		<div className='h-screen'>
			{bars}

			<div className='pt-4 lg:mt-32 lg:ml-64 lg:pt-0'>
				<div className='mb-4 '>
					<h1 className='mb-2 text-center text-3xl font-bold lg:text-start lg:text-6xl'>
						New and trending
					</h1>
					<h3 className='text-center text-sm lg:text-start'>
						Based on player counts and release date
					</h3>
				</div>
				<div className='lg:mb-48'>
					{data?.pages.map((page, index) => (
						<GameList key={index} games={page.results as [IGame]} />
					))}
				</div>
			</div>
		</div>
	)
}
