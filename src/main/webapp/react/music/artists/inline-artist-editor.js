const {useState, useEffect} = React;
const {Link} = window.ReactRouterDOM;

const InlineArtistEditor = ({artist, deleteArtist, updateArtist}) => {
    const [artistCopy, setArtistCopy] = useState(artist)
    const [editing, setEditing] = useState(false)
    return (
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={artistCopy.firstName}
                            onChange={(e) => setArtistCopy(artistCopy => ({
                                ...artistCopy,
                                firstName: e.target.value
                            }))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={artistCopy.lastName}
                            onChange={(e) => setArtistCopy(artistCopy => ({...artistCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={artistCopy.username}
                            onChange={(e) => setArtistCopy(artistCopy => ({...artistCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/artists/${artistCopy.id}/albums`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateArtist(artistCopy.id, artistCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteArtist(artist.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/artists/${artistCopy.id}`}>
                            {artistCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/artists/${artistCopy.id}`}>
                            {artistCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/artists/${artistCopy.id}`}>
                            {artistCopy.username}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/artists/${artistCopy.id}/albums`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineArtistEditor;