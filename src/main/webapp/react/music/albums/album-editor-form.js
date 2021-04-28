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
            // findTracksForAlbum(id)
        }
    }, []);
    const findAlbumById = (id) =>
        albumService.findAlbumById(id)
            .then(album => setAlbum(album))
    // const findTracksForAlbum = (id) =>
    //     trackService.findTracksForAlbum(id)
    //         .then(tracks => {
    //             setAlbum({tracks: tracks})
    //         })
    const createAlbum = (album) =>
        albumService.createAlbum(album)
            .then(() => history.goBack())
    const createAlbumForArtist = (artistId, newAlbum) =>
        albumService.createAlbumForArtist(artistId, newAlbum)
            .then(() => history.goBack())
    const updateAlbum = (id, newAlbum) =>
        albumService.updateAlbum(id, newAlbum)
            .then(() => history.goBack())
    const deleteAlbum = (id) =>
        albumService.deleteAlbum(id)
            .then(() => history.goBack())

    let editButtons
    let editFields
    if (id === "new") {
        editButtons = <button
            onClick={() => createAlbumForArtist(album.artist, album)}
            className="btn btn-success btn-block">Create
        </button>
        editFields = <div>
            <label>Artist ID</label>
            <input
                className="form-control"
                onChange={(e) => setAlbum(album => ({...album, artist: e.target.value}))}
                value={album.artist}/>
        </div>
    } else {
        editButtons = <div>
            <button
                onClick={() => {
                    history.push(`/artists/${album.artist.id}`)
                }}
                className="btn btn-primary btn-block">Go-to Artist
            </button>
            <button
                onClick={() => updateAlbum(id, album)}
                className="btn btn-success btn-block">Save
            </button>
            <button
                onClick={() => deleteAlbum(id)}
                className="btn btn-danger btn-block">Delete
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
                onChange={(e) => setAlbum(album => ({...album, albumName: e.target.value}))}
                value={album.albumName}/>
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

export default AlbumEditorForm
