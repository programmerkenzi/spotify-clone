import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-position",
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "streaming",
].join(',')

const params = {
    scopes: scopes,
    client_id: process.env.CLIENT_ID,
    response_type: 'code',
}

const queryParamsString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}&redirect_uri=${process.env.REDIRECT_URI}`;
const GET_TOKEN_URL = `https://accounts.spotify.com/api/token`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
})






export default spotifyApi;

export { LOGIN_URL, GET_TOKEN_URL };