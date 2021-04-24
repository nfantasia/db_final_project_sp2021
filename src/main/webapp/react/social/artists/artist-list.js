import artistService from "./artist-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const ArtistList = () => {
    const history = useHistory()
    const [artists, setArtists] = useState([])
    useEffect(() => {
        findAllArtists()
    }, [])
    const findAllArtists = () =>
        artistService.findAllArtists()
            .then(artists => setArtists(artists))
    return(
        <div>
            <h2>Artist List</h2>
            <button onClick={() => history.push("/artists/new")}>
                Add Artist
            </button>
            <ul>
                {
                    artists.map(artist =>
                        <li key={artist.id}>
                            <Link to={`/artists/${artist.id}`}>
                            {artist.firstName},
                            {artist.lastName},
                            {artist.username}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}
export default ArtistList;