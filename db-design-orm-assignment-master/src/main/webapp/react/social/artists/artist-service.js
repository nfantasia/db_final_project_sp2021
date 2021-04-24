// TODO: declare URL where server listens for HTTP requests
const ARTISTS_URL = "http://localhost:8080/api/artists"

// TODO: retrieve all users from the server
export const findAllArtists = () =>
    fetch(ARTISTS_URL)
        .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findArtistById = (id) =>
    fetch(`${ARTISTS_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a user by their ID
export const deleteArtist = (id) =>
    fetch(`${ARTISTS_URL}/${id}`, {
        method: "DELETE"
    })

// TODO: create a new user
export const createArtist = (user) =>
    fetch(ARTISTS_URL, {
        method: 'POST',
        body: JSON.stringify(vz),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updateUser = (id, user) =>
    fetch(`${ARTISTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllUsers,
    findUserById,
    deleteUser,
    createUser,
    updateUser
}
