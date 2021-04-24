import AlbumEditorInline from "./album-editor-inline";
import albumService from "./album-service"

const ALBUM_URL = "http://localhost:8080/api/albums"
const { useState, useEffect } = React;

const AlbumList = () => {
    const [albums, setAlbums] = useState([])
    const [newAlbum, setNewAlbum] = useState({})
    useEffect(() => {
        findAllAlbums()
    }, [])
    const createAlbum = (album) =>
        albumService.createAlbum(album)
            .then(album => {
                setNewAlbum({title:''})
                setAlbums(albums => ([...albums, album]))
            })
    const updateAlbum = (id, newAlbum) =>
        albumService.updateAlbum(id, newAlbum)
            .then(album => setAlbums(albums => (albums.map(album => album.id === id ? newAlbum : album))))
    const findAllAlbums = () =>
        albumService.findAllAlbums()
            .then(albums => setAlbums(albums))
    const deleteAlbum = (id) =>
        albumService.deleteAlbum(id)
            .then(albums => setAlbums(albums => albums.filter(album => album.id !== id)))
    return(
        <div>
            <h2>Albums</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Album Title"
                                   title="Please enter a title for the album" className="form-control" value={newAlbum.title}
                                   onChange={(e) => setNewAlbum(newAlbum => ({...newAlbum, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createAlbum(newAlbum)}></i>
                        </div>
                    </div>
                </li>
            {
                albums.map(album =>
                    <li key={album.id} className="list-group-item">
                        <AlbumEditorInline key={album._id}
                                           updateAlbum={updateAlbum}
                                           deleteAlbum={deleteAlbum}
                                           album={album}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default AlbumList;