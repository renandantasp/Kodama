import type { ReactElement } from 'react'

function Error(): ReactElement {
	return (
		<div className='flex h-[100vh] w-full flex-col items-center justify-center p-8'>
			<div className='w-full lg:w-[50vw]'>
				<p className='mb-8 text-5xl font-bold lg:text-7xl'>
					Something went wrong...
				</p>
				<p>
					Sorry, something went wrong while loading this page. <br />
					Try refresh the page, checking your connection, or try again later.
				</p>
			</div>
		</div>
	)
}

export default Error
