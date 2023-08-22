import Navbar from 'components/navigation/navbar'
import type { ReactElement } from 'react'
import { ImMail } from 'react-icons/im'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { SlGlobe } from 'react-icons/sl'

function About(): ReactElement {
	return (
		<div>
			<Navbar />
			<div className='lg:ml-40'>
				<h1 className=' mt-10 text-center text-2xl font-bold text-neutral-200 lg:text-start lg:text-6xl'>
					Hi, I'm Renan! 👋
				</h1>
				<p className='my-6  items-center text-center text-neutral-300 lg:text-start lg:text-xl'>
					I'm the creator of KODAMA.
				</p>
				<p className='my-6 px-3 text-center text-neutral-300 lg:w-[40rem] lg:px-0 lg:text-start'>
					{' '}
					KODAMA is a personal project built with the intention of developing
					skills and test functionalities and features. The first idea was to
					build a front-end clone to develop some html/css skills, but it grew a
					lot and today is kind of a social media app for discussing and sharing
					video games.
				</p>

				<p className='my-6 px-3 text-center text-neutral-300 lg:w-[40rem] lg:px-0 lg:text-start'>
					{' '}
					This project is not meant to work as a full fledged social media
					website, even though the functionalities are being built day after
					day, the idea is to learn, experiment and have fun.
				</p>

				<p className='my-6 px-3 text-center text-neutral-300 lg:w-[40rem] lg:px-0 lg:text-start'>
					{' '}
					If you are interested in learn more about the development and the
					ideas and technologies behind KODAMA, I suggest to check out{' '}
					<a
						href='https://github.com/renandantasp/Kodama'
						target='_blank'
						className='font-bold text-white hover:italic hover:underline'
						rel='noreferrer'
					>
						KODAMA
					</a>
					's public repository hosted at my github page. Also, if you are also
					interested in other projects of mine, please, check out my{' '}
					<a
						href='https://renandantas.xyz/'
						target='_blank'
						className='font-bold text-lime-300 hover:italic hover:underline'
						rel='noreferrer'
					>
						portfolio
					</a>
					!
				</p>

				<p className=' text-center text-2xl font-medium lg:text-start'>
					{' '}
					Contact me
				</p>
				<div className='mt-4 flex flex-row justify-center text-2xl lg:items-start lg:justify-start'>
					<a
						href='https://www.linkedin.com/in/renandnt/'
						target='_blank'
						className='mr-3'
						rel='noreferrer'
					>
						<SiLinkedin />
					</a>
					<a
						href='https://github.com/renandantasp/'
						target='_blank'
						className='mr-3'
						rel='noreferrer'
					>
						<SiGithub />
					</a>
					<a
						href='https://renandantas.xyz'
						target='_blank'
						className='mr-3'
						rel='noreferrer'
					>
						<SlGlobe />
					</a>
					<a
						href='mailto:renandantasp@gmail.com'
						target='_blank'
						className='mr-3'
						rel='noreferrer'
					>
						<ImMail />
					</a>
				</div>
			</div>
			<img
				src='/renan.jpg'
				alt='renan'
				className='h-full absolute top-0 right-0 -z-10 h-[100vh] select-none object-cover object-top opacity-20'
			/>
			<div className='absolute top-0 right-0 -z-10 h-[100vh] w-1/2 bg-gradient-to-r from-neutral-900  bg-no-repeat' />
			<div className='absolute top-0 left-0 -z-10 h-[100vh] w-1/2 bg-neutral-900  bg-no-repeat' />
		</div>
	)
}

export default About
