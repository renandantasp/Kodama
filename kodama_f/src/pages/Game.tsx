/* eslint-disable unicorn/prevent-abbreviations */
import type { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import GetGameById from 'api/getGameById'
import GamePage from 'components/id_page/GamePage'

export default function Game(): ReactElement {
	const params = useParams()
	const { isLoading, error, data } = GetGameById(params.id)

	if (isLoading) return <div>calma</div>
	if (error) return <div>ERRROOOOOO</div>

	return <GamePage game={data} />
}
