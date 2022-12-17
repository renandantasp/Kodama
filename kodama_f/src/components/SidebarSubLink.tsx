import type { ReactElement } from 'react'

interface Properties {
	icon: JSX.Element
	text: string
}

export default function SidebarSubLink({
	icon,
	text
}: Properties): ReactElement {
	return (
		<a
			href='/'
			className='group mb-2 flex w-full cursor-pointer flex-row items-center transition ease-in-out'
		>
			<div className='duration-400 h-8 mr-2 flex w-8 items-center justify-center rounded bg-neutral-800 py-1 transition duration-500 ease-in-out group-hover:bg-white group-hover:text-neutral-900'>
				{icon}
			</div>
			<p className=''>{text}</p>
		</a>
	)
}
