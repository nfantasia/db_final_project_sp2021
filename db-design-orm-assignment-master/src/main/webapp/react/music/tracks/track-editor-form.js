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
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setTrack(track => ({...track, name: e.target.value}))}
                value={track.name}/>
            <label>Seats</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={track.seats}
                onChange={(e)=>setTrack(track => ({...track, seats: parseInt(e.target.value)}))}/>
            <label>Semester</label>
            <select
                className="form-control margin-bottom-10px"
                value={track.semester}
                onChange={(e)=>setTrack(track => ({...track, semester: e.target.value}))}>
                <option>FALL</option>
                <option>SPRING</option>
                <option>SUMMER</option>
            </select>
            <label>Year</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={track.year}
                onChange={(e)=>setTrack(track => ({...track, year: parseInt(e.target.value)}))}/>
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