const ARTISTS_URL = "http://localhost:8080/api/artists"

export const findAllArtists = () =>
    fetch(ARTISTS_URL)
        .then(response => response.json())

export const findArtistById = (id) =>
    fetch(`${ARTISTS_URL}/${id}`)
        .then(response => response.json())

export const deleteArtist = (id) =>
    fetch(`${ARTISTS_URL}/${id}`, {
        method: "DELETE"
    })

export const createArtist = (artist) =>
    fetch(ARTISTS_URL, {
        method: 'POST',
        body: JSON.stringify(artist),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const updateArtist = (id, artist) =>
    fetch(`${ARTISTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(artist),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export default {
    findAllArtists,
    findArtistById,
    deleteArtist,
    createArtist,
    updateArtist
}
