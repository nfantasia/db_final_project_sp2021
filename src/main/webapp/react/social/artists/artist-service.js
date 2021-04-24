// TODO: declare URL where server listens for HTTP requests
const ARTISTS_URL = "http://localhost:8080/api/artists"

// TODO: retrieve all artists from the server
export const findAllArtists = () =>
    fetch(ARTISTS_URL)
        .then(response => response.json())

// TODO: retrieve a single artist by their ID
export const findArtistById = (id) =>
    fetch(`${ARTISTS_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a artist by their ID
export const deleteArtist = (id) =>
    fetch(`${ARTISTS_URL}/${id}`, {
        method: "DELETE"
    })

// TODO: create a new artist
export const createArtist = (artist) =>
    fetch(ARTISTS_URL, {
        method: 'POST',
        body: JSON.stringify(artist),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a artist by their ID
export const updateArtist = (id, artist) =>
    fetch(`${ARTISTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(artist),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllArtists,
    findArtistById,
    deleteArtist,
    createArtist,
    updateArtist
}
