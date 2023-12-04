create table fonction(
  id INT PRIMARY KEY AUTO_INCREMENT,
   label  VARCHAR(255) NOT NULL
);


create table car(
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    engine VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    fonction_id INT NOT NULL,
    CONSTRAINT fk_car_fonction     
        FOREIGN KEY (fonction_id)             
        REFERENCES fonction(id)    
);



INSERT INTO fonction(label) VALUES ('sport'),('suv'),('city_car'),('road');



INSERT INTO car(brand,engine,image,fonction_id) VALUES ('lamborgini','essence','https://tse3.mm.bing.net/th?id=OIP.uuBl43Wh2pNV_Vj92QzfCAHaEK&pid=Api&P=0&h=180',1);
INSERT INTO car(brand,engine,image,fonction_id) VALUES ('peugeot','essence','https://tse3.mm.bing.net/th?id=OIP.NVA4VRVc2TvKgZXD6r283QHaEp&pid=Api&P=0&h=180',2);
INSERT INTO car(brand,engine,image,fonction_id) VALUES ('renault','diesiel','https://tse4.mm.bing.net/th?id=OIP.7V501IsRbXOJ72Qbpgkx9gHaFF&pid=Api&P=0&h=180',3);
INSERT INTO car(brand,engine,image,fonction_id) VALUES ('bmw','electric','https://tse2.mm.bing.net/th?id=OIP.Q7caoDM_Bb56aSy-lpgx1wHaE6&pid=Api&P=0&h=180',4);



