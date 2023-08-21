/* eslint-disable react/no-unescaped-entities */
import GetRandomGame from 'api/getRandomGame'
import Error from 'components/error'
import Navbar from 'components/navigation/navbar'
import type { ReactElement } from 'react'

function PasswordRecovery(): ReactElement {
	const { isLoading, error, data } = GetRandomGame()

	if (isLoading)
		return (
			<div>
				<Navbar />
			</div>
		)
	if (error) return <Error />

	// console.log(data?.results[0].background_image)
	return (
		<div>
			<Navbar />
			<div className='flex justify-center'>
				<div className='mx-8 flex flex-col items-center sm:w-full lg:mt-36 lg:w-[32rem]'>
					<h1 className='mb-2 text-center text-4xl font-medium'>
						Password Recovery
					</h1>
					<p className='mb-6'>
						You will receive an email with a password-reset link
					</p>

					<input
						type='email'
						placeholder='Email'
						className='mb-4 w-full rounded border-0 bg-black p-2 text-neutral-100  placeholder:text-neutral-400 '
					/>
					<button
						type='button'
						className=' mb-6 w-full rounded bg-neutral-200 p-2 hover:bg-neutral-100 active:bg-neutral-300 '
					>
						<p className='text-neutral-900'>Send</p>
					</button>
				</div>
				<img
					src={data?.results[0].background_image}
					alt={data?.results[0].name}
					className='h-full absolute top-0 right-0 -z-10 h-[100vh] select-none object-cover object-top opacity-20'
				/>
				<div className='absolute top-0 right-0 -z-10 h-[100vh] w-1/2 bg-gradient-to-r from-neutral-900  bg-no-repeat' />
				<div className='absolute top-0 left-0 -z-10 h-[100vh] w-1/2 bg-neutral-900  bg-no-repeat' />
			</div>
		</div>
	)
}

export default PasswordRecovery
