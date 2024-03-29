import Loading from 'components/loading'
import Navbar from 'components/navigation/navbar'
import Sidebar from 'components/navigation/sidebar'
import UserPage from 'components/userpage/userPage'
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
	const [editable, setEditable] = useState(false)
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
						console.log({
							pageUser: userProfile.username,
							realUser: user.username
						})
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
	return (
		<div className='h-screen'>
			<Navbar />
			<Sidebar />
			{userProfile === undefined || editable === undefined ? (
				<div className='flex h-[90vh] items-center justify-center'>
					<Loading />
				</div>
			) : (
				<div>
					{hasUser ? (
						<UserPage pageUser={userProfile} editable={editable} />
					) : (
						<div className='flex h-[90vh] items-center justify-center text-3xl font-medium'>
							This user does not exist
						</div>
					)}
				</div>
			)}
		</div>
	)

	// return <GamePage game={data as IGame} />
}
