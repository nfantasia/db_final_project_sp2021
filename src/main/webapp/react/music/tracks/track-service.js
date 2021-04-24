const ALBUM_URL = "http://localhost:8080/api/albums"
const TRACK_URL = "http://localhost:8080/api/tracks"

export const createTrackForAlbum = (albumId, track) =>
    fetch(`${ALBUM_URL}/${albumId}/tracks`, {
        method: 'POST',
        body: JSON.stringify(track),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findTracksForAlbum = (albumId) =>
    fetch(`${ALBUM_URL}/${albumId}/tracks`)
        .then(response => response.json())

export const findTrackById = (id) =>
    fetch(`${TRACK_URL}/${id}`)
        .then(response => response.json())

export const updateTrack = (id, track) =>
    fetch(`${TRACK_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(track),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteTrack = (id) =>
    fetch(`${TRACK_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createTrackForAlbum,
    findTracksForAlbum,
    findTrackById,
    updateTrack,
    deleteTrack
}