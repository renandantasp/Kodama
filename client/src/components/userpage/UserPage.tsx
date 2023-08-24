import GetRandomGame from 'api/getRandomGame'
import type { ReactElement } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { ImLocation } from 'react-icons/im'
import type { IUser } from 'types/generalTypes'

interface Props {
	user: IUser
	editable: boolean
}

function UserPage({ user, editable }: Props): ReactElement {
	const { isLoading, error, data } = GetRandomGame()
	return (
		<div className='flex w-full flex-col items-center'>
			<div className='flex flex-row items-start justify-between p-4 lg:ml-40 lg:w-[70vw]'>
				<div className='flex flex-row  items-start justify-center lg:p-0'>
					<div className=''>
						<img
							className='mt-4 w-24 rounded-full'
							src={user.profileImage}
							alt={user.username}
						/>
					</div>
					<div className='z-20 flex flex-col items-start justify-center pl-8'>
						<div className='mb-2 flex flex-col'>
							<div className='mt-4 flex flex-row items-center'>
								<p className='mr-3 text-4xl font-bold'>{user.name}</p>
								{editable ? (
									<div className='rounded-full bg-neutral-200 p-1 text-neutral-900'>
										<AiFillEdit />
									</div>
								) : null}
							</div>
							<p className='text-lg text-neutral-400'>@{user.username}</p>
							<p className='font-sm mr-2 mt-2 italic text-neutral-400'>
								{user.bio.description}
							</p>
							<div className='mt-2 flex flex-row'>
								<div
									className={`font-sm mr-4 flex-row items-center text-neutral-400 ${
										user.bio.link.length > 0 ? 'flex' : 'hidden'
									}`}
								>
									<BiLink />
									<a href='/' className='ml-2'>
										{user.bio.link}
									</a>
								</div>
								<div
									className={`font-sm mr-4 flex-row items-center text-neutral-400 ${
										user.bio.location.length > 0 ? 'flex' : 'hidden'
									}`}
								>
									<ImLocation />
									<a href='/' className='ml-2'>
										{user.bio.location}
									</a>
								</div>
								{/* <div className='font-sm flex flex-row items-center text-neutral-400'>
									<BiSolidBalloon/>
									<a href='/' className='ml-2'>
									{user.bio.birth} birth
									</a>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className='mt-10 hidden flex-row items-center lg:flex'>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{user.played.length}</p>
						<p className='text-neutral-400'>Played</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{user.essays.length}</p>
						<p className='text-neutral-400'>Essays</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{user.lists.length}</p>
						<p className='text-neutral-400'>Lists</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{user.followers.length}</p>
						<p className='text-neutral-400'>Followers</p>
					</div>
					<div className='w-24 border-r border-neutral-500 text-center'>
						<p className='text-xl font-bold'>{user.followed.length}</p>
						<p className='text-neutral-400'>Followed</p>
					</div>
					<div className='w-24 text-center'>
						<p className='text-xl font-bold'>{user.backlog.length}</p>
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
