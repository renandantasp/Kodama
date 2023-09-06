import EssayCard from 'components/essayCard'
import { GetListOf } from 'fbRequests/firebaseRequests'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { IEssay, IUser } from 'types/generalTypes'

interface Props {
	user: IUser
}

function EssaysSection({ user }: Props): ReactElement {
	const [essays, setEssays] = useState<IEssay[] | null>(null)
	useEffect(() => {
		async function GetEssays(): Promise<void> {
			const e = await GetListOf<IEssay>(user.essays, 'essay')
			setEssays(e)
		}
		GetEssays()
	}, [])
	return (
		<div className='flex w-full flex-col'>
			<p className='pl-0 text-center text-4xl font-bold lg:pl-4 lg:text-start'>
				Essays
			</p>
			<div className='mx-6 flex w-full flex-col flex-wrap items-stretch justify-start  lg:mx-0 lg:flex-row'>
				{essays !== null
					? essays.map(essay => <EssayCard key={essay.id} essay={essay} />)
					: null}
			</div>
		</div>
	)
}

export default EssaysSection
