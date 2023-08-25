import Navbar from 'components/navigation/navbar'
import type { ReactElement } from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function WriteReview(): ReactElement {
	const [essayText, setEssayText] = useState('')
	console.log(essayText)
	return (
		<div>
			<Navbar />
			<div className='flex w-full flex-col justify-center'>
				<p className='mb-8 w-full text-center text-3xl'>
					Feature still in development.
				</p>
				<div className='flex w-full flex-row justify-center'>
					<textarea
						className='mr-10 h-[70vh] w-[30vw] rounded bg-neutral-800 text-neutral-200 outline-0'
						onChange={e => setEssayText(e.target.value)}
						value={essayText}
					/>
					<div className='h-[70vh] w-[30vw] rounded bg-neutral-800'>
						<ReactMarkdown>{essayText}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WriteReview
