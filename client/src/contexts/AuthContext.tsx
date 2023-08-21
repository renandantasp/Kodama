import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { IContext, IUser } from 'types/generalTypes'
import { auth, db } from 'utils/firebase'

import type { ReactElement } from 'react'

interface Props {
	children: ReactElement
}

const AuthContext = createContext({
	isLoading: true,
	user: null,
	signOut: async () => {} // A placeholder function
})

export function AuthProvider({ children }: Props): ReactElement {
	const [currentUser, setCurrentUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function getUser(user: IUser): Promise<void> {
			const docRef = doc(db, 'user', user.uid)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				const curr = docSnap.data() as IUser
				setCurrentUser(curr)
				localStorage.setItem('hasUser', '1')
			}
		}

		const subscribe = onAuthStateChanged(
			auth,
			async (user: IUser): Promise<void> => {
				if (user != null) {
					await getUser(user)
				} else {
					localStorage.setItem('hasUser', '0')
				}
				setIsLoading(false)
			}
		)

		return () => subscribe()
	}, [])
	const value = useMemo(
		() => ({ isLoading, user: currentUser }),
		[currentUser, isLoading]
	)
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): IContext {
	return useContext(AuthContext)
}
