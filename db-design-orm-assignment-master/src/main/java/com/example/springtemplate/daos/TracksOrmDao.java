package com.example.springtemplate.daos;

import com.example.springtemplate.models.Artist;
import com.example.springtemplate.models.Track;
import com.example.springtemplate.repositories.ArtistRepository;
import com.example.springtemplate.repositories.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TrackOrmDao {
    @Autowired
    TrackRepository trackRepository;

    @Autowired
    AlbumRepository albumRepository;

    @PostMapping("/api/Tracks")
    public Track createTrack(@RequestBody Track track) {
        return trackRepository.save(track);
    }

    @PostMapping("/api/artists/{artistId}/tracks")
    public Track createTrackForArtist(
            @PathVariable("artistId") Integer cid,
            @RequestBody Track track) {
        track = trackRepository.save(track);
        Artist artist = artistRepository.findById(cid).get();
        track.setArtist(artist);
        return trackRepository.save(track);
    }

    @GetMapping("/api/artists/{cid}/tracks")
    public List<Track> findTracksForArtist(
            @PathVariable("cid") Integer artistId) {
        Artist artist = artistRepository.findById(artistId).get();
        return artist.getTracks();
    }

    @GetMapping("/api/tracks")
    public List<Track> findAllTracks() {
        return (List<Track>) trackRepository.findAll();
    }

    @GetMapping("/api/tracks/{trackId}")
    public Track findTrackById(
            @PathVariable("trackId") Integer id) {
        return trackRepository.findById(id).get();
    }

    @PutMapping("/api/tracks/{trackId}")
    public Track updateTrack(
            @PathVariable("trackId") Integer id,
            @RequestBody() Track newTrack) {
        Track track = this.findTrackById(id);
        track.setName(newTrack.getName());
        track.setSeats(newTrack.getSeats());
        track.setSemester(newTrack.getSemester());
        track.setYear(newTrack.getYear());
        track.setOnline(newTrack.getOnline());
//        track.setStartDate(newTrack.getStartDate());
        return trackRepository.save(track);
    }

    @DeleteMapping("/api/tracks/{trackId}")
    public void deleteTrack(
            @PathVariable("trackId") Integer id) {
        trackRepository.deleteById(id);
    }
}