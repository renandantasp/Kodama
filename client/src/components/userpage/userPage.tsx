import type { ReactElement } from 'react'
import { useState } from 'react'
import type { IUser } from 'types/generalTypes'
import Notification from './notifications'
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
					{page === 'home' ? <p> home page still in development</p> : null}
					{page === 'essays' ? <p>essays page still in development</p> : null}
					{page === 'lists' ? <p>lists page still in development</p> : null}
					{page === 'backlog' ? <p>backlog page still in development</p> : null}
					{page === 'played' ? <p>played page still in development</p> : null}
					{page === 'notifications' ? (
						<Notification notifs={pageUser.notifications} />
					) : null}
					{page === 'following' ? (
						<p>
						following page still in development:
						{pageUser.followed.map(follow => <p key={follow}>{follow}</p>)}
					</p>
					) : null}
					{page === 'followers' ? (
						<p>
							followers page still in development:
							{pageUser.followers.map(follow => <p key={follow}>{follow}</p>)}
						</p>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default UserPage
