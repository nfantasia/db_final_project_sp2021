package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "albums")
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String albumName;
    private Date releaseDate;
    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Artist artist;

    private Integer numberSongs;
    @OneToMany(mappedBy = "album")
    @JsonIgnore
    private List<Track> tracks;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Integer getNumberSongs() {
        return numberSongs;
    }

    public void setNumberSongs(Integer numberSongs) {
        this.numberSongs = numberSongs;
    }

    public List<Track> getTracks() {
        return tracks;
    }

    public void setTracks(List<Track> tracks) {
        this.tracks = tracks;
    }
}
