import Loading from 'components/loading'
import { GetListOf } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import FollowCard from './followCard'

interface Props {
	user: Iuser
}

function FollowingSection({ user }: Props): ReactElement {
	const [users, setUsers] = useState()
	useEffect(() => {
		async function GetFollowing(): Promise<void> {
			const u = await GetListOf(user.followed, 'user')
			setUsers(u)
		}
		GetFollowing()
	}, [])
	// console.log(users)
	return (
		<div>
			<p className='text-center text-4xl font-bold lg:text-start'>Following</p>
			{users == null ? (
				<div className='w-full py-10 flex justify-center'>
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

export default FollowingSection