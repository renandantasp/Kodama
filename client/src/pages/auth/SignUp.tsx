import GetRandomGame from 'api/getRandomGame'
import Error from 'components/error'
import Navbar from 'components/navigation/navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where
} from 'firebase/firestore'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { auth, db } from 'utils/firebase'

import {
	AiOutlineArrowDown,
	AiOutlineArrowUp,
	AiOutlineCloseCircle
} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function SignUp(): ReactElement {
	const { isLoading, error, data } = GetRandomGame()
	const [username, setUsername] = useState('')
	const [userUnique, setUserUnique] = useState(true)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [emailValid, setEmailValid] = useState(true)
	const [emailMessage, setEmailMessage] = useState('')
	const [password, setPassword] = useState('')
	const [passwordCopy, setPasswordCopy] = useState('')
	const [img, setImg] = useState('/amelia.jpg')
	const [visible, setVisible] = useState(false)
	const navigate = useNavigate()

	const imgNames = [
		'amelia',
		'andrew',
		'ava',
		'bob',
		'charlotte',
		'emily',
		'gabriel',
		'james',
		'mia',
		'michael',
		'morgana',
		'olivia',
		'robot',
		'sophia',
		'william'
	]

	useEffect(() => {
		async function IsUsernameUnique(): Promise<void> {
			const q = query(collection(db, 'user'), where('username', '==', username))
			const querySnapshot = await getDocs(q)
			setUserUnique(querySnapshot.empty)
		}
		IsUsernameUnique()
	}, [username])

	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
	const passwordPattern =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/

	useEffect(() => {
		async function IsEmailValid(): Promise<void> {
			const q = query(collection(db, 'user'), where('email', '==', email))
			const querySnapshot = await getDocs(q)
			setEmailValid(querySnapshot.empty)
			if (querySnapshot.empty) {
				setEmailMessage('')
			} else {
				setEmailMessage('This Email was already used')
			}
		}
		if (emailPattern.test(email)) {
			IsEmailValid()
		} else {
			setEmailValid(false)
			setEmailMessage('Not a valid Email')
		}
	}, [email])

	const usernameCheck = username.length > 0 && userUnique
	const nameCheck = name.length > 0
	const passwordCheck = passwordPattern.test(password)
	const passwordCopyCheck = password === passwordCopy
	const createAccountCheck =
		usernameCheck &&
		nameCheck &&
		emailValid &&
		passwordCheck &&
		passwordCopyCheck

	if (isLoading)
		return (
			<div>
				<Navbar />
			</div>
		)
	if (error) return <Error />

	const toggleVisible = (): void => {
		setVisible(!visible)
	}

	const changeImage = (imgName: string): void => {
		setImg(`/${imgName}.jpg`)
	}

	function signUp(e): void {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCred => {
				const { user } = userCred
				setDoc(doc(db, 'user', user.uid), {
					name,
					email: user.email,
					username,
					profileImage: img,
					bio: { description: '', birth: '', link: '', location: '' },
					backlog: [],
					played: [],
					lists: [],
					essays: [],
					followers: [],
					followed: [],
					notifications: []

					// Add more fields here as needed
				})
					.then(() => navigate('/'))
					.catch(err => console.log(err))
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
						placeholder='Full Name'
						value={name}
						onChange={e => setName(e.target.value)}
						className={`mb-4 w-full rounded border-0 bg-black p-2 text-neutral-100 outline outline-1 placeholder:text-neutral-400 ${
							nameCheck ? 'focus:outline-lime-500' : 'outline-red-500'
						}`}
					/>
					<input
						placeholder='Username'
						value={username}
						onChange={e => setUsername(e.target.value)}
						className={`mb-1 w-full rounded border-0 bg-black p-2 text-neutral-100 outline outline-1 placeholder:text-neutral-400 ${
							usernameCheck ? 'focus:outline-lime-500' : 'outline-red-500'
						}`}
					/>
					{!userUnique ? (
						<p className='mb-4 mt-0.5 w-full text-start text-sm text-red-500'>
							Username already in use
						</p>
					) : (
						<div className='mb-4' />
					)}

					<input
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className={`mb-1 w-full rounded border-0 bg-black p-2 text-neutral-100 outline outline-1 placeholder:text-neutral-400 ${
							emailValid ? 'focus:outline-lime-500' : 'outline-red-500'
						}`}
					/>
					{!emailValid ? (
						<p className='mb-4 mt-0.5 w-full text-start text-sm text-red-500'>
							{emailMessage}
						</p>
					) : (
						<div className='mb-4' />
					)}
					<button
						type='button'
						onClick={toggleVisible}
						className='mb-4 flex w-full justify-between rounded border-0 bg-neutral-800 p-2 text-neutral-400 outline outline-1 outline-neutral-700'
					>
						<div className='flex items-center'>
							<img src={img} className='mr-4 w-10 rounded-full' alt={img} />
							<p>Choose a profile picture</p>
						</div>
						<p className='mt-3'>
							{visible ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
						</p>
					</button>
					<div
						className={`absolute top-[19%] rounded-lg ${
							visible ? 'visible' : 'invisible'
						} flex h-[18rem] w-[29rem] flex-col items-end border border-neutral-500  bg-neutral-700 py-3`}
					>
						<button
							type='button'
							onClick={() => setVisible(false)}
							className='pr-6 pb-3 text-2xl text-neutral-200'
						>
							<AiOutlineCloseCircle />
						</button>
						<div className='flex flex-row flex-wrap justify-center overflow-auto'>
							{imgNames.map((imgName: string) => {
								const selected = `/${imgName}.jpg` === img

								return (
									<button
										type='button'
										key={imgName}
										onClick={() => changeImage(imgName)}
										className={`m-2 rounded ${
											selected
												? 'bg-blue-500 outline outline-4 outline-blue-500'
												: ''
										}`}
									>
										<img
											src={`/${imgName}.jpg`}
											className='w-32 rounded'
											alt={imgName}
										/>
									</button>
								)
							})}
						</div>
					</div>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className={` w-full rounded border-0 bg-black p-2 text-neutral-100 outline outline-1 placeholder:text-neutral-400 ${
							passwordCheck ? 'focus:outline-lime-500' : 'outline-red-500'
						}`}
						placeholder='Create a password'
					/>
					{!passwordCheck ? (
						<p className='mb-4 mt-0.5 w-full text-start text-sm text-red-500'>
							Password must have letters (at least one uppercase and onde
							lowercase), numbers, symbols and at least 7 characters.
						</p>
					) : (
						<div className='mb-4' />
					)}

					<input
						type='password'
						value={passwordCopy}
						onChange={e => setPasswordCopy(e.target.value)}
						className={` w-full rounded border-0 bg-black p-2 text-neutral-100 outline outline-1 placeholder:text-neutral-400 ${
							passwordCopyCheck ? 'focus:outline-lime-500' : 'outline-red-500'
						}`}
						placeholder='Confirm your password'
					/>
					{!passwordCopyCheck ? (
						<p className='mb-4 mt-0.5 w-full text-start text-sm text-red-500'>
							Password must be equal.
						</p>
					) : (
						<div className='mb-4' />
					)}

					<button
						type='submit'
						onClick={signUp}
						disabled={!createAccountCheck}
						className={`mb-6 w-full rounded p-2 ${
							createAccountCheck
								? 'bg-neutral-200  hover:bg-neutral-100 active:bg-neutral-300'
								: 'cursor-default bg-neutral-400'
						}`}
					>
						<p className='text-neutral-900'>Sign up</p>
					</button>
					<a
						href='/auth/login'
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
