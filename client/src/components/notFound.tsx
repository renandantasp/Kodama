import type { ReactElement } from 'react'

function NotFound(): ReactElement {
	return (
		<div className='flex h-[100vh] w-full flex-col items-center justify-center p-8'>
			<div className='w-full lg:w-[50vw]'>
				<p className='mb-8 text-5xl font-bold lg:text-7xl'>
					404 - Page not found.
				</p>
				<p>The requested URL was not found on this server</p>
			</div>
		</div>
	)
}

export default NotFound
