                              
DROP DATABASE IF EXISTS exo1;

CREATE DATABASE exo1; 

USE exo1; 

CREATE TABLE Clients(
        cli_num          INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
		  cli_nom          VARCHAR (50) NOT NULL,
		  cli_adresse      VARCHAR (50) NOT NULL,
		  cli_tel          VARCHAR (30) NOT NULL
		  
);
 
CREATE TABLE Commande(
        com_num          INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
        cli_num          INT, FOREIGN KEY (cli_num) REFERENCES Clients(cli_num),
        com_date         DATETIME NOT NULL,
        com_obs          VARCHAR (50) NOT NULL
);

CREATE TABLE Produits(
        pro_num          INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        pro_libelle      VARCHAR (50) NOT NULL,
        pro_description  VARCHAR (50) NOT NULL   
);

CREATE TABLE est_compose(
        com_num          INT,
		  FOREIGN KEY (com_num) REFERENCES Commande(com_num), 
		  pro_num          INT,
		  FOREIGN KEY (pro_num) REFERENCES Produits(pro_num),
		  est_qte          INT NOT NULL
);

CREATE INDEX nom_client ON Clients (cli_nom);
SHOW INDEX from Clients