import Loading from 'components/loading'
import { GetListOf } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { IUser } from 'types/generalTypes'
import FollowCard from './followCard'

interface Props {
	user: IUser
}

function FollowerSection({ user }: Props): ReactElement {
	const [users, setUsers] = useState()
	useEffect(() => {
		async function GetFollower(): Promise<void> {
			const u = await GetListOf<IUser>(user.followers, 'user')
			setUsers(u)
		}
		GetFollower()
	}, [])
	return (
		<div>
			<p className='text-center text-4xl font-bold lg:text-start'>Followers</p>
			{users == null ? (
				<div className='flex w-full justify-center py-10'>
					<Loading />
				</div>
			) : (
				<div className='mt-4 flex flex-col flex-wrap lg:flex-row'>
					{users.map(user => (
						<FollowCard key={user.uid} user={user} />
					))}
				</div>
			)}
		</div>
	)
}

export default FollowerSection
