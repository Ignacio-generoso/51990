==============================
PROYECTO: Analizador ClimaScript
==============================

Este proyecto permite analizar y traducir scripts escritos en el lenguaje "ClimaScript", diseñado para definir comportamientos automatizados de sistemas climáticos. Utiliza ANTLR4 con JavaScript para analizar sintácticamente textos y generar código JavaScript equivalente si el texto es válido.

------------------------------
 CONTENIDO DEL PROYECTO
------------------------------

- ClimaScript.g4 ................ Gramática del lenguaje ClimaScript (ANTLR4)
- index.js ...................... Programa principal que analiza y traduce un archivo `input.txt`
- output/ ....................... Carpeta con los archivos generados por ANTLR (Lexer, Parser, Visitor)
- package.json / package-lock... Archivos de configuración para Node.js y dependencias
- input.txt ..................... Archivo que contiene el script a analizar
- output.js ..................... Código JavaScript generado a partir del script válido
- EjemploInvalido_1.txt ......... Ejemplo de entrada que NO cumple la gramática (para pruebas)
- EjemploInvalido_2.txt ......... Ejemplo de entrada que NO cumple la gramática (para pruebas)
- EjemploValido_1.txt ........... Ejemplo de entrada que cumple la gramática (para pruebas)
- EjemploValido_2.txt ........... Ejemplo de entrada que cumple la gramática (para pruebas)
- Gramatica.txt................... Gramática proporcionada para realizar el proyecto
------------------------------
 REQUISITOS
------------------------------

- Node.js v16 o superior
- ANTLR 4.13.2 para generar los archivos del parser
- Dependencias instaladas con: `npm install`

------------------------------
 CÓMO CLONAR EL PROYECTO
------------------------------

1. Abrí una terminal y ejecutá el siguiente comando para clonar el repositorio:

    ```bash
    git clone https://github.com/Ignacio-generoso/51990.git
    ```

2. Ingresá a la carpeta del proyecto:

    ```bash
    cd 51990
    ```

3. Abrí el proyecto en Visual Studio Code con:

    ```bash
    code .
    ```

------------------------------
 CÓMO USAR EL PROYECTO
------------------------------

1. Asegurate de tener los archivos generados por ANTLR en la carpeta `output/`.

2. Colocá el texto a analizar dentro del archivo `input.txt`.

3. Ejecutá el programa con:

    ```bash
    node index.js
    ```

4. La consola mostrará:
   - Tabla de tokens léxicos
   - Traducción a JavaScript (si el texto es válido)

5. El archivo `output.js` contendrá el código generado.

6. Para ver el árbol sintáctico, abrí el archivo `ClimaScript.g4`, seleccioná la extensión de ANTLR y presioná `F5`.

