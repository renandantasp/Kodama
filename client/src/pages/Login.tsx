/* eslint-disable react/no-unescaped-entities */
import GetRandomGame from 'api/getRandomGame'
import Error from 'components/error'
import Navbar from 'components/navbar'
import { signInWithEmailAndPassword } from 'firebase/auth'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { auth } from 'utils/firebase'

function Login(): ReactElement {
	const { isLoading, error, data } = GetRandomGame()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	if (isLoading)
		return (
			<div>
				<Navbar />
			</div>
		)
	if (error) return <Error />

	const signIn = e => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then(user => {
				console.log(user)
			})
			.catch(error => console.log(error.message))
	}

	return (
		<div>
			<Navbar />
			<div className='flex justify-center'>
				<div className='mx-8 flex flex-col items-center sm:w-full lg:mt-36 lg:w-[32rem]'>
					<h1 className='mb-6 text-center text-4xl font-medium'>Log in</h1>

					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='mb-4 w-full rounded border-0 bg-black p-2 text-neutral-100  placeholder:text-neutral-400 '
					/>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className='mb-4 w-full rounded border-0 bg-black p-2 text-neutral-100 placeholder:text-neutral-400 '
						placeholder='Password'
					/>

					<button
						type='submit'
						onClick={signIn}
						className=' mb-6 w-full rounded bg-neutral-200 p-2 hover:bg-neutral-100 active:bg-neutral-300 '
					>
						<p className='text-neutral-900'>Log in</p>
					</button>
					<a
						href='/signup'
						className='mb-2 w-fit text-sm underline duration-150 ease-in-out hover:text-neutral-300'
					>
						Don't have an account? Sign up.
					</a>
					<a
						href='/password_recovery'
						className='w-fit text-sm underline duration-150 ease-in-out hover:text-neutral-300'
					>
						{' '}
						Forgot your password?
					</a>
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

export default Login
