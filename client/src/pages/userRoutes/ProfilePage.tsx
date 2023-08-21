import Loading from 'components/loading'
import Navbar from 'components/navigation/navbar'
import UserPage from 'components/userpage/UserPage'
import { useAuth } from 'contexts/AuthContext'
import { collection, getDocs, query, where } from 'firebase/firestore'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from 'utils/firebase'

export default function ProfilePage(): ReactElement {
	const params = useParams()
	const { user } = useAuth()
	const [userProfile, setUserProfile] = useState()
	const [editable, setEditable] = useState()
	const [hasUser, setHasUser] = useState(true)

	useEffect(() => {
		async function GetUser(): Promise<void> {
			const q = query(
				collection(db, 'user'),
				where('username', '==', params.id)
			)
			const querySnapshot = await getDocs(q)
			if (querySnapshot.empty) {
				setHasUser(false)
				setUserProfile(null)
			} else {
				querySnapshot.forEach(doc => {
					setUserProfile(doc.data())
					if (user !== null) {
						setEditable(userProfile.username === user.username)
					}
				})
			}
		}
		GetUser()
	}, [user])

	if (params.id === undefined) {
		return <div>ERRROOOOOO</div>
	}
	console.log({ userProfile, editable, hasUser })

	return (
		<div className='h-screen'>
			<Navbar />
			{userProfile === undefined ? (
				<div className='flex h-[90vh] items-center justify-center'>
					<Loading />
				</div>
			) : (
				<div>
					{hasUser ? (
						<UserPage user={userProfile} editable={editable} />
					) : (
						<div className='flex h-[90vh] items-center justify-center'>
							This user does not exist :/
						</div>
					)}
				</div>
			)}
		</div>
	)

	// return <GamePage game={data as IGame} />
}
