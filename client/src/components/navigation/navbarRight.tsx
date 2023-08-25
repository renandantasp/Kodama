import { useAuth } from 'contexts/AuthContext'
import type { ReactElement } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiPlus, BiSolidBell } from 'react-icons/bi'
import { auth } from 'utils/firebase'
import InfoModal from './infoModal'

function NavbarRight(): ReactElement {
	const { isLoading, user } = useAuth()

	if (isLoading) {
		return <div className='mx-[1rem] w-[12rem]' />
	}

	const signOutRedirect = () => {
		auth.signOut().then(() => {
			window.location.reload(true)
		})
	}

	return (
		<div>
			{user == null ? (
				<div className='h-full flex w-[12rem] transition duration-200 ease-in-out'>
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
				<div className='flex flex-row items-center justify-center '>
					<a href={`/@${user.username}`} className='mr-4 w-8 lg:w-10'>
						<img
							src={user.profileImage}
							alt={user.username}
							className='w-8 rounded-full lg:w-10'
						/>
					</a>
					<div className='group mr-4 hidden text-2xl transition duration-300 ease-in-out lg:flex'>
						<BiSolidBell />
						<div className='absolute z-20 ml-2 -mt-1 flex h-[1.15rem] w-[1.15rem] items-center justify-center rounded-full bg-red-500 text-center text-xs'>
							<p className='h-full w-full'>1</p>
						</div>
						<div className='absolute -ml-16 mt-6 hidden w-40 flex-col justify-center rounded-lg bg-neutral-100 p-2 text-sm text-neutral-900  transition duration-300 ease-in-out group-hover:flex'>
							<p className='my-0.5 mt-2 px-1 py-0.5 text-sm hover:bg-neutral-200 lg:mt-0'>
								@someone started following you
							</p>
						</div>
					</div>
					<div className='group mr-4 hidden text-3xl transition duration-300 ease-in-out lg:flex'>
						<BiPlus />
						<div className='absolute -ml-8 mt-7 hidden w-28 flex-col justify-center rounded-lg bg-neutral-100 p-2 text-sm text-neutral-900  transition duration-300 ease-in-out group-hover:flex'>
							<a
								href='/write_review'
								className='my-1 w-full rounded-lg px-2 hover:bg-neutral-300'
							>
								New Essay
							</a>
							<a
								href='/new_list'
								className='my-1 w-full rounded-lg px-2 hover:bg-neutral-300'
							>
								New List
							</a>
						</div>
					</div>
					<div className='group mr-4 hidden text-xl transition duration-300 ease-in-out lg:flex'>
						<AiOutlineMenu />
						<div className='absolute -ml-8 mt-5 hidden flex-col justify-center rounded-lg bg-neutral-100 p-4 text-sm text-neutral-900  transition duration-300 ease-in-out group-hover:flex'>
							<div className='flex flex-col rounded-lg text-neutral-900'>
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
						</div>
					</div>
					<div className='flex lg:hidden'>
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
				</div>
			)}
		</div>
	)
}

export default NavbarRight
