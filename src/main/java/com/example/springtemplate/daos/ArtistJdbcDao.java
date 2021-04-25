package com.example.springtemplate.daos;

import com.example.springtemplate.models.Artist;

import java.sql.*;
import java.sql.Date;
import java.util.*;

public class ArtistJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "localhost:3306";
    static final String SCHEMA = "music";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "cs3200";
    static final String PASSWORD = "cs3200cs3200";
    
    static Connection connection = null;
    static PreparedStatement statement = null;
    String CREATE_ARTIST = "INSERT INTO artists VALUES (null, ?, ?, ?, ?, ?, ?, null, null)";
    String FIND_ALL_ARTISTS = "SELECT * FROM artists";
    String FIND_ARTIST_BY_ID = "SELECT * FROM artists WHERE id=?";
    String DELETE_ARTIST = "DELETE FROM artists WHERE id=?";
    String UPDATE_ARTIST_PASSWORD = "UPDATE artists SET password=? WHERE id=?";
    String UPDATE_ARTIST = "UPDATE artists SET first_name=?, last_name=?, username=?, password=?, email=?, date_of_birth=? WHERE id=?";
    
    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    
    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }
    
    public Artist findArtistById(Integer id) throws SQLException, ClassNotFoundException {
        Artist artists = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ARTIST_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            artists = new Artist(
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getDate("date_of_birth")
            );
        }
        closeConnection(connection);
        return artists;
    }
    
    public Integer deleteArtist(Integer artistsId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(DELETE_ARTIST);
        statement.setInt(1, artistsId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }
    
    public Integer updateArtist(Integer artistsId, Artist newArtist) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(UPDATE_ARTIST);
        statement.setString(1, newArtist.getFirstName());
        statement.setString(2, newArtist.getLastName());
        statement.setString(3, newArtist.getFirstName());
        statement.setString(4, newArtist.getLastName());
        statement.setString(5, newArtist.getEmail());
        statement.setDate(5, (Date) newArtist.getDateOfBirth());
        statement.setInt(7, artistsId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    
    public List<Artist> findAllArtists() throws ClassNotFoundException, SQLException {
        List<Artist> artists = new ArrayList<Artist>();
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ALL_ARTISTS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            Artist artist = new Artist(
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getDate("date_of_birth")
            );
            artists.add(artist);
        }
        closeConnection(connection);
        return artists;
    }
    public Integer createArtist(Artist artists)
            throws ClassNotFoundException, SQLException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_ARTIST);
        statement.setString(1, artists.getUsername());
        statement.setString(2, artists.getPassword());
        statement.setString(3, artists.getFirstName());
        statement.setString(4, artists.getLastName());
        statement.setString(5, artists.getEmail());
        statement.setDate(6, (Date) artists.getDateOfBirth());
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        ArtistJdbcDao dao = new ArtistJdbcDao();
    }
}
