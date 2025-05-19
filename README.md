==============================
PROYECTO: Analizador ClimaScript
==============================

Este proyecto permite analizar y traducir scripts escritos en el lenguaje "ClimaScript", diseñado para definir comportamientos automatizados de sistemas climáticos. Utiliza ANTLR4 con JavaScript para analizar sintácticamente textos y generar código JavaScript equivalente si el texto es válido.

------------------------------
📦 CONTENIDO DEL PROYECTO
------------------------------

- ClimaScript.g4 ................ Gramática del lenguaje ClimaScript (ANTLR4)
- index.js ...................... Programa principal que analiza y traduce un archivo `input.txt`
- output/ ....................... Carpeta con los archivos generados por ANTLR (Lexer, Parser, Visitor)
- package.json / package-lock... Archivos de configuración para Node.js y dependencias
- input.txt ..................... Archivo que contiene el script a analizar
- output.js ..................... Código JavaScript generado a partir del script válido
- EjemploInvalido_1.txt ......... Ejemplo de entrada que NO cumple la gramática (para pruebas)
- EjemploInvalido_2.txt ......... Ejemplo de entrada que NO cumple la gramática (para pruebas)
- EjemploValido_1.txt ......... Ejemplo de entrada que cumple la gramática (para pruebas)
- EjemploValido_2.txt ......... Ejemplo de entrada que cumple la gramática (para pruebas)

------------------------------
🧰 REQUISITOS
------------------------------

- Node.js v16 o superior
- ANTLR 4.13.2 para generar los archivos del parser
- Dependencias instaladas con: `npm install`

------------------------------
🚀 CÓMO USAR EL PROYECTO
------------------------------

1. Asegurate de tener los archivos generados por ANTLR en la carpeta `output/`.

2. Colocá el texto a analizar dentro del archivo `input.txt`.

3. Ejecutá el programa con:

    node index.js

4. La consola mostrará:
   - Tabla de tokens léxicos
   - Traducción a JavaScript (si el texto es válido)

5. El archivo `output.js` contendrá el código generado.

6. Para ver el árbol sintáctico debes colocarte en la carpeta `ClimaScript.g4` , seleccionar la extención del antlr y tocar F5
------------------------------
✅ EJEMPLO VÁLIDO
------------------------------

Contenido de `input.txt`:

    automate clima controladorClima {
      monitorear temperatura cada 15 min;
      imprimir "Temperatura alta" cada 10 min;
      cuando humedad sube de 80 hacer activar riego;
    }

Este script cumple con la gramática y generará código JavaScript en `output.js`.

------------------------------
❌ EJEMPLO INVÁLIDO
------------------------------

Contenido de `EjemploInvalido_1.txt`:

    automate clima climaError {
      cuando humedad 70 activar paraguas;
    }

Errores:
- Falta la palabra clave `sube` y `de` en la regla `respuesta`.
- `"paraguas"` no es un `<aspecto>` válido según la gramática (sólo se permiten `ventilacion` o `riego`).

Al ejecutar este archivo, se mostrará un mensaje como:

    line 2:21 mismatched input '70' expecting 'sube'

------------------------------
🧪 TESTEAR OTROS EJEMPLOS
------------------------------

Podés crear más archivos `.txt` con diferentes textos y renombrarlos como `input.txt` para probar.

Recordá que la gramática espera:

- `"automate clima <identificador> { ... }"`
- Acciones como:
    - `monitorear <sensor_clima> cada <numero> min;`
    - `cuando <sensor_clima> sube de <numero> hacer activar <aspecto>;`
    - `imprimir "<texto>" cada <numero> min;`

