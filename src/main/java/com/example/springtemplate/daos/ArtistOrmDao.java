package com.example.springtemplate.daos;

import com.example.springtemplate.models.Artist;
import com.example.springtemplate.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ArtistOrmDao {
    @Autowired
    ArtistRepository artistRepository;

    @PostMapping("/api/artists")
    public Artist createArtist(@RequestBody Artist Artist) {
        return artistRepository.save(Artist);
    }

    @GetMapping("/api/artists")
    public List<Artist> findAllArtists() {
        return (List<Artist>) artistRepository.findAll();
    }

    @GetMapping("/api/artists/{artistId}")
    public Artist findArtistById(
            @PathVariable("artistId") Integer id) {
        return artistRepository.findById(id).get();
    }

    @PutMapping("/api/artists/{artistId}")
    public Artist updateArtist(
            @PathVariable("artistId") Integer id,
            @RequestBody() Artist newArtist) {
        Artist artist = this.findArtistById(id);
        artist.setFirstName(newArtist.getFirstName());
        artist.setLastName(newArtist.getLastName());
        artist.setUsername(newArtist.getUsername());
        artist.setPassword(newArtist.getPassword());
        artist.setEmail(newArtist.getEmail());
        artist.setDateOfBirth(newArtist.getDateOfBirth());
        return artistRepository.save(artist);
    }

    @DeleteMapping("/api/artistId/{artistId}")
    public void deleteArtist(
            @PathVariable("artistId") Integer id) {
        artistRepository.deleteById(id);
    }
}