package com.example.springtemplate.daos;

import com.example.springtemplate.models.Album;
import com.example.springtemplate.models.Track;
import com.example.springtemplate.repositories.AlbumRepository;
import com.example.springtemplate.repositories.TrackRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TrackOrmDao {
  @Autowired
  TrackRepository trackRepository;

  @Autowired
  AlbumRepository albumRepository;

  @PostMapping("/api/tracks")
  public Track createTrack(@RequestBody Track track) {
    return trackRepository.save(track);
  }

  @PostMapping("/api/albums/{albumId}/tracks")
  public Track createTrackForAlbum(
          @PathVariable("albumId") Integer cid,
          @RequestBody Track track) {
    track = trackRepository.save(track);
    Album album = albumRepository.findById(cid).get();
    track.setAlbum(album);
    return trackRepository.save(track);
  }

  @GetMapping("/api/albums/{aid}/tracks")
  public List<Track> findTracksForAlbum(
          @PathVariable("aid") Integer albumId) {
    Album album = albumRepository.findById(albumId).get();
    return album.getTracks();
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
    track.setTitle(newTrack.getTitle());
    track.setLength(newTrack.getLength());
    track.setGenre(newTrack.getGenre());
    track.setAlbum(newTrack.getAlbum());
    return trackRepository.save(track);
  }

  @DeleteMapping("/api/tracks/{trackId}")
  public void deleteTrack(
          @PathVariable("trackId") Integer id) {
    trackRepository.deleteById(id);
  }
}
