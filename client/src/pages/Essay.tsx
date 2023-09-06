import GetGameByIdHookless from 'api/getGameByIdHookless'
import Loading from 'components/loading'
import Navbar from 'components/navigation/navbar'
import Sidebar from 'components/navigation/sidebar'
import NotFound from 'components/notFound'
import FollowCard from 'components/userpage/followCard'
import SimpleGameCard from 'components/userpage/simpleGameCard'
import { collection, getDocs, query, where } from 'firebase/firestore'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import type { IEssay, IGame, IUser } from 'types/generalTypes'
import { db } from 'utils/firebase'
import { RatingParser } from 'utils/parser'

function Essay(): ReactElement {
	const params = useParams()
	const [essay, setEssay] = useState<IEssay | null>(null)
	const [user, setUser] = useState<IUser | null>(null)
	const [game, setGame] = useState<IGame | null>(null)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function GetEssay(): Promise<void> {
			const q = query(collection(db, 'essay'), where('id', '==', params.id))
			const querySnapshot = await getDocs(q)
			if (querySnapshot.empty) {
				setError(true)
			} else {
				querySnapshot.forEach(doc => {
					setEssay(doc.data())
				})
			}
		}
		GetEssay()
	}, [])

	useEffect(() => {
		async function GetGame() {
			const res = await GetGameByIdHookless(essay?.gameId)
			setGame(res)
		}
		if (essay !== null) {
			if (essay.gameId !== null) {
				GetGame()
			}
		}
	}, [essay])

	useEffect(() => {
		async function GetUser(): Promise<void> {
			const q = query(
				collection(db, 'user'),
				where('username', '==', essay?.userUsername)
			)
			const querySnapshot = await getDocs(q)
			if (querySnapshot.empty) {
				setError(true)
			} else {
				querySnapshot.forEach(doc => {
					setUser(doc.data())
				})
			}
		}
		if (essay !== null) {
			GetUser()
		}
	}, [essay])

	if (error) {
		return (
			<div>
				<NotFound />
			</div>
		)
	}

	if (essay === null) {
		return (
			<div className='h-screen'>
				<Navbar />
				<Sidebar />

				<div className='flex h-[90vh] items-center justify-center'>
					<Loading />
				</div>
			</div>
		)
	}
	const paragraphs = essay.essayText.split('\n')
	return (
		<div className='h-screen'>
			<Navbar />
			<Sidebar />
			<div className='pt-4 lg:ml-[17rem] lg:mr-40 lg:pt-4'>
				<div className='flex w-full flex-col items-center'>
					<p className='mb-4 w-full px-4 text-center text-4xl font-bold lg:mb-10 lg:px-0 lg:text-5xl 2xl:w-[50vw]'>
						{essay.essayTitle}
					</p>
					{essay.isGame ? (
						<div className='text-3xl text-amber-400'>
							{RatingParser(essay.rating)}
						</div>
					) : null}
					<div className='mt-4 w-full px-6 text-justify md:w-[40rem] lg:mt-10 lg:px-0 2xl:w-[40vw]'>
						{paragraphs.map((paragraph, index) => (
							<div
								key={index}
								className={`${paragraph.length > 50 ? '' : 'text-start'}`}
							>
								<ReactMarkdown>{paragraph}</ReactMarkdown>
							</div>
						))}
					</div>
					<div className='my-10 flex w-full flex-col px-6 lg:flex-row lg:items-start lg:justify-around lg:px-0 2xl:w-[40vw] '>
						{user !== null ? (
							<div>
								<p className='mb-6 text-center text-2xl font-medium text-neutral-400 lg:text-start'>
									Review made by
								</p>
								<FollowCard user={user} />
							</div>
						) : null}
						{game !== null ? (
							<div className='mt-10 lg:mt-0'>
								<p className='mb-6 text-center text-2xl font-medium text-neutral-400 lg:text-start'>
									Game Reviewed
								</p>
								<SimpleGameCard gameId={essay.gameId} />
							</div>
						) : null}
					</div>
				</div>
			</div>
			{game !== null ? (
				<div>
					<img
						src={game.background_image}
						alt={game.name}
						className='absolute top-0 -z-10 h-[100vh] w-full select-none object-cover object-top opacity-20'
					/>
					<div className='absolute top-0 -z-10 h-[100vh] w-full bg-gradient-to-t from-neutral-900 via-neutral-900 bg-no-repeat' />
				</div>
			) : null}
		</div>
	)
}

export default Essay
