const ALBUMS_URL = "http://localhost:8080/api/albums"
const TRACKS_URL = "http://localhost:8080/api/tracks"

export const findAllTracks = () =>
    fetch(TRACKS_URL).then(response => response.json())

export const createTrackForAlbum = (albumId, track) =>
    fetch(`${ALBUMS_URL}/${albumId}/tracks`, {
        method: 'POST',
        body: JSON.stringify(track),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const findTracksForAlbum = (albumId) =>
    fetch(`${ALBUMS_URL}/${albumId}/tracks`).then(response => response.json())

export const findTrackById = (id) =>
    fetch(`${TRACKS_URL}/${id}`).then(response => response.json())

export const updateTrack = (id, track) =>
    fetch(`${TRACKS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(track),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

const deleteTrack = (id) =>
    fetch(`${TRACKS_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    findAllTracks,
    createTrackForAlbum,
    findTracksForAlbum,
    findTrackById,
    updateTrack,
    deleteTrack
}
