/* eslint-disable import/prefer-default-export */

import type { DocumentReference } from 'firebase/firestore'
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where
} from 'firebase/firestore'
import type { INotification } from 'types/generalTypes'
import { db } from 'utils/firebase'

export async function Notify(
	userDocRef: DocumentReference,
	targetNotifs: INotification[],
	link: string,
	message: string,
	icon: number
): Promise<void> {
	const seen = false
	const notifyTime = new Date()
	const notification = {
		message,
		icon,
		link,
		seen,
		notifyTime
	}
	targetNotifs.unshift(notification)
	console.log(targetNotifs)
	await updateDoc(userDocRef, { notifications: targetNotifs })
}

export async function ToggleFollow(
	userUsername: string | undefined,
	targetUsername: string,
	setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
	const targetQuery = query(
		collection(db, 'user'),
		where('username', '==', targetUsername)
	)
	const targetSnapshot = await getDocs(targetQuery)
	let targetFollowers: string[] = targetSnapshot.docs[0].data()
		.followers as string[]
	const targetId = targetSnapshot.docs[0].id

	const userQuery = query(
		collection(db, 'user'),
		where('username', '==', userUsername)
	)
	const userSnapshot = await getDocs(userQuery)
	const userId = userSnapshot.docs[0].id
	let userFollowed: string[] = userSnapshot.docs[0].data().followed as string[]

	const targetNotifs: INotification[] = targetSnapshot.docs[0].data()
		.notifications as INotification[]

	const userRef = doc(db, 'user', userId)
	const userDocSnap = await getDoc(userRef)
	const targetRef = doc(db, 'user', targetId)
	const targetDocSnap = await getDoc(targetRef)

	if (targetFollowers.includes(userId)) {
		targetFollowers = targetFollowers.filter(uid => uid !== userId)
		userFollowed = userFollowed.filter(uid => uid !== targetId)
		setIsFollowing(false)
	} else {
		targetFollowers.push(userId)
		userFollowed.push(targetId)
		setIsFollowing(true)
		Notify(
			targetRef,
			targetNotifs,
			`/@${userUsername}`,
			`@${userUsername} is now following you!`,
			1
		)
	}

	// userFollowed.followed.push(targetFollowing.username)
	// console.log({ target: targetFollowing.followers, user: userFollowed.followed })
	console.log({ target: targetFollowers, user: userFollowed })

	if (userDocSnap.exists()) {
		await updateDoc(userRef, { followed: userFollowed })
	}

	if (targetDocSnap.exists()) {
		await updateDoc(targetRef, { followers: targetFollowers })
	}
}

export async function IsFollowing(
	userUsername: string | undefined,
	targetUsername: string,
	setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>
): Promise<boolean> {
	const targetQuery = query(
		collection(db, 'user'),
		where('username', '==', targetUsername)
	)
	const userQuery = query(
		collection(db, 'user'),
		where('username', '==', userUsername)
	)

	const targetSnapshot = await getDocs(targetQuery)
	const targetId = targetSnapshot.docs[0].id

	const userSnapshot = await getDocs(userQuery)
	const userFollowed: string[] = userSnapshot.docs[0].data()
		.followed as string[]
	if (userFollowed.includes(targetId)) {
		setIsFollowing(true)
	} else {
		setIsFollowing(false)
	}
}

// const querySnapshot = await getDocs(q)
