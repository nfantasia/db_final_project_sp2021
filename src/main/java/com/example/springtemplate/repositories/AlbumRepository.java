package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Album;
import com.example.springtemplate.models.Artist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AlbumRepository
        extends CrudRepository<Album, Integer> {
}
