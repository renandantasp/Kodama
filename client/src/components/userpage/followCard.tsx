import type { ReactElement } from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import { SlGameController } from 'react-icons/sl'
import type { IUser } from 'types/generalTypes'

interface Props {
	user: IUser
}

function FollowCard({ user }: Props): ReactElement {
	return (
		<div className='m-2 flex flex-col flex-wrap items-center justify-between lg:mr-6 lg:flex-row lg:items-start'>
			<div className='mb-3 flex w-[80vw] flex-row rounded-lg bg-neutral-800 p-2 duration-300 ease-in-out hover:scale-110 lg:w-[15vw]'>
				<img
					src={user.profileImage}
					alt={user.name}
					className='w-20 rounded-full object-cover'
				/>
				<div className='ml-6 flex-col'>
					<a
						href={`/@${user.username}`}
						className='text-2xl font-bold hover:underline'
					>
						{user.name}
					</a>
					<p className='-mt-1 text-neutral-500'>@{user.username}</p>
					<div className='my-3 flex flex-row'>
						<div className='mr-3 flex flex-row items-center rounded p-0.5 text-sm text-neutral-300 outline outline-1 outline-neutral-400'>
							<div className='mx-1'>
								<SlGameController />
							</div>
							<p className='mx-1'>{user.played.length}</p>
						</div>
						<div className='mr-3 flex flex-row items-center rounded p-0.5 text-sm text-neutral-300 outline outline-1 outline-neutral-400'>
							<div className='mx-1'>
								<AiOutlineFileText />
							</div>
							<p className='mx-1'>{user.essays.length}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FollowCard
