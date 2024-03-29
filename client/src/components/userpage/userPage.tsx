import type { ReactElement } from 'react'
import { useState } from 'react'
import type { IUser } from 'types/generalTypes'
import BacklogSection from './backlogSection'
import EssaysSection from './essaysSection'
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
				<div className='flex w-full flex-row items-start justify-center p-4 lg:ml-40 lg:w-[70vw]'>
					{page === 'home' ? (
						<div>
							<div className='mb-20'>
								<EssaysSection user={pageUser} />
							</div>
							<div className='mb-20'>
								<PlayedSection user={pageUser} />
							</div>
							<div>
								<BacklogSection user={pageUser} />
							</div>
						</div>
					) : null}
					{page === 'essays' ? <EssaysSection user={pageUser} /> : null}
					{page === 'lists' ? (
						<div className='w-full text-center text-2xl font-bold lg:text-4xl'>
							Lists page still in development
						</div>
					) : null}
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
