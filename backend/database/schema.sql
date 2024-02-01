-- SQLBook: Code

create table user(
  id INT PRIMARY KEY AUTO_INCREMENT,
   email  VARCHAR(255) NOT NULL UNIQUE,
   hashpassword VARCHAR(255) NOT NULL,
   role BOOLEAN DEFAULT 0
);


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

create table attribut(
  id INT PRIMARY KEY AUTO_INCREMENT,
   label  VARCHAR(255) NOT NULL
);


create table moto(
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    engine VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    attribut_id INT NOT NULL,
    CONSTRAINT fk_moto_attribut     
        FOREIGN KEY (attribut_id)             
        REFERENCES attribut(id)    
);

INSERT INTO user(email,hashpassword) VALUES ('bas.envoi@yahoo','tututoto');


INSERT INTO fonction(label) VALUES ('sport'),('suv'),('city_car'),('road');



INSERT INTO car(brand,engine,image,fonction_id) VALUES ('lamborgini','essence','https://tse3.mm.bing.net/th?id=OIP.uuBl43Wh2pNV_Vj92QzfCAHaEK&pid=Api&P=0&h=180',1);
INSERT INTO car(brand,engine,image,fonction_id) VALUES ('peugeot','essence','https://tse3.mm.bing.net/th?id=OIP.NVA4VRVc2TvKgZXD6r283QHaEp&pid=Api&P=0&h=180',2);
INSERT INTO car(brand,engine,image,fonction_id) VALUES ('renault','diesiel','https://tse4.mm.bing.net/th?id=OIP.7V501IsRbXOJ72Qbpgkx9gHaFF&pid=Api&P=0&h=180',3);
INSERT INTO car(brand,engine,image,fonction_id) VALUES ('bmw','electric','https://tse2.mm.bing.net/th?id=OIP.Q7caoDM_Bb56aSy-lpgx1wHaE6&pid=Api&P=0&h=180',4);


INSERT INTO attribut(label) VALUES ('sport'),('cross'),('city'),('road');

INSERT INTO moto(brand,engine,image,attribut_id) VALUES ('bmw','essence','https://tse1.mm.bing.net/th?id=OIP.FWIU-0fEtSPx5v8uGU58cgHaEK&pid=Api&P=0&h=180',1);
INSERT INTO moto(brand,engine,image,attribut_id) VALUES ('aprilia','essence','https://tse2.mm.bing.net/th?id=OIP.EXn25vV1YG42F1QrcsggpAHaGs&pid=Api&P=0&h=180',4);
INSERT INTO moto(brand,engine,image,attribut_id) VALUES ('verge','essence','https://sp.yimg.com/ib/th?id=OPE.tkm7HkiTBNtZTA300C300&pid=21.1&w=&h=',1);