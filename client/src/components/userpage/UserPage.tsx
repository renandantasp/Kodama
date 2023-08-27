import GetRandomGame from 'api/getRandomGame'
import { useAuth } from 'contexts/AuthContext'
import { IsFollowing, ToggleFollow } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { ImLocation } from 'react-icons/im'
import { SlUserFollow } from 'react-icons/sl'
import type { IUser } from 'types/generalTypes'

interface Props {
	pageUser: IUser
	editable: boolean
}

function UserPage({ pageUser, editable }: Props): ReactElement {
	const { isLoading, error, data } = GetRandomGame()
	const { user } = useAuth()
	const [isFollowing, setIsFollowing] = useState(false)
	useEffect(() => {
		IsFollowing(user?.username, pageUser.username, setIsFollowing)
	}, [])

	return (
		<div className='flex w-full flex-col items-center'>
			<div className='flex flex-row items-start justify-between p-4 lg:ml-40 lg:w-[70vw]'>
				<div className='flex flex-row  items-start justify-center lg:p-0'>
					<div className=''>
						<img
							className='mt-4 w-24 rounded-full'
							src={pageUser.profileImage}
							alt={pageUser.username}
						/>
					</div>
					<div className='z-20 flex flex-col items-start justify-center pl-8'>
						<div className='mb-2 flex flex-col'>
							<div className='mt-4 flex flex-row items-center'>
								<p className='mr-3 text-4xl font-bold'>{pageUser.name}</p>
								{editable ? (
									<div className='rounded-full bg-neutral-200 p-1 text-neutral-900'>
										<AiFillEdit />
									</div>
								) : (
									<button
										type='button'
										onClick={async () =>
											ToggleFollow(
												user?.username,
												pageUser.username,
												setIsFollowing
											)
										}
										className={`flex flex-row items-center rounded-full p-1 px-1.5 text-sm ${
											isFollowing
												? "bg-neutral-800 text-neutral-400 outline outline-1 outline-neutral-500 after:content-['Following'] hover:text-red-500 hover:outline-red-500 hover:after:content-['Unfollow']"
												: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-100 active:bg-neutral-300'
										}`}
									>
										{isFollowing ? (
											<div className='mr-1 flex flex-row'>
												<SlUserFollow />
											</div>
										) : (
											<div className='flex flex-row items-center'>
												<SlUserFollow />
												<p>Follow</p>
											</div>
										)}
									</button>
								)}
							</div>
							<p className='text-lg text-neutral-400'>@{pageUser.username}</p>
							<p className='font-sm mr-2 mt-2 italic text-neutral-400'>
								{pageUser.bio.description}
							</p>
							<div className='mt-2 flex flex-row'>
								<div
									className={`font-sm mr-4 flex-row items-center text-neutral-400 ${
										pageUser.bio.link.length > 0 ? 'flex' : 'hidden'
									}`}
								>
									<BiLink />
									<a href='/' className='ml-2'>
										{pageUser.bio.link}
									</a>
								</div>
								<div
									className={`font-sm mr-4 flex-row items-center text-neutral-400 ${
										pageUser.bio.location.length > 0 ? 'flex' : 'hidden'
									}`}
								>
									<ImLocation />
									<a href='/' className='ml-2'>
										{pageUser.bio.location}
									</a>
								</div>
								{/* <div className='font-sm flex flex-row items-center text-neutral-400'>
									<BiSolidBalloon/>
									<a href='/' className='ml-2'>
									{pageUser.bio.birth} birth
									</a>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className='mt-10 hidden flex-row items-center lg:flex'>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{pageUser.played.length}</p>
						<p className='text-neutral-400'>Played</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{pageUser.essays.length}</p>
						<p className='text-neutral-400'>Essays</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{pageUser.lists.length}</p>
						<p className='text-neutral-400'>Lists</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{pageUser.followers.length}</p>
						<p className='text-neutral-400'>Followers</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{pageUser.followed.length}</p>
						<p className='text-neutral-400'>Following</p>
					</div>
					<div className='w-24 text-center'>
						<p className='text-xl font-bold'>{pageUser.backlog.length}</p>
						<p className='text-neutral-400'>Backlog</p>
					</div>
				</div>
			</div>
			<img
				src={data?.results[0].background_image}
				alt={data?.results[0].name}
				className='absolute top-0 -z-10 h-[100vh] w-full select-none object-cover object-top opacity-20'
			/>
			<div className='absolute top-0 -z-10 h-[100vh] w-full bg-gradient-to-t from-neutral-900 via-neutral-900 bg-no-repeat' />
		</div>
	)
}

export default UserPage
