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
    if (id === "new") {
        editButtons = <button
            onClick={() => createTrackForAlbum(track.album, track)}
            className="btn btn-success btn-block">Create
        </button>
    } else {
        editButtons = <div>
            <button
                onClick={() => updateTrack(id, track)}
                className="btn btn-success btn-block">Save
            </button>
            <button
                onClick={() => deleteTrack(id)}
                className="btn btn-danger btn-block margin-left-10px">Delete
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
            <label>Album</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={track.album}
                onChange={(e) => setTrack(track => ({...track, album: {id: e.target.value}}))}/>
            <br/>
            {editButtons}
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel
            </button>
        </div>
    )
}

export default TrackEditorForm
