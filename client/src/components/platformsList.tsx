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

interface Properties {
	slugs: string[]
}

interface Comps {
	playstation: JSX.Element
	nintendo: JSX.Element
	sega: JSX.Element
	pc: JSX.Element
	xbox: JSX.Element
	mac: JSX.Element
	ios: JSX.Element
	android: JSX.Element
	linux: JSX.Element
	web: JSX.Element
	atari: JSX.Element
	'neo-geo': undefined
	'3do': undefined
	'commodore-amiga': undefined
}

export default function PlatformList({ slugs }: Properties): ReactElement {
	const components: Comps = {
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
				<div key={slug} className='mr-2'>
					{components[slug as keyof Comps]}
				</div>
			))}
		</div>
	)
}
