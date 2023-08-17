import GetRandomGame from 'api/getRandomGame'
import Error from 'components/error'
import Navbar from 'components/navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { auth } from 'utils/firebase'

function SignUp(): ReactElement {
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

	const signUp = e => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
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
					<h1 className='mb-6 text-center text-4xl font-medium'>Sign up</h1>

					<input
						type='text'
						placeholder='Username'
						className='mb-4 w-full rounded border-0 bg-black p-2 text-neutral-100  placeholder:text-neutral-400 '
					/>
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
						placeholder='Create a password'
					/>

					<button
						type='submit'
						onClick={signUp}
						className=' mb-6 w-full rounded bg-neutral-200 p-2 hover:bg-neutral-100 active:bg-neutral-300 '
					>
						<p className='text-neutral-900'>Sign up</p>
					</button>
					<a
						href='/login'
						className='mb-2 w-fit text-sm underline duration-150 ease-in-out hover:text-neutral-300'
					>
						Already have an account? Log in.
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

export default SignUp
