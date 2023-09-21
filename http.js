
GET http://localhost:3001/movies/ 

###

POST http://localhost:3001/movies/
Content-Type: application/json 

{
  "directorId": 6,
  "movieName": "Jurassic Park",
  "leadActor": "Jeff Goldblum"
}

###


GET http://localhost:3001/movies/47/

###

PUT https://localhost:3001/movies/47/ 
Content-Type: application/json 

{
  "directorId": 24,
  "movieName": "Thor",
  "leadActor": "Christopher Hemsworth"
}

###

DELETE  https://localhost:3001/movies/47/ 

###



GET http://localhost:3001/directors/13/movies/

###