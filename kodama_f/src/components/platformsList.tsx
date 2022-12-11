/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactElement } from 'react'
import { ImMobile } from 'react-icons/im'
import {
	SiAndroid,
	SiApple,
	SiAtari,
	SiLinux,
	SiNintendo,
	SiPlaystation,
	SiSega,
	SiWindows,
	SiXbox
} from 'react-icons/si'
import { SlGlobe } from 'react-icons/sl'

export default function PlatformList({ slugs }): ReactElement {
	const components = {
		playstation: <SiPlaystation />,
		nintendo: <SiNintendo />,
		sega: <SiSega />,
		pc: <SiWindows />,
		xbox: <SiXbox />,
		mac: <SiApple />,
		ios: <ImMobile />,
		android: <SiAndroid />,
		linux: <SiLinux />,
		web: <SlGlobe />,
		atari: <SiAtari />,
		'neo-geo': undefined,
		'3do': undefined,
		'commodore-amiga': undefined
	}
	return (
		<div className='my-2 flex flex-row'>
			{slugs.map(slug => (
				<div className='mr-2'>{components[slug]}</div>
			))}
		</div>
	)
}
