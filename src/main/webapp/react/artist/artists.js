import Artist from "./artist";

const { useState, useEffect } = React;

const Artists = () => {
    const [artists, setArtists] = useState([])
    const [newArtist, setNewArtist] = useState({})
    const createArtist = (artist) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/artists`, {
            method: 'POST',
            body: JSON.stringify(artist),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(artist => setArtists(artists => ([...artists, artist])))
    const updateArtist = (id, newArtist) =>
        fetch(`http://localhost:8080/orm/update/artist/${id}/${newArtist.password}`)
            .then(response => response.json())
            .then(artist => setArtists(artists => (artists.map(artist => artist._id === id ? newArtist : artist))))
    const findAllArtists = () =>
        fetch(`http://localhost:8080/orm/find/artists`)
            .then(response => response.json())
            .then(artists => setArtists(artists))
    const deleteArtist = (id) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/artists/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(artists => setArtists(artists => artists.filter(artist => artist._id !== id)))
    useEffect(() => {
        findAllArtists()
    }, [])
    return(
        <div>
            <h2>Artists {artists.length}</h2>
            <input value={newArtist.title}
                   onChange={(e) => setNewArtist(newArtist => ({...newArtist, title: e.target.value}))}/>
            <input value={newArtist.owner}
                   onChange={(e) => setNewArtist(newArtist => ({...newArtist, owner: e.target.value}))}/>
            <button onClick={() => createArtist(newArtist)}>Create</button>
            {
                artists.map(artist =>
                    <Artist key={artist._id}
                        updateArtist={updateArtist}
                        deleteArtist={deleteArtist}
                        artist={artist}/>)
            }
        </div>
    )
}

export default Artists;


