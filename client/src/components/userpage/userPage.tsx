import type { ReactElement } from 'react'
import { useState } from 'react'
import type { IUser } from 'types/generalTypes'
import BacklogSection from './backlogSection'
import FollowerSection from './followerSection'
import FollowingSection from './followingSection'
import Notification from './notifications'
import PlayedSection from './playedSection'
import UserPageHeader from './userPageHeader'

interface Props {
	pageUser: IUser
	editable: boolean
}

function UserPage({ pageUser, editable }: Props): ReactElement {
	const initPath =
		window.location.pathname.split('/')[2] === undefined
			? 'home'
			: window.location.pathname.split('/')[2]
	const [page, setPage] = useState(initPath)
	return (
		<div className=''>
			<UserPageHeader
				pageUser={pageUser}
				editable={editable}
				pageSetter={setPage}
			/>
			<div className='flex w-full flex-col items-center'>
				<div className='flex flex-row items-start justify-between p-4 lg:ml-40 lg:w-[70vw]'>
					{page === 'home' ? <div> home page still in development</div> : null}
					{page === 'essays' ? <p>essays page still in development</p> : null}
					{page === 'lists' ? <p>lists page still in development</p> : null}
					{page === 'played' ? <PlayedSection user={pageUser} /> : null}
					{page === 'backlog' ? <BacklogSection user={pageUser} /> : null}
					{page === 'notifications' ? (
						<Notification notifs={pageUser.notifications} />
					) : null}
					{page === 'following' ? <FollowingSection user={pageUser} /> : null}
					{page === 'followers' ? <FollowerSection user={pageUser} /> : null}
				</div>
			</div>
		</div>
	)
}

export default UserPage
