import GetGameById from 'api/getGameById'
import Error from 'components/error'
import GamePage from 'components/id_page/GamePage'
import Loading from 'components/loading'
import Navbar from 'components/navigation/navbar'
import type { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import type { IGame } from 'types/generalTypes'

export default function Game(): ReactElement {
	const params = useParams()
	if (params.id === undefined) {
		return <div>ERRROOOOOO</div>
	}
	const { isLoading, error, data } = GetGameById(params.id, '')

	if (isLoading)
		return (
			<div className='h-screen'>
				<Navbar />
				<div className='flex h-[90vh] items-center justify-center'>
					<Loading />
				</div>
			</div>
		)
	if (error) return <Error />

	return <GamePage game={data as IGame} />
}
