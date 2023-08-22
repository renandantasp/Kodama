import { useAuth } from 'contexts/AuthContext'
import type { ReactElement } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from 'utils/firebase'

interface Props {
	children: ReactElement
}

export default function InactivityTimeout({ children }: Props): ReactElement {
	const { hasUser } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		let inactivityTimer: NodeJS.Timeout

		function logOutUser(): void {
			auth
				.signOut()
				.then(() => {
					navigate('/auth/login')
					window.location.reload()
				})
				.catch(err => console.log(err))
			localStorage.removeItem('lastActivity')
		}

		function resetInactivityTimer(): void {
			clearTimeout(inactivityTimer)
			console.log('reset')
			inactivityTimer = setTimeout(logOutUser, 30 * 60 * 1000)
			localStorage.setItem('lastActivity', Date.now().toString())
		}

		function attachEventListener(): void {
			;['mousemove', 'keydown', 'click', 'scroll'].forEach(event => {
				document.addEventListener(event, resetInactivityTimer)
			})
		}

		function checkInactivityOnStart(): void {
			const lastActivity = localStorage.getItem('lastActivity')
			if (lastActivity) {
				const timeSinceLastInteraction = Date.now() - parseInt(lastActivity, 10)
				if (timeSinceLastInteraction >= 30 * 60 * 1000) {
					logOutUser()
				} else {
					resetInactivityTimer()
				}
			} else {
				resetInactivityTimer()
			}
		}

		if (hasUser) {
			attachEventListener()
			checkInactivityOnStart()

			return () => {
				;['mousemove', 'keydown', 'click', 'scroll'].forEach(event => {
					document.removeEventListener(event, resetInactivityTimer)
				})
				clearTimeout(inactivityTimer)
			}
		}
	}, [hasUser])

	return children
}
