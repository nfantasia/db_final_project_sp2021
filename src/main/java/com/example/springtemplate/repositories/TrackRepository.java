package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Track;

import org.springframework.data.repository.CrudRepository;

public interface TrackRepository
        extends CrudRepository<Track, Integer> {
}
