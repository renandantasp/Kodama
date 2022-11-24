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
		<div className='group mb-2 flex w-full flex-row items-center transition ease-in-out'>
			<div className='duration-400 duration-400 mr-2 flex h-8 w-8 items-center justify-center rounded bg-neutral-800 transition ease-in-out group-hover:bg-white group-hover:text-neutral-900'>
				{icon}
			</div>
			<p className=''>{text}</p>
		</div>
	)
}
