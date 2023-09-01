import { useAuth } from 'contexts/AuthContext'
import { GetListOf } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect } from 'react'

function FollowingSection(): ReactElement {
	const { user } = useAuth()
	useEffect(async () => {
		const a = await GetListOf(user?.followers, 'followers')
	}, [user])
	// console.log(users)
	return <div>aaaa</div>
}

export default FollowingSection
