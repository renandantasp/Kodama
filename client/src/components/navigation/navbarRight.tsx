import { useAuth } from 'contexts/AuthContext'
import type { ReactElement } from 'react'
import { auth } from 'utils/firebase'
import InfoModal from './infoModal'

function NavbarRight(): ReactElement {
	const { isLoading, user } = useAuth()

	if (isLoading) {
		return <div />
	}

	const signOutRedirect = () => {
		auth.signOut().then(() => {
			window.location.reload(true)
		})
	}

	return (
		<div>
			{user == null ? (
				<div className='h-full flex transition duration-200 ease-in-out'>
					<div className='flex items-center justify-end'>
						<a
							className='mr-4 hidden whitespace-nowrap text-sm lg:flex'
							href='/auth/login'
						>
							LOG IN
						</a>
						<a
							className='mr-4 hidden whitespace-nowrap rounded-full bg-white p-2 text-sm text-neutral-900 lg:flex'
							href='/auth/signup'
						>
							SIGN UP
						</a>
						<InfoModal>
							<div className='flex flex-col rounded-b-lg bg-white p-4 text-neutral-900'>
								<div className='mb-2 flex flex-col'>
									<div className='mt-1 flex w-full flex-col justify-between border-b border-neutral-300 pb-2 lg:hidden'>
										<a
											href='/auth/login'
											className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
										>
											Log In
										</a>
										<a
											href='/auth/signup'
											className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
										>
											Sign Up
										</a>
									</div>
									<a
										href='/'
										className='my-0.5 mt-2 px-1 py-0.5 text-sm hover:bg-neutral-200 lg:mt-0'
									>
										Games
									</a>
									<a
										href='/essays'
										className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
									>
										Essays
									</a>
									<a
										href='/lists'
										className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
									>
										Lists
									</a>
									<a
										href='/about'
										className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
									>
										About
									</a>
								</div>
							</div>
						</InfoModal>
					</div>
				</div>
			) : (
				<div className='flex flex-row items-center'>
					<a href={`/@${user.username}`} className='mr-2 w-16'>
						<img
							src={user.profileImage}
							alt={user.username}
							className='mr-4 w-10 rounded-full'
						/>
					</a>
					<InfoModal>
						<div className='flex flex-col rounded-b-lg bg-white p-4 text-neutral-900'>
							<div className='mb-2 flex flex-col'>
								<a
									href='/'
									className='my-0.5 mt-2 px-1 py-0.5 text-sm hover:bg-neutral-200 lg:mt-0'
								>
									Games
								</a>
								<a
									href='/essays'
									className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
								>
									Essays
								</a>
								<a
									href='/lists'
									className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
								>
									Lists
								</a>
								<a
									href='/about'
									className='my-0.5 px-1 py-0.5 text-sm hover:bg-neutral-200'
								>
									About
								</a>
								<button
									type='submit'
									className='my-0.5 px-1 py-0.5 text-start text-sm hover:bg-neutral-200'
									onClick={signOutRedirect}
								>
									Sign out
								</button>
							</div>
						</div>
					</InfoModal>
				</div>
			)}
		</div>
	)
}

export default NavbarRight
