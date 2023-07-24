import GetGameById from 'api/getGameById'
import GamePage from 'components/id_page/GamePage'
import type { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import type { IGame } from 'types/generalTypes'

export default function Game(): ReactElement {
	const params = useParams()
	if (params.id === undefined) {
		return <div>ERRROOOOOO</div>
	}
	const { isLoading, error, data } = GetGameById(params.id)

	if (isLoading) return <div>calma</div>
	if (error) return <div>ERRROOOOOO</div>

	return <GamePage game={data as IGame} />
}
