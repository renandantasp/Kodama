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

export async function SeeNotification(username: string): Promise<void> {
	const userQuery = query(
		collection(db, 'user'),
		where('username', '==', username)
	)
	const userSnapshot = await getDocs(userQuery)
	const userId = userSnapshot.docs[0].id

	const userNotifs: INotification[] = userSnapshot.docs[0].data()
		.notifications as INotification[]

	const newNotifs = userNotifs.map((notif: INotification) => ({
		...notif,
		seen: true
	}))
	const userRef = doc(db, 'user', userId)
	const userDocSnap = await getDoc(userRef)

	if (userDocSnap.exists()) {
		await updateDoc(userRef, { notifications: newNotifs })
	}
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
	if (userDocSnap.exists()) {
		await updateDoc(userRef, { followed: userFollowed })
	}

	if (targetDocSnap.exists()) {
		await updateDoc(targetRef, { followers: targetFollowers })
	}
}

export async function TogglePlayed(
	username: string | undefined,
	gameId: number,
	setPlayed: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
	const q = query(collection(db, 'user'), where('username', '==', username))
	const snapshot = await getDocs(q)
	const { id } = snapshot.docs[0]
	let userPlayed: number[] = snapshot.docs[0].data().played as number[]

	if (userPlayed.includes(gameId)) {
		userPlayed = userPlayed.filter(gid => gid !== gameId)
		setPlayed(false)
	} else {
		userPlayed.push(gameId)
		setPlayed(true)
	}

	const userRef = doc(db, 'user', id)
	const userDocSnap = await getDoc(userRef)
	if (userDocSnap.exists()) {
		await updateDoc(userRef, { played: userPlayed })
	}
}

export async function ToggleBacklog(
	username: string | undefined,
	gameId: number,
	setPlayed: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
	const q = query(collection(db, 'user'), where('username', '==', username))
	const snapshot = await getDocs(q)
	const { id } = snapshot.docs[0]
	let userBacklog: number[] = snapshot.docs[0].data().backlog as number[]

	if (userBacklog.includes(gameId)) {
		userBacklog = userBacklog.filter(gid => gid !== gameId)
		setPlayed(false)
	} else {
		userBacklog.push(gameId)
		setPlayed(true)
	}

	const userRef = doc(db, 'user', id)
	const userDocSnap = await getDoc(userRef)
	if (userDocSnap.exists()) {
		await updateDoc(userRef, { backlog: userBacklog })
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
