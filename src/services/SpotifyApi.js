import SpotifyWebApi from 'spotify-web-api-node'
import {getQueryParam} from './params'

const SpotifyApi = new SpotifyWebApi()
const accessToken = getQueryParam('access_token')
if (accessToken) SpotifyApi.setAccessToken(accessToken)

export default SpotifyApi
