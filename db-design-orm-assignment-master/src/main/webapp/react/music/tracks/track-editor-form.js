import trackService from "./track-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const TrackEditorForm = () => {
    const [track, setTrack] = useState({})
    const {trackId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findTrackById(trackId)
    }, []);
    const findTrackById = (id) =>
        trackService.findTrackById(id)
            .then(track => setTrack(track))
    const updateTrack = (id, newTrack) =>
        trackService.updateTrack(id, newTrack)
            .then(() => history.goBack())
    const deleteTrack = (id) =>
        trackService.deleteTrack(id)
            .then(() => history.goBack())
    
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
                onChange={(e)=>setTrack(track => ({...track, length: parseInt(e.target.value)}))}/>
            <label>Genre</label>
            <select
                className="form-control margin-bottom-10px"
                value={track.genre}
                onChange={(e)=>setTrack(track => ({...track, genre: e.target.value}))}>
                <option>HIP-HOP</option>
                <option>ROCK</option>
                <option>Country</option>
                <option>R&B</option>
                <option>JAZZ</option>
            </select>
            <label>Album</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={track.album}
                onChange={(e)=>setTrack(track => ({...track, album: parseInt(e.target.value)}))}/>
            <label className="margin-bottom-10px">
            <input
                type="checkbox"
                checked={track.online}
                onChange={(e)=>setTrack(track => ({...track, online: e.target.checked}))}/>
                &nbsp;Online
            </label>
            <br/>
            <button
                onClick={() => updateTrack(track.id, track)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteTrack(track.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default TrackEditorForm