import trackService from "./track-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const TrackEditorForm = () => {
    const history = useHistory()
    const {id} = useParams()
    const [track, setTrack] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findTrackById(id)
        }
    }, []);
    const findTrackById = (id) =>
        trackService.findTrackById(id)
            .then(track => setTrack(track))
    const createTrackForAlbum = (albumId, newTrack) =>
        trackService.createTrackForAlbum(albumId, newTrack)
            .then(() => history.goBack())
    const updateTrack = (id, newTrack) =>
        trackService.updateTrack(id, newTrack)
            .then(() => history.goBack())
    const deleteTrack = (id) =>
        trackService.deleteTrack(id)
            .then(() => history.goBack())

    let editButtons
    let editFields
    if (id === "new") {
        editButtons = <button
            onClick={() => createTrackForAlbum(track.album, track)}
            className="btn btn-success btn-block">Create
        </button>
        editFields = <div>
            <label>Album ID</label>
            <input
                className="form-control"
                onChange={(e) => setTrack(track => ({...track, album: e.target.value}))}
                value={track.album}/>
        </div>
    } else {
        editButtons = <div>
            <button
                onClick={() => {
                    history.push(`/albums/${track.album.id}`)
                }}
                className="btn btn-primary btn-block">Go-to Album
            </button>
            <button
                onClick={() => updateTrack(id, track)}
                className="btn btn-success btn-block">Save
            </button>
            <button
                onClick={() => deleteTrack(id)}
                className="btn btn-danger btn-block">Delete
            </button>
        </div>
    }

    return (
        <div>
            <h2>
                Track Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={track.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setTrack(track => ({...track, title: e.target.value}))}
                value={track.title}/>
            <label>Length</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={track.length}
                onChange={(e) => setTrack(
                    track => ({...track, length: parseInt(e.target.value)}))}/>
            <label>Genre</label>
            <select
                className="form-control margin-bottom-10px"
                value={track.genre}
                onChange={(e) => setTrack(track => ({...track, genre: e.target.value}))}>
                <option>HIP-HOP</option>
                <option>ROCK</option>
                <option>COUNTRY</option>
                <option>BLUES</option>
                <option>JAZZ</option>
            </select>
            {editFields}
            <br/>
            {editButtons}
            <button
                onClick={() => {
                    history.push('/')
                }}
                className="btn btn-primary btn-block">Home
            </button>
        </div>
    )
}

export default TrackEditorForm
