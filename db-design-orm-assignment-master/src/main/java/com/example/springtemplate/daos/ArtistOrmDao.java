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
        Artist.setFirstName(newArtist.getFirstName());
        Artist.setLastName(newArtist.getLastName());
        Artist.setUsername(newArtist.getUsername());
        Artist.setPassword(newArtist.getPassword());
        Artist.setEmail(newArtist.getEmail());
        Artist.setDateOfBirth(newArtist.getDateOfBirth());
        return artistRepository.save(artist);
    }

    @DeleteMapping("/api/artistId/{artistId}")
    public void deleteArtist(
            @PathVariable("artistId") Integer id) {
        artistRepository.deleteById(id);
    }
}