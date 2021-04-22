package com.example.springtemplate.daos;

import com.example.springtemplate.models.Artist;
import com.example.springtemplate.models.Album;
import com.example.springtemplate.repositories.ArtistRepository;
import com.example.springtemplate.repositories.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AlbumOrmDao {
    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    ArtistRepository artistRepository;

    @PostMapping("/api/Albums")
    public Album createAlbum(@RequestBody Album album) {
        return albumRepository.save(album);
    }

    @PostMapping("/api/artists/{artistId}/albums")
    public Album createAlbumForArtist(
            @PathVariable("artistId") Integer cid,
            @RequestBody Album album) {
        album = albumRepository.save(album);
        Artist artist = artistRepository.findById(cid).get();
        album.setArtist(artist);
        return albumRepository.save(album);
    }

    @GetMapping("/api/artists/{cid}/albums")
    public List<Album> findAlbumsForArtist(
            @PathVariable("cid") Integer artistId) {
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
        album.setArtist(newAlbum.getArtist());
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