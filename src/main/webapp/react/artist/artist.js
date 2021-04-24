const { useState, useEffect } = React;

const Artist = ({artist, deleteArtist, updateArtist}) => {
    const [artistCopy, setArtistCopy] = useState(artist)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                    <div>
                        <input value={artistCopy.firstName} onChange={(e)=>setArtistCopy(artistCopy => ({...artistCopy, firstName: e.target.value}))}/>
                        <input value={artistCopy.lastName} onChange={(e)=>setArtistCopy(artistCopy => ({...artistCopy, lastName: e.target.value}))}/>
                        <button onClick={() => deleteArtist(artist._id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(false)
                            updateArtist(artistCopy._id, artistCopy)
                        }}>Save</button>
                    </div>
            }
            {
                !editing &&
                    <div>
                        {artistCopy.firstName}
                        {artistCopy.lastName}
                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
            }
        </div>
    )
}

export default Artist;