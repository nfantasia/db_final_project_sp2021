import albumService from "./album-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

const AlbumList = () => {
    const history = useHistory()
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        findAllAlbums()
    }, [])
    const findAllAlbums = () =>
        albumService.findAllAlbums()
            .then(albums => setAlbums(albums))
    return (
        <div>
            <h2>Album List</h2>
            <button onClick={() => history.push("/albums/new")}>
                Add Album
            </button>
            <ul>
                {
                    albums.map(album =>
                        <li key={album.id}>
                            <Link to={`/albums/${album.id}`}>
                                {album.albumName}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}
export default AlbumList;