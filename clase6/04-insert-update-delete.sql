-- #####################################################################
-- #
-- #   LIVE CODING 3 - Insertar, actualizar y borrar con seguridad
-- #
-- #####################################################################
--
--   Pasos de la slide:
--
--     1. Mira como se insertan los registros iniciales.
--     2. Completa una FK con un UPDATE con JOIN.
--     3. Corre el SELECT de verificacion ANTES de cada cambio.
--     4. Compara DELETE contra TRUNCATE.
--
-- #####################################################################

-- 04 — INSERT, UPDATE y DELETE

CREATE DATABASE IF NOT EXISTS modelado
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE modelado;

DROP TABLE IF EXISTS Pedidos;
DROP TABLE IF EXISTS Clientes;

-- TODO: Clientes (id_cliente, nombre, email UNIQUE, telefono)
-- TODO: Pedidos  (id_pedido, producto, precio, fecha, id_cliente FK)
-- TODO: 3 clientes y 4 pedidos

CREATE TABLE Clientes(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    telefono VARCHAR(30)
);

CREATE TABLE Pedidos(
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    producto VARCHAR(100) NOT NULL,
    precio INT NOT NULL,
    fecha DATE,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

INSERT INTO Clientes (nombre, email, telefono) VALUES
    ('Ana',  'ana@mail.com',  '341-555-0001'),
    ('Luis', 'luis@mail.com', '341-555-0002'),
    ('Sofia','sofia@mail.com','341-555-0003');

INSERT INTO Pedidos (producto, precio, fecha, id_cliente) VALUES
    ('Teclado',   25000.00, '2026-03-01', 1),
    ('Mouse',     12000.00, '2026-03-03', 1),
    ('Monitor',  180000.00, '2026-03-05', 1),
    ('Notebook', 950000.00, '2026-03-06', 2);

-- 3.1 INSERT
-- TODO: insertá 2 clientes en UNA sola sentencia
INSERT INTO Clientes (nombre, email) VALUES
    ('Marta', 'marta@mail.com'),
    ('Pedro', 'pedro@mail.com');
SELECT * FROM Clientes;

-- TODO: insertá uno y mostrá LAST_INSERT_ID() y usalo para su primer pedido

-- TODO: intentá repetir un email. Anotá el error.
-- TODO: intentá un pedido con id_cliente = 999. Anotá el error.
-- TODO: mirá SELECT @@sql_mode -- esta STRICT_TRANS_TABLES?
--       probá un INSERT sin el email (campo NOT NULL). Da error?


-- 3.2 UPDATE
-- TODO: SELECT primero, UPDATE con el mismo WHERE, SELECT para confirmar
-- TODO: subile 10% el precio a un producto usando precio = precio * 1.10
UPDATE Pedidos SET precio = precio * 1.10 
WHERE id_pedido = 2;

-- El UPDATE sin WHERE, con red:
-- TODO: START TRANSACTION, UPDATE sin WHERE sobre telefono,
--       SELECT ROW_COUNT() pegado al UPDATE, mirá el desastre, ROLLBACK

-- 3.3 DELETE
-- TODO: SELECT primero, DELETE de un pedido puntual
-- TODO: intentá borrar un cliente que tiene pedidos. Anotá el error.
-- TODO: borrá uno que no tenga pedidos
-- TODO: el DELETE sin WHERE, dentro de START TRANSACTION + ROLLBACK
DELETE FROM clientes WHERE id_cliente = 5;

-- TODO: anotá en qué se diferencia TRUNCATE de DELETE


-- ---------------------------------------------------------------------
--  UPDATE con JOIN: convertir un nombre de texto en una FK
-- ---------------------------------------------------------------------
-- TODO: Pedidos_viejos (id_pedido, producto, nombre_cliente, id_cliente NULL)
-- TODO: 4 pedidos, con el nombre del cliente como texto y id_cliente vacio

-- TODO: SELECT con JOIN contra Clientes para ver que id le toca a cada uno
-- TODO: el UPDATE con JOIN que completa id_cliente. Cuantas filas migro?
-- TODO: quedo alguno en NULL? Esos hay que revisarlos a mano.
-- TODO: recien ahora, declara la FK con ALTER TABLE

-- ---------------------------------------------------------------------
--  DELETE contra TRUNCATE
-- ---------------------------------------------------------------------
-- TODO: una tabla de prueba con AUTO_INCREMENT y 3 filas
-- TODO: DELETE todo, inserta una fila nueva. En que numero arranca el id?
-- TODO: TRUNCATE, inserta otra. Y ahora?
-- TODO: cual de los dos se puede deshacer con ROLLBACK?