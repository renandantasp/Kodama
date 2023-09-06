import EssayCard from 'components/essayCard'
import Navbar from 'components/navigation/navbar'
import Sidebar from 'components/navigation/sidebar'
import { collection, getDocs, query } from 'firebase/firestore'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { IEssay } from 'types/generalTypes'
import { db } from 'utils/firebase'

function Essays(): ReactElement {
	const [essays, setEssays] = useState<IEssay[] | null>([])
	useEffect(() => {
		async function GetEssay(): Promise<void> {
			const q = query(collection(db, 'essay'))
			const querySnapshot = await getDocs(q)
			if (querySnapshot.empty) {
				console.log('error')
			} else {
				const newEssays: IEssay[] = []
				querySnapshot.forEach(doc => {
					newEssays.push(doc.data())
				})
				setEssays(newEssays)
			}
		}
		GetEssay()
	}, [])
	console.log(essays)
	return (
		<div className='h-screen'>
			<div>
				<Navbar />
				<Sidebar />
			</div>
			<div className='pt-4 lg:ml-64 lg:pt-4'>
				<div className='mb-4 '>
					<h1 className='mb-2 text-center text-3xl font-bold lg:text-start lg:text-6xl'>
						Essays
					</h1>
				</div>
				<div className='mx-6 flex w-full flex-col flex-wrap items-stretch justify-start  lg:mx-0 lg:flex-row'>
					{essays?.map(essay => (
						<EssayCard key={essay.id} essay={essay} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Essays
