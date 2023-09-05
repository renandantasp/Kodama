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
		<div className='flex flex-col flex-wrap lg:flex-row'>
			{essays !== null
				? essays.map(essay => <EssayCard key={essay.id} essay={essay} />)
				: null}
		</div>
	)
}

export default EssaysSection
