# Database Design Final Project Spring 2021 - CS 3200-04
## Team members:
- Nicholas Fantasia 
- William Victoria
- Ming Yan

## Problem Statement - describe the problem that your project is trying to solve

## Solution Statement - describe the solution you implemented to solve the problem

## Intended Users
Some typical users that would use this solution would be music sharing and streaming platforms such as Spotify and Apple Music. This solution would be helpful for them to organize the enormous number of artists publishing their work to the respective streaming platforms. When an artist releases a brand-new album, this solution can be used to make a record of the information about the album as well as the tracks contained within the album. Not only does the music database organize the streaming platform’s architecture, but it also allows customers and music fans to easily find and access the music they want to listen to with little difficulty. Fans can look up different albums by artists they love and learn new things about the artists in general as well as their large collection of albums/tracks. Additionally, disc jockeys at a radio station must be able to benefit in a similar fashion. A disc jockey must be able to find the music he/she wants to play and do it quickly, so having a database of various artists and their albums/tracks allows for the disc jockeys to access the music they intend to play on the radio.


## Domain objects - describe at least two of the domain objects you implemented in your solution
There are two domain objects implemented in this solution. One is ablums, which maintains a many-to-one 
relationship with the artists model. The other one is tracks, which maintains a many-to-one relationship 
with the albums model. This can be taken as one artist can have numerous ablums, and in each of the 
albums, there could be several tracks. Because of these relationships, the team has included a foreign 
key attribute in each of the domain objects. The foreign key in ablums references the primary key in 
artists, and the foreign key in tracks references the primary key in ablums. In addition, ablums have 
album name, release data, and number of songs an album has; tracks have track title, length, and genre 
as the attributes.
