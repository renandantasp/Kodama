import Loading from 'components/loading'
import type { ReactElement } from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import { SlList, SlUserFollow } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import type { INotification } from 'types/generalTypes'
import { DateSinceParser } from 'utils/parser'

interface Props {
	notifs: INotification[]
}

function Notification({ notifs }: Props): ReactElement {
  const navigate = useNavigate()
	const NOTIFYICON = [<AiOutlineFileText />, <SlUserFollow />, <SlList />]
	const NOTIFYBGD = ['bg-purple-500', 'bg-sky-500', 'bg-lime-500']
	const NOTIFYOUT = [
		'hover:outline-purple-500',
		'hover:outline-sky-500',
		'hover:outline-lime-500'
	]
	const NOTIFYTXT = [
		'hover:text-purple-500',
		'hover:text-sky-500',
		'hover:text-lime-500'
	]

	if (notifs === undefined) return <Loading />
	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<p className='mb-4 justify-center text-center text-3xl font-medium'>
				Notifications
			</p>
			<div className='lg:w-[20vw]'>
				{notifs.map(notif => (
					<button
            type="button"
						onClick={()=>navigate(notif.link)}
						key={`${notif.notifyTime}`}
						className={`my-4 flex flex-row items-center justify-between rounded-lg px-4 py-3 text-center outline outline-1 outline-neutral-500 duration-300 ease-in-out 
          ${NOTIFYTXT[notif.icon]} 
          ${NOTIFYOUT[notif.icon]}`}
					>
						<div className='flex flex-row items-center'>
							<div
								className={`${
									NOTIFYBGD[notif.icon]
								} mr-2 rounded-full p-1.5 text-sm text-white `}
							>
								{NOTIFYICON[notif.icon]}
							</div>
							<div className='mr-1 text-sm font-bold'>
								<p className='text-start text-xs lg:text-sm'>
									<a
										className='hover:underline'
										href={`/${notif.message.split(' ')[0]}`}
									>
										{notif.message.split(' ')[0]}{' '}
									</a>
									<span className=''>
										{notif.message.split(' ').splice(1).join(' ')}
									</span>
								</p>
							</div>
						</div>
						<p className='pl-2 text-xs text-neutral-500 lg:text-sm'>
							{DateSinceParser(notif.notifyTime)}
						</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default Notification
