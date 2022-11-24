import type { ReactElement } from 'react'

export default function Homepage(): ReactElement {
	return (
		<div className='m-2'>
			<p className='mb-2 text-7xl font-bold'>New and trending</p>
			<p>Based on player counts and release date</p>
		</div>
	)
}
