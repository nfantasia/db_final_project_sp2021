import artistService from "./artist-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const ArtistFormEditor = () => {
        const history = useHistory()
        const {id} = useParams()
        const [artist, setArtist] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findArtistById(id)
                }
        }, []);
        const findArtistById = (id) =>
            artistService.findArtistById(id)
                .then(artist => setArtist(artist))
        const deleteArtist = (id) =>
            artistService.deleteArtist(id)
                .then(() => history.goBack())
        const createArtist = (artist) =>
            artistService.createArtist(artist)
                .then(() => history.goBack())
        const updateArtist = (id, newArtist) =>
            artistService.updateArtist(id, newArtist)
                .then(() => history.goBack())
        return (
        <div>
            <h2>Artist Editor</h2>
            <label>Id</label>
            <input value={artist.id}/><br/>
            <label>First Name</label>
                <input
                    onChange={(e) =>
                        setArtist(artist =>
                            ({...artist, firstName: e.target.value}))}
                    value={artist.firstName}/><br/>
                <label>Last Name</label>
                <input
                    onChange={(e) =>
                        setArtist(artist =>
                            ({...artist, lastName: e.target.value}))}
                    value={artist.lastName}/><br/>
                <label>Username</label>
                <input
                    onChange={(e) =>
                        setArtist(artist =>
                            ({...artist, username: e.target.value}))}
                    value={artist.username}/><br/>
                <label>Password</label>
                <input
                    onChange={(e) =>
                        setArtist(artist =>
                            ({...artist, password: e.target.value}))}
                    value={artist.password}/><br/>
                <button
                    onClick={() => {
                            history.goBack()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteArtist(artist.id)}>
                        Delete
                </button>
                <button
                    onClick={() => createArtist(artist)}>
                        Create
                </button>
                <button
                    onClick={() => updateArtist(artist.id, artist)}>
                        Save
                </button>
        </div>
    )
}

export default ArtistFormEditor