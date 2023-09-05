import Loading from 'components/loading'
import { GetListOf } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { IUser } from 'types/generalTypes'
import FollowCard from './followCard'

interface Props {
	user: IUser
}

function FollowingSection({ user }: Props): ReactElement {
	const [users, setUsers] = useState()
	useEffect(() => {
		async function GetFollowing(): Promise<void> {
			const u = await GetListOf<IUser>(user.followed, 'user')
			setUsers(u)
		}
		GetFollowing()
	}, [])
	return (
		<div>
			<p className='text-center text-4xl font-bold lg:text-start'>Following</p>
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

export default FollowingSection
