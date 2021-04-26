const {useState, useEffect} = React;
const {Link} = window.ReactRouterDOM;

const TrackEditorInline = ({track, deleteTrack, updateTrack}) => {
    const [trackCopy, setTrackCopy] = useState(track)
    const [editing, setEditing] = useState(false)
    return (
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={trackCopy.title}
                            onChange={(e) => setTrackCopy(trackCopy => ({...trackCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={trackCopy.length}
                            onChange={(e) => setTrackCopy(trackCopy => ({
                                ...trackCopy,
                                length: parseInt(e.target.value)
                            }))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={trackCopy.genre}
                            onChange={(e) => setTrackCopy(trackCopy => ({...trackCopy, genre: e.target.value}))}>
                            <option>HIP_HOP</option>
                            <option>ROCK</option>
                            <option>COUNTRY</option>
                            <option>R&B</option>
                            <option>JAZZ</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={trackCopy.album}
                            onChange={(e) => setTrackCopy(trackCopy => ({
                                ...trackCopy,
                                album: parseInt(e.target.value)
                            }))}/>
                    </div>
                    <div className="col">
                        <label>
                            <input
                                type="checkbox"
                                checked={trackCopy.online}
                                onChange={(e) => setTrackCopy(trackCopy => ({
                                    ...trackCopy,
                                    online: e.target.checked
                                }))}/>
                            &nbsp;
                            Online
                        </label>
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
                            {trackCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.length}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.genre}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/tracks/${trackCopy.id}`}>
                            {trackCopy.album}
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