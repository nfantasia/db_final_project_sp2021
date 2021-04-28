package com.example.springtemplate.daos;

import com.example.springtemplate.models.Album;
import com.example.springtemplate.models.Artist;
import com.example.springtemplate.repositories.AlbumRepository;
import com.example.springtemplate.repositories.ArtistRepository;

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
public class AlbumOrmDao {
  @Autowired
  AlbumRepository albumRepository;

  @Autowired
  ArtistRepository artistRepository;

  @PostMapping("/api/albums")
  public Album createAlbum(@RequestBody Album album) {
    return albumRepository.save(album);
  }

  @PostMapping("/api/artists/{artistId}/albums")
  public Album createAlbumForArtist(
          @PathVariable("artistId") Integer artistId,
          @RequestBody Album album) {
    album = albumRepository.save(album);
    Artist artist = artistRepository.findById(artistId).get();
    album.setArtist(artist);
    return albumRepository.save(album);
  }

  @GetMapping("/api/artists/{artistId}/albums")
  public List<Album> findAlbumsForArtist(
          @PathVariable("artistId") Integer artistId) {
    Artist artist = artistRepository.findById(artistId).get();
    return artist.getAlbums();
  }

  @GetMapping("/api/albums")
  public List<Album> findAllAlbums() {
    return (List<Album>) albumRepository.findAll();
  }

  @GetMapping("/api/albums/{albumId}")
  public Album findAlbumById(
          @PathVariable("albumId") Integer id) {
    return albumRepository.findById(id).get();
  }

  @PutMapping("/api/albums/{albumId}")
  public Album updateAlbum(
          @PathVariable("albumId") Integer id,
          @RequestBody() Album newAlbum) {
    Album album = this.findAlbumById(id);
    album.setAlbumName(newAlbum.getAlbumName());
    album.setReleaseDate(newAlbum.getReleaseDate());
    album.setNumberSongs(newAlbum.getNumberSongs());
    album.setTracks(newAlbum.getTracks());
    return albumRepository.save(album);
  }

  @DeleteMapping("/api/albums/{albumId}")
  public void deleteAlbum(
          @PathVariable("albumId") Integer id) {
    albumRepository.deleteById(id);
  }
}
