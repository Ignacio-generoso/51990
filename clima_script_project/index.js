// index.js
import antlr4 from 'antlr4';
import fs from 'fs';

// Importaciones sin destructurar (CommonJS -> ESModule compatibilidad)
import ClimaScriptLexer from './output/ClimaScriptLexer.js';
import ClimaScriptParser from './output/ClimaScriptParser.js';
import ClimaScriptToJSVisitor from './output/ClimaScriptToJSVisitor.js';

// Leer archivo de entrada
const input = fs.readFileSync('input.txt', 'utf-8');

// Crear flujo léxico
const chars = new antlr4.InputStream(input);
const lexer = new ClimaScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Mostrar tokens
console.log("=== Tabla de Lexemas-Tokens ===");
tokens.fill();
const symbolicNames = ClimaScriptLexer.symbolicNames;

tokens.tokens.forEach(token => {
  if (token.type !== antlr4.Token.EOF) {
    console.log(`Token: ${symbolicNames?.[token.type] ?? token.type}, Lexema: '${token.text}'`);
  }
});


// Parseo
tokens.reset();
const parser = new ClimaScriptParser(tokens);
parser.buildParseTrees = true;
const tree = parser.clima_script();

// Mostrar árbol sintáctico
console.log("\n=== Árbol Sintáctico ===");
console.log(tree.toStringTree(parser.ruleNames));

// Aplicar visitor
console.log("\n=== Traducción a JavaScript ===");
const visitor = new ClimaScriptToJSVisitor();
const result = visitor.visit(tree);
console.log(result);

// Guardar resultado
fs.writeFileSync('output.js', result);
console.log("\n✅ Código JavaScript guardado en 'output.js'");
