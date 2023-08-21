import type { ReactElement } from 'react'
import type { IUser } from 'types/generalTypes'

interface Props {
	user: IUser
	editable: boolean
}

function UserPage({ user, editable }: Props): ReactElement {
	return (
		<div className='mx-20 flex flex-col items-center'>
			<div className='flex w-full flex-row items-center justify-center pr-60'>
				<img
					src={user.profileImage}
					alt={user.name}
					className='mr-10 w-48 rounded-full'
				/>
				<div className=''>
					<p className='mb-4 text-7xl font-bold'>{user.name}</p>
					<p className='text-xl text-neutral-400 '>@{user.username}</p>
				</div>
			</div>
			{editable ? <p>editable</p> : <></>}
		</div>
	)
}

export default UserPage
