import type { ReactElement } from 'react'
import { lazy } from 'react'
import {
	AiFillCalendar,
	AiFillFastForward,
	AiFillFire,
	AiFillStar
} from 'react-icons/ai'

const SidebarSubLink = lazy(async () => import('./SidebarSubLink'))

export default function Sidebar(): ReactElement {
	return (
		<div className='absolute flex w-64 flex-col justify-start pt-11 pl-10'>
			<a
				href='/#'
				className='duration-400 mb-5 w-full text-2xl font-semibold transition ease-in-out hover:text-neutral-500'
			>
				Home
			</a>
			<a
				href='/#'
				className='duration-400 mb-5 w-full text-2xl font-semibold transition ease-in-out hover:text-neutral-500'
			>
				Reviews
			</a>
			<div>
				<p className='mb-4 w-full text-2xl font-semibold'>New Releases</p>
				<SidebarSubLink icon={<AiFillStar size={22} />} text='Last 30 days' />
				<SidebarSubLink icon={<AiFillFire size={22} />} text='This week' />
				<SidebarSubLink
					icon={<AiFillFastForward size={22} />}
					text='Next week'
				/>
				<SidebarSubLink
					icon={<AiFillCalendar size={22} />}
					text='Release Calendar'
				/>
			</div>
		</div>
	)
}
