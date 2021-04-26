package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Album;
import org.springframework.data.repository.CrudRepository;

public interface AlbumRepository
        extends CrudRepository<Album, Integer> {
}
