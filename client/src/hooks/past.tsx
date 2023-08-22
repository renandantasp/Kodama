// import { useAuth } from 'contexts/AuthContext'
// import type { ReactElement } from 'react'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { auth } from 'utils/firebase'

// interface Props {
// 	children: ReactElement
// }

// export default function InactivityTimeoutWrapper({
// 	children
// }: Props): ReactElement {
// 	const [lastActivity, setLastActivity] = useState(Date.now())
// 	const inactivityTimeout = 2 * 1000
// 	const { user } = useAuth()
// 	const navigate = useNavigate()

// 	function signOutRedirect(): void {
// 		auth
// 			.signOut()
// 			.then(() => {
// 				navigate('/auth/login')
// 				window.location.reload()
// 			})
// 			.catch(err => console.log(err))
// 	}

// 	const updateUserActivity = (): void => {
// 		setLastActivity(Date.now())
// 	}

// 	function updateUserActivityStorage(): void {
// 		const now = new Date().getTime()
// 		localStorage.setItem('lastActivity', now.toString())
// 	}

// 	const checkInactivityTimeout = (): void => {
// 		const currentTime = Date.now()
// 		if (currentTime - lastActivity > inactivityTimeout && user !== null) {
// 			signOutRedirect()
// 		}
// 	}

// 	function checkInactivityStorage(): void {
// 		const lastActivitySt = parseInt(
// 			localStorage.getItem('lastActivity') || '0',
// 			10
// 		)
// 		const currentTime = new Date().getTime()
// 		const inactivity = 1000 // 30 minutes in milliseconds
// 		if (currentTime - lastActivitySt > inactivity && user !== null) {
// 			console.log('user should log out')
// 		}
// 	}

// 	useEffect(() => {
// 		window.addEventListener('mousemove', updateUserActivity)
// 		window.addEventListener('keydown', updateUserActivity)
// 		window.addEventListener('click', updateUserActivity)

// 		// const interval = setInterval(checkInactivityTimeout, 10 * 1000)
// 		const interval = setInterval(checkInactivityStorage, 2 * 1000)

// 		return () => {
// 			window.removeEventListener('mousemove', updateUserActivity)
// 			window.removeEventListener('keydown', updateUserActivity)
// 			window.removeEventListener('click', updateUserActivity)
// 			clearInterval(interval)
// 		}
// 	}, [lastActivity])

// 	return children
// }
