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
					{page === 'home' ? <p>{page} - home</p> : null}
					{page === 'essays' ? <p>{page} - essays</p> : null}
					{page === 'lists' ? <p>{page} - lists</p> : null}
					{page === 'backlog' ? <p>{page} - backlog</p> : null}
					{page === 'played' ? <p>{page} - played</p> : null}
					{page === 'notifications' ? (
						<Notification notifs={pageUser.notifications} />
					) : null}
					{page === 'following' ? <p>{page} - following</p> : null}
					{page === 'followers' ? <p>{page} - followers</p> : null}
				</div>
			</div>
		</div>
	)
}

export default UserPage
