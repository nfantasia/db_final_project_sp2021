const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const TrackEditorInline = ({track, deleteTrack, updateTrack}) => {
    const [trackCopy, setTrackCopy] = useState(track)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={trackCopy.name}
                            onChange={(e)=>setTrackCopy(trackCopy => ({...trackCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={trackCopy.seats}
                            onChange={(e)=>setTrackCopy(trackCopy => ({...trackCopy, seats: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={trackCopy.semester}
                            onChange={(e)=>setTrackCopy(trackCopy => ({...trackCopy, semester: e.target.value}))}>
                            <option>FALL</option>
                            <option>SPRING</option>
                            <option>SUMMER</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={trackCopy.year}
                            onChange={(e)=>setTrackCopy(trackCopy => ({...trackCopy, year: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <label>
                        <input
                            type="checkbox"
                            checked={trackCopy.online}
                            onChange={(e)=>setTrackCopy(trackCopy => ({...trackCopy, online: e.target.checked}))}/>
                            &nbsp;
                            Online
                        </label>
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            value={trackCopy.startDate}
                            onChange={(e)=>setTrackCopy(trackCopy => ({...trackCopy, startDate: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateTrack(trackCopy.id, trackCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteTrack(track.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.seats}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.semester}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.year}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.online && 'Online'}
                            {!trackCopy.online && 'On Campus'}
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default TrackEditorInline;