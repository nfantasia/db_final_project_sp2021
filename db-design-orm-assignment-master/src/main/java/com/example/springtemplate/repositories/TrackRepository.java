package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Track;
import com.example.springtemplate.models.Album;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrackRepository
        extends CrudRepository<Track, Integer> {
}
