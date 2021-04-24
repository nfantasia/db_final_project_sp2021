import TrackEditorInline from "./track-editor-inline";
import trackService, {createTrackForAlbum} from "./track-service"

const TRACK_URL = "http://localhost:8080/api/tracks"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const TrackList = () => {
    const [tracks, setTracks] = useState([])
    const [newTrack, setNewTrack] = useState({})
    const {albumId} = useParams()
    useEffect(() => {
        findTracksForAlbum(albumId)
    }, [])
    const createTrackForAlbum = (track) =>
        trackService.createTrackForAlbum(albumId, track)
            .then(track => {
                setNewTrack({name:''})
                setTracks(tracks => ([...tracks, track]))
            })
    const updateTrack = (id, newTrack) =>
        trackService.updateTrack(id, newTrack)
            .then(track => setTracks(tracks => (tracks.map(track => track.id === id ? newTrack : track))))
    const findTracksForAlbum = (albumId) =>
        trackService.findTracksForAlbum(albumId)
            .then(tracks => setTracks(tracks))
    const deleteTrack = (id) =>
        trackService.deleteTrack(id)
            .then(tracks => setTracks(tracks => tracks.filter(track => track.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Tracks
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Track Name"
                                   title="Please enter a name for the track"
                                   className="form-control"
                                   value={newTrack.title}
                                   onChange={(e) => setNewTrack(newTrack => ({...newTrack, name: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createTrackForAlbum(newTrack)}></i>
                        </div>
                    </div>
                </li>
            {
                tracks.map(track =>
                    <li key={track.id} className="list-group-item">
                        <TrackEditorInline key={track._id}
                                           updateTrack={updateTrack}
                                           deleteTrack={deleteTrack}
                                           track={track}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default TrackList;