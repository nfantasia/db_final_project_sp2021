# db_final_project_sp2021
Database Final Project Spring 2021
Team members: Nicholas Fantasia, William Victoria, Ming Yan from section 3200-04

Problem statement - describe the problem that your project is trying to solve

Solution statement - describe the solution you implemented to solve the problem

User - describe the typical user(s) that would use your solution
The typical user that would use this solution would be music sharing platforms. This solution would be 
helpful for them to organize the platform. When an artist releases a brand new album, this solution can 
be used to make record of the information about the ablum and the tracks in the album, and save which 
in database for later use for various purposes. Such as displaying these info when audiences listen to
music, or look up a musician.

Domain objects - describe at least two of the domain objects you implemented in your solution
There are two domain objects implemented in this solution. One is ablums, which maintains a many-to-one 
relationship with the artists model. The other one is tracks, which maintains a many-to-one relationship 
with the albums model. This can be taken as one artist can have numerous ablums, and in each of the 
albums, there could be several tracks. Because of these relationships, the team has included a foreign 
key attribute in each of the domain objects. The foreign key in ablums references the primary key in 
artists, and the foreign key in tracks references the primary key in ablums. In addition, ablums have 
album name, release data, and number of songs an album has; tracks have track title, length, and genre 
as the attributes.
