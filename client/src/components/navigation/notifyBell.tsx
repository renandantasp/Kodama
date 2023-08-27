import { useAuth } from 'contexts/AuthContext'
import { useEffect, useState } from 'react'
import { BiSolidBell } from 'react-icons/bi'
import { SlUserFollow } from 'react-icons/sl'
import type { ReactElement } from 'react-markdown/lib/react-markdown'

function NotifyBell(): ReactElement {
	const { user } = useAuth()
	const [hasNotification, setHasNotification] = useState(false)
	const [nofifCount, setNotifCount] = useState(0)
	useEffect(() => {
		setNotifCount(user?.notifications.filter(notif => !notif.seen).length)
		setHasNotification(nofifCount > 0)
	}, [user, hasNotification, nofifCount])
	const NOTIFYICON = [SlUserFollow, <SlUserFollow />]

	return (
		<div>
			<BiSolidBell />
			{hasNotification ? (
				<div className='absolute z-20 ml-[0.6rem] -mt-8 flex h-[1.17rem] w-[1.17rem] items-center justify-center rounded-full bg-red-500 text-center text-xs outline outline-2 outline-neutral-900'>
					<p className='h-full w-full'>{user?.notifications.length}</p>
				</div>
			) : null}

			{user !== undefined ? (
				<div className='absolute -ml-16 hidden w-40 flex-col justify-center rounded-lg bg-neutral-100 p-2 text-sm text-neutral-900  transition duration-300 ease-in-out group-hover:flex'>
					{user?.notifications.map(notif => (
						<a
							key={notif.message}
							className='flex flex-row items-center p-1 text-sm transition duration-300 ease-in-out hover:bg-neutral-300'
							href={notif.link}
						>
							<div className='mr-2'>{NOTIFYICON[notif.icon]}</div>
							<p>{notif.message}</p>
						</a>
					))}
				</div>
			) : null}
		</div>
	)
}

export default NotifyBell
