import Loading from 'components/loading'
import { GetListOf } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import FollowCard from './followCard'

interface Props {
	user: Iuser
}

function FollowerSection({ user }: Props): ReactElement {
	const [users, setUsers] = useState()
	useEffect(() => {
		async function GetFollower(): Promise<void> {
			const u = await GetListOf(user.followers, 'user')
			setUsers(u)
		}
		GetFollower()
	}, [])
	// console.log(users)
	return (
		<div>
			<p className='text-center text-4xl font-bold lg:text-start'>Followers</p>
			{users == null ? (
				<div className='flex w-full justify-center py-10'>
					<Loading />
				</div>
			) : (
				<div className='mt-4 flex flex-col lg:flex-row'>
					{users.map(user => (
						<FollowCard key={user.uid} user={user} />
					))}
				</div>
			)}
		</div>
	)
}

export default FollowerSection
