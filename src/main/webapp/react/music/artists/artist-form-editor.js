import artistService from "./artist-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ArtistFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [artist, setArtist] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findArtistById(id)
        }
    }, []);
    const findArtistById = (id) =>
        artistService.findArtistById(id)
            .then(artist => setArtist(artist))
    const createArtist = (artist) =>
        artistService.createArtist(artist)
            .then(() => history.goBack())
    const updateArtist = (id, newArtist) =>
        artistService.updateArtist(id, newArtist)
            .then(() => history.goBack())
    const deleteArtist = (id) =>
        artistService.deleteArtist(id)
            .then(() => history.goBack())

    let editButtons
    if (id === "new") {
        editButtons = <button
            onClick={() => createArtist(artist)}
            className="btn btn-success btn-block">Create
        </button>
    } else {
        editButtons = <div>
            <button
                onClick={() => updateArtist(id, artist)}
                className="btn btn-success btn-block">Save
            </button>
            <button
                onClick={() => deleteArtist(id)}
                className="btn btn-danger btn-block margin-left-10px">Delete
            </button>
        </div>
    }

    return (
        <div>
            <h2>Artist Editor</h2>
            <label>Id</label>
            <input className="form-control margin-bottom-10px"
                   readOnly={true}
                   value={artist.id}/>
            <label>First Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) =>
                    setArtist(artist =>
                                  ({...artist, firstName: e.target.value}))}
                value={artist.firstName}/>
            <label>Last Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) =>
                    setArtist(artist =>
                                  ({...artist, lastName: e.target.value}))}
                value={artist.lastName}/>
            <label>Date of Birth</label>
            <input
                type="date"
                className="form-control margin-bottom-10px"
                value={artist.dateOfBirth}
                onChange={(e) => setArtist(
                    artist => ({...artist, dateOfBirth: e.target.value}))}/>
            <label>Username</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) =>
                    setArtist(artist =>
                                  ({...artist, username: e.target.value}))}
                value={artist.username}/>
            <label>Email</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) =>
                    setArtist(artist =>
                                  ({...artist, email: e.target.value}))}
                value={artist.email}/>
            <label>Password</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) =>
                    setArtist(artist =>
                                  ({...artist, password: e.target.value}))}
                value={artist.password}/>
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

export default ArtistFormEditor
