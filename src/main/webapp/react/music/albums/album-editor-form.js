import albumService from "./album-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const AlbumEditorForm = () => {
    const history = useHistory()
    const {id} = useParams()
    const [album, setAlbum] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findAlbumById(id)
        }
    }, []);
    const findAlbumById = (id) =>
        albumService.findAlbumById(id)
            .then(album => setAlbum(album))
    const createAlbum = (album) =>
        albumService.createAlbum(album)
            .then(() => history.goBack())
    const updateAlbum = (id, newAlbum) =>
        albumService.updateAlbum(id, newAlbum)
            .then(() => history.goBack())
    const deleteAlbum = (id) =>
        albumService.deleteAlbum(id)
            .then(() => history.goBack())

    let editButtons
    if (id === "new") {
        editButtons = <button
            onClick={() => createAlbum(album)}
            className="btn btn-success btn-block">Create
        </button>
    } else {
        editButtons = <div>
            <button
                onClick={() => updateAlbum(id, album)}
                className="btn btn-success btn-block">Save
            </button>
            <button
                onClick={() => deleteAlbum(id)}
                className="btn btn-danger btn-block margin-left-10px">Delete
            </button>
        </div>
    }

    return (
        <div>
            <h2>
                Album Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={album.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setAlbum(album => ({...album, name: e.target.value}))}
                value={album.name}/>
            <label>Song Count</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={album.numberSongs}
                onChange={(e) => setAlbum(
                    album => ({...album, numberSongs: parseInt(e.target.value)}))}/>
            <label>Release Date</label>
            <input
                type="date"
                className="form-control margin-bottom-10px"
                value={album.releaseDate}
                onChange={(e) => setAlbum(
                    album => ({...album, releaseDate: e.target.value}))}/>
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

export default AlbumEditorForm
