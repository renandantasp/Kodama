import { useAuth } from 'contexts/AuthContext'
import { SeeNotification } from 'fbRequests/firebaseRequests'
import { useEffect, useState } from 'react'
import { BiSolidBell } from 'react-icons/bi'
import { SlUserFollow } from 'react-icons/sl'
import type { ReactElement } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'

function NotifyBell(): ReactElement {
	const { user } = useAuth()
	const [hasNotification, setHasNotification] = useState(false)
	const [nofifCount, setNotifCount] = useState(0)
	const navigate = useNavigate()

	const ToggleNotificationVisualized = async () => {
		if (hasNotification) {
			SeeNotification(user?.username)
		}
	}

	useEffect(() => {
		setNotifCount(user?.notifications.filter(notif => !notif.seen).length)
		setHasNotification(nofifCount > 0)
	}, [user, hasNotification, nofifCount])
	const NOTIFYICON = [SlUserFollow, <SlUserFollow />]

	return (
		<button
			type='button'
			onClick={() => navigate(`/@${user?.username}/notifications`)}
			onMouseEnter={async () => ToggleNotificationVisualized()}
		>
			<BiSolidBell />
			{hasNotification ? (
				<div className='absolute z-20 ml-[0.6rem] -mt-8 flex h-[1.17rem] w-[1.17rem] items-center justify-center rounded-full bg-red-500 text-center text-xs outline outline-2 outline-neutral-900'>
					<p className='h-full w-full'>{user?.notifications.length}</p>
				</div>
			) : null}

			{user !== undefined ? (
				<div className='absolute z-20 -ml-16 hidden w-44 flex-col rounded-lg bg-neutral-100 p-2 text-sm text-neutral-900  transition duration-300 ease-in-out group-hover:flex'>
					<div className='mx-2 flex h-[10rem] w-full flex-col justify-start overflow-y-scroll  pr-2 '>
						{user?.notifications.map((notif, index) => (
							<a
								key={`${index} - ${notif.message}`}
								className={`my-1 flex flex-row items-center justify-around rounded-lg p-1 px-2 text-sm transition duration-300 ease-in-out ${
									notif.seen
										? 'hover:bg-neutral-300'
										: 'bg-blue-400 text-neutral-100 hover:bg-blue-500'
								}`}
								href={notif.link}
							>
								<div className=''>{NOTIFYICON[notif.icon]}</div>
								<p className='ml-2 text-start'>{notif.message}</p>
							</a>
						))}
						<a
							className='my-0.5 flex flex-row items-center justify-center p-1 text-sm transition duration-300 ease-in-out hover:text-neutral-800'
							href={`/@${user?.username}/notifications`}
						>
							<p>See more</p>
						</a>
					</div>
				</div>
			) : null}
		</button>
	)
}

export default NotifyBell
