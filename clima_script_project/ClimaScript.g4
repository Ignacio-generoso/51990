grammar ClimaScript;

// ------------------------------
// Reglas del parser
// ------------------------------

clima_script
    : AUTOMATE CLIMA IDENTIFICADOR LLAVE_ABIERTA accion* LLAVE_CERRADA
    ;

accion
    : monitoreo
    | respuesta
    | imprimir
    ;

monitoreo
    : MONITOREAR sensor_clima CADA NUMERO MIN PUNTO_Y_COMA
    ;

respuesta
    : CUANDO sensor_clima SUBE DE NUMERO HACER ACTIVAR aspecto PUNTO_Y_COMA
    ;

imprimir
    : IMPRIMIR TEXTO CADA NUMERO MIN PUNTO_Y_COMA
    ;

sensor_clima
    : TEMPERATURA
    | HUMEDAD
    ;

aspecto
    : VENTILACION
    | RIEGO
    ;

// ------------------------------
// Reglas del lexer
// ------------------------------

IGUAL : '=';
DOS_PUNTOS : ':';
COMA : ',';
PAREN_IZQ : '(';
PAREN_DER : ')';
ASTERISCO : '*';
PUNTO : '.';


AUTOMATE     : 'automate';
CLIMA        : 'clima';
MONITOREAR   : 'monitorear';
CADA         : 'cada';
MIN          : 'min';
CUANDO       : 'cuando';
SUBE         : 'sube';
DE           : 'de';
HACER        : 'hacer';
ACTIVAR      : 'activar';
IMPRIMIR     : 'imprimir';

TEMPERATURA  : 'temperatura';
HUMEDAD      : 'humedad';
VENTILACION  : 'ventilacion';
RIEGO        : 'riego';

LLAVE_ABIERTA  : '{';
LLAVE_CERRADA  : '}';
PUNTO_Y_COMA   : ';';

NUMERO         : [0-9]+;
IDENTIFICADOR  : [a-zA-Z_][a-zA-Z_0-9]*;
TEXTO          : '"' ~["\r\n]* '"';

WS             : [ \t\r\n]+ -> skip;
