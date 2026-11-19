-- ============================================================
-- 02 - SELECT y WHERE
-- Escribí cada consulta debajo de su consigna y correla.
-- Requiere haber corrido 01-dataset.sql
-- ============================================================

SET NAMES utf8mb4;
USE clase05;

-- 1. Traé TODO de la tabla alumno, sin elegir columnas.
SELECT * FROM alumno;

-- 2. Lo mismo, pero solo el nombre y el email.
--    ¿Qué ganás pidiendo solo esas dos? Pensalo para el cierre.
SELECT nombre, email FROM alumno;

-- 3. Los alumnos de apellido Gómez. Tendrían que ser 3.
SELECT * FROM alumno WHERE apellido = 'Gómez';

-- 4. Los productos de más de $100.
--    Antes de correrlo, mirá los datos y predecí cuántos van a salir.
--    Después corré y comparé. Si tu predicción falló, mirá los precios.
SELECT * FROM producto WHERE precio > 100;

-- 5. Los productos de más de $50.000.
SELECT * FROM producto WHERE precio > 50000;

-- 6. Los alumnos cuyo nombre empieza con A.
--    Necesitás un operador de PATRÓN, no una igualdad. Y un comodín
--    que signifique "después de esto, cualquier cosa".
SELECT * FROM alumno WHERE nombre LIKE 'A%';

-- 7. Los alumnos cuyo email termina en @mail.com.
--    Mismo operador, el comodín va en el otro lado.
SELECT * FROM alumno WHERE email LIKE '%@mail.com';

-- 8. Los productos cuyo nombre CONTIENE la palabra "cable",
--    esté al principio, en el medio o al final.
SELECT * FROM producto WHERE nombre LIKE '%cable%';

-- 9. Repetí la consulta 6 pero escribiendo la letra en minúscula.
--    ¿Da lo mismo? Si da lo mismo, no es casualidad: fijate en el
--    COLLATE con el que se creó la base en 01-dataset.sql.
SELECT * FROM alumno WHERE nombre LIKE 'a%';

-- 10. Los productos que cuestan entre $20.000 y $50.000, con los dos
--     extremos incluidos. Hay un operador que hace exactamente eso.
SELECT * FROM  producto WHERE precio BETWEEN 20000 AND 50000;

-- 11. Los productos de categoría 'audio' o 'video'.
--     Escribilo primero con OR. Después hay un operador que lo dice
--     más corto: reescribilo con ese.
SELECT * FROM producto WHERE categoria = 'audio' OR categoria = 'video';
SELECT * FROM producto WHERE categoria IN ('audio', 'video');



