import antlr4 from 'antlr4';
import ClimaScriptVisitor from './ClimaScriptVisitor.js';

class ClimaScriptToJSVisitor extends ClimaScriptVisitor {
  constructor() {
    super();
    this.output = "";
  }

  // automate clima IDENTIFICADOR { accion* }
  visitClima_script(ctx) {
    const nombre = ctx.IDENTIFICADOR().getText();
    this.output += `const ${nombre} = {\n`;

    for (let accionCtx of ctx.accion()) {
      this.visit(accionCtx);
    }

    this.output += `};\n`;
    return this.output;
  }

  visitMonitoreo(ctx) {
    const sensorNode = ctx.sensor_clima();
    const numeroNode = ctx.NUMERO();

    if (!sensorNode || !numeroNode) {
      console.warn("⚠️ Instrucción 'monitorear' inválida. Saltando.");
      return;
    }

    const sensor = sensorNode.getText();
    const tiempo = numeroNode.getText();
    this.output += `  monitorear: function() {\n`;
    this.output += `    console.log("Monitoreando ${sensor} cada ${tiempo} min");\n`;
    this.output += `  },\n`;
  }

  visitRespuesta(ctx) {
    const sensorNode = ctx.sensor_clima();
    const numeroNode = ctx.NUMERO();
    const aspectoNode = ctx.aspecto();

    if (!sensorNode || !numeroNode || !aspectoNode) {
      console.warn("⚠️ Instrucción 'respuesta' inválida. Saltando.");
      return;
    }

    const sensor = sensorNode.getText();
    const valor = numeroNode.getText();
    const aspecto = aspectoNode.getText();

    this.output += `  responder: function(${sensor}) {\n`;
    this.output += `    if (${sensor} > ${valor}) {\n`;
    this.output += `      console.log("Activando ${aspecto}");\n`;
    this.output += `    }\n`;
    this.output += `  },\n`;
  }

  visitImprimir(ctx) {
    const textoNode = ctx.TEXTO();
    const numeroNode = ctx.NUMERO();

    if (!textoNode || !numeroNode) {
      console.warn("⚠️ Instrucción 'imprimir' inválida. Saltando.");
      return;
    }

    const texto = textoNode.getText().slice(1, -1); // quitar comillas
    const tiempo = numeroNode.getText();

    this.output += `  imprimir: function() {\n`;
    this.output += `    setInterval(() => console.log("${texto}"), ${tiempo} * 60000);\n`;
    this.output += `  },\n`;
  }
}

export default ClimaScriptToJSVisitor;
