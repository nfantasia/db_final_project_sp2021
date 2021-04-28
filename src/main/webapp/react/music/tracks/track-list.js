import trackService from "./track-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

const TrackList = () => {
    const history = useHistory()
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        findAllTracks()
    }, [])
    const findAllTracks = () =>
        trackService.findAllTracks()
            .then(tracks => setTracks(tracks))
    return (
        <div>
            <h2>Track List</h2>
            <button onClick={() => history.push("/tracks/new")}>
                Add Track
            </button>
            <ul>
                {
                    tracks.map(track =>
                                   <li key={track.id}>
                                       <Link to={`/tracks/${track.id}`}>
                                           {track.title},
                                           {track.length},
                                           {track.genre}
                                       </Link>
                                   </li>)
                }
            </ul>
        </div>
    )
}
export default TrackList;
