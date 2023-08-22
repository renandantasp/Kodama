/* eslint-disable @typescript-eslint/no-misused-promises */
import GetInifiniteGames from 'api/getInfiniteGames'
import Error from 'components/error'
import GameList from 'components/homepage/gameList'
import Loading from 'components/loading'
import Navbar from 'components/navigation/navbar'
import Sidebar from 'components/navigation/sidebar'
import type { ReactElement } from 'react'
import { useEffect } from 'react'

export default function Homepage(): ReactElement {
	const { data, fetchNextPage, hasNextPage, status } = GetInifiniteGames()
	const bars = (
		<div>
			<Navbar />
			<Sidebar />
		</div>
	)

	useEffect(() => {
		let fetching = false

		async function handleScroll(): Promise<void> {
			const { scrollHeight, scrollTop, clientHeight } = document.documentElement

			if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
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
			<div className='h-screen'>
				{bars}
				<div className='flex h-[90vh] items-center justify-center lg:ml-64'>
					<Loading />
				</div>
			</div>
		)
	}
	if (status.toString() === 'error') return <Error />

	return (
		<div className='h-screen'>
			<div>
				<Navbar />
				<Sidebar />
			</div>
			<div className='pt-4 lg:ml-64 lg:pt-4'>
				<div className='mb-4 '>
					<h1 className='mb-2 text-center text-3xl font-bold lg:text-start lg:text-6xl'>
						New and trending
					</h1>

					<h3 className='text-center text-sm lg:text-start'>
						Based on player counts and release date
					</h3>
				</div>
				<div className='lg:mb-48 lg:mr-8'>
					{data?.pages.map((page, index) => (
						<GameList key={page.results[index].id} games={page.results} />
					))}
				</div>
			</div>
		</div>
	)
}
