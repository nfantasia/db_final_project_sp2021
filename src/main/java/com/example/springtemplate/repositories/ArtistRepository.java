package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Artist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArtistRepository
        extends CrudRepository<Artist, Integer> {
    @Query(value = "SELECT * FROM artists",
            nativeQuery = true)
    public List<Artist> findAllArtists();
    @Query(value = "SELECT * FROM artists WHERE id=:artistId",
            nativeQuery = true)
    public artist findArtistById(@Param("artistId") Integer id);
}
