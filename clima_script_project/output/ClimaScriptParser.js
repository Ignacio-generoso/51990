// Generated from ClimaScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ClimaScriptListener from './ClimaScriptListener.js';
import ClimaScriptVisitor from './ClimaScriptVisitor.js';

const serializedATN = [4,1,22,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,0,7,
0,2,4,6,8,10,12,0,2,1,0,12,13,1,0,14,15,55,0,14,1,0,0,0,2,29,1,0,0,0,4,31,
1,0,0,0,6,38,1,0,0,0,8,48,1,0,0,0,10,55,1,0,0,0,12,57,1,0,0,0,14,15,5,1,
0,0,15,16,5,2,0,0,16,17,5,20,0,0,17,21,5,16,0,0,18,20,3,2,1,0,19,18,1,0,
0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,
0,24,25,5,17,0,0,25,1,1,0,0,0,26,30,3,4,2,0,27,30,3,6,3,0,28,30,3,8,4,0,
29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,3,0,0,32,
33,3,10,5,0,33,34,5,4,0,0,34,35,5,19,0,0,35,36,5,5,0,0,36,37,5,18,0,0,37,
5,1,0,0,0,38,39,5,6,0,0,39,40,3,10,5,0,40,41,5,7,0,0,41,42,5,8,0,0,42,43,
5,19,0,0,43,44,5,9,0,0,44,45,5,10,0,0,45,46,3,12,6,0,46,47,5,18,0,0,47,7,
1,0,0,0,48,49,5,11,0,0,49,50,5,21,0,0,50,51,5,4,0,0,51,52,5,19,0,0,52,53,
5,5,0,0,53,54,5,18,0,0,54,9,1,0,0,0,55,56,7,0,0,0,56,11,1,0,0,0,57,58,7,
1,0,0,58,13,1,0,0,0,2,21,29];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ClimaScriptParser extends antlr4.Parser {

    static grammarFileName = "ClimaScript.g4";
    static literalNames = [ null, "'automate'", "'clima'", "'monitorear'", 
                            "'cada'", "'min'", "'cuando'", "'sube'", "'de'", 
                            "'hacer'", "'activar'", "'imprimir'", "'temperatura'", 
                            "'humedad'", "'ventilacion'", "'riego'", "'{'", 
                            "'}'", "';'" ];
    static symbolicNames = [ null, "AUTOMATE", "CLIMA", "MONITOREAR", "CADA", 
                             "MIN", "CUANDO", "SUBE", "DE", "HACER", "ACTIVAR", 
                             "IMPRIMIR", "TEMPERATURA", "HUMEDAD", "VENTILACION", 
                             "RIEGO", "LLAVE_ABIERTA", "LLAVE_CERRADA", 
                             "PUNTO_Y_COMA", "NUMERO", "IDENTIFICADOR", 
                             "TEXTO", "WS" ];
    static ruleNames = [ "clima_script", "accion", "monitoreo", "respuesta", 
                         "imprimir", "sensor_clima", "aspecto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ClimaScriptParser.ruleNames;
        this.literalNames = ClimaScriptParser.literalNames;
        this.symbolicNames = ClimaScriptParser.symbolicNames;
    }



	clima_script() {
	    let localctx = new Clima_scriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ClimaScriptParser.RULE_clima_script);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(ClimaScriptParser.AUTOMATE);
	        this.state = 15;
	        this.match(ClimaScriptParser.CLIMA);
	        this.state = 16;
	        this.match(ClimaScriptParser.IDENTIFICADOR);
	        this.state = 17;
	        this.match(ClimaScriptParser.LLAVE_ABIERTA);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2120) !== 0)) {
	            this.state = 18;
	            this.accion();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(ClimaScriptParser.LLAVE_CERRADA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ClimaScriptParser.RULE_accion);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.monitoreo();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.respuesta();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	monitoreo() {
	    let localctx = new MonitoreoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ClimaScriptParser.RULE_monitoreo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(ClimaScriptParser.MONITOREAR);
	        this.state = 32;
	        this.sensor_clima();
	        this.state = 33;
	        this.match(ClimaScriptParser.CADA);
	        this.state = 34;
	        this.match(ClimaScriptParser.NUMERO);
	        this.state = 35;
	        this.match(ClimaScriptParser.MIN);
	        this.state = 36;
	        this.match(ClimaScriptParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	respuesta() {
	    let localctx = new RespuestaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ClimaScriptParser.RULE_respuesta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(ClimaScriptParser.CUANDO);
	        this.state = 39;
	        this.sensor_clima();
	        this.state = 40;
	        this.match(ClimaScriptParser.SUBE);
	        this.state = 41;
	        this.match(ClimaScriptParser.DE);
	        this.state = 42;
	        this.match(ClimaScriptParser.NUMERO);
	        this.state = 43;
	        this.match(ClimaScriptParser.HACER);
	        this.state = 44;
	        this.match(ClimaScriptParser.ACTIVAR);
	        this.state = 45;
	        this.aspecto();
	        this.state = 46;
	        this.match(ClimaScriptParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ClimaScriptParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(ClimaScriptParser.IMPRIMIR);
	        this.state = 49;
	        this.match(ClimaScriptParser.TEXTO);
	        this.state = 50;
	        this.match(ClimaScriptParser.CADA);
	        this.state = 51;
	        this.match(ClimaScriptParser.NUMERO);
	        this.state = 52;
	        this.match(ClimaScriptParser.MIN);
	        this.state = 53;
	        this.match(ClimaScriptParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sensor_clima() {
	    let localctx = new Sensor_climaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ClimaScriptParser.RULE_sensor_clima);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aspecto() {
	    let localctx = new AspectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ClimaScriptParser.RULE_aspecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ClimaScriptParser.EOF = antlr4.Token.EOF;
ClimaScriptParser.AUTOMATE = 1;
ClimaScriptParser.CLIMA = 2;
ClimaScriptParser.MONITOREAR = 3;
ClimaScriptParser.CADA = 4;
ClimaScriptParser.MIN = 5;
ClimaScriptParser.CUANDO = 6;
ClimaScriptParser.SUBE = 7;
ClimaScriptParser.DE = 8;
ClimaScriptParser.HACER = 9;
ClimaScriptParser.ACTIVAR = 10;
ClimaScriptParser.IMPRIMIR = 11;
ClimaScriptParser.TEMPERATURA = 12;
ClimaScriptParser.HUMEDAD = 13;
ClimaScriptParser.VENTILACION = 14;
ClimaScriptParser.RIEGO = 15;
ClimaScriptParser.LLAVE_ABIERTA = 16;
ClimaScriptParser.LLAVE_CERRADA = 17;
ClimaScriptParser.PUNTO_Y_COMA = 18;
ClimaScriptParser.NUMERO = 19;
ClimaScriptParser.IDENTIFICADOR = 20;
ClimaScriptParser.TEXTO = 21;
ClimaScriptParser.WS = 22;

ClimaScriptParser.RULE_clima_script = 0;
ClimaScriptParser.RULE_accion = 1;
ClimaScriptParser.RULE_monitoreo = 2;
ClimaScriptParser.RULE_respuesta = 3;
ClimaScriptParser.RULE_imprimir = 4;
ClimaScriptParser.RULE_sensor_clima = 5;
ClimaScriptParser.RULE_aspecto = 6;

class Clima_scriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaScriptParser.RULE_clima_script;
    }

	AUTOMATE() {
	    return this.getToken(ClimaScriptParser.AUTOMATE, 0);
	};

	CLIMA() {
	    return this.getToken(ClimaScriptParser.CLIMA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(ClimaScriptParser.IDENTIFICADOR, 0);
	};

	LLAVE_ABIERTA() {
	    return this.getToken(ClimaScriptParser.LLAVE_ABIERTA, 0);
	};

	LLAVE_CERRADA() {
	    return this.getToken(ClimaScriptParser.LLAVE_CERRADA, 0);
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.enterClima_script(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.exitClima_script(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaScriptVisitor ) {
	        return visitor.visitClima_script(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaScriptParser.RULE_accion;
    }

	monitoreo() {
	    return this.getTypedRuleContext(MonitoreoContext,0);
	};

	respuesta() {
	    return this.getTypedRuleContext(RespuestaContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaScriptVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MonitoreoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaScriptParser.RULE_monitoreo;
    }

	MONITOREAR() {
	    return this.getToken(ClimaScriptParser.MONITOREAR, 0);
	};

	sensor_clima() {
	    return this.getTypedRuleContext(Sensor_climaContext,0);
	};

	CADA() {
	    return this.getToken(ClimaScriptParser.CADA, 0);
	};

	NUMERO() {
	    return this.getToken(ClimaScriptParser.NUMERO, 0);
	};

	MIN() {
	    return this.getToken(ClimaScriptParser.MIN, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(ClimaScriptParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.enterMonitoreo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.exitMonitoreo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaScriptVisitor ) {
	        return visitor.visitMonitoreo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RespuestaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaScriptParser.RULE_respuesta;
    }

	CUANDO() {
	    return this.getToken(ClimaScriptParser.CUANDO, 0);
	};

	sensor_clima() {
	    return this.getTypedRuleContext(Sensor_climaContext,0);
	};

	SUBE() {
	    return this.getToken(ClimaScriptParser.SUBE, 0);
	};

	DE() {
	    return this.getToken(ClimaScriptParser.DE, 0);
	};

	NUMERO() {
	    return this.getToken(ClimaScriptParser.NUMERO, 0);
	};

	HACER() {
	    return this.getToken(ClimaScriptParser.HACER, 0);
	};

	ACTIVAR() {
	    return this.getToken(ClimaScriptParser.ACTIVAR, 0);
	};

	aspecto() {
	    return this.getTypedRuleContext(AspectoContext,0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(ClimaScriptParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.enterRespuesta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.exitRespuesta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaScriptVisitor ) {
	        return visitor.visitRespuesta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaScriptParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(ClimaScriptParser.IMPRIMIR, 0);
	};

	TEXTO() {
	    return this.getToken(ClimaScriptParser.TEXTO, 0);
	};

	CADA() {
	    return this.getToken(ClimaScriptParser.CADA, 0);
	};

	NUMERO() {
	    return this.getToken(ClimaScriptParser.NUMERO, 0);
	};

	MIN() {
	    return this.getToken(ClimaScriptParser.MIN, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(ClimaScriptParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaScriptVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sensor_climaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaScriptParser.RULE_sensor_clima;
    }

	TEMPERATURA() {
	    return this.getToken(ClimaScriptParser.TEMPERATURA, 0);
	};

	HUMEDAD() {
	    return this.getToken(ClimaScriptParser.HUMEDAD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.enterSensor_clima(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.exitSensor_clima(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaScriptVisitor ) {
	        return visitor.visitSensor_clima(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AspectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaScriptParser.RULE_aspecto;
    }

	VENTILACION() {
	    return this.getToken(ClimaScriptParser.VENTILACION, 0);
	};

	RIEGO() {
	    return this.getToken(ClimaScriptParser.RIEGO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.enterAspecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaScriptListener ) {
	        listener.exitAspecto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClimaScriptVisitor ) {
	        return visitor.visitAspecto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ClimaScriptParser.Clima_scriptContext = Clima_scriptContext; 
ClimaScriptParser.AccionContext = AccionContext; 
ClimaScriptParser.MonitoreoContext = MonitoreoContext; 
ClimaScriptParser.RespuestaContext = RespuestaContext; 
ClimaScriptParser.ImprimirContext = ImprimirContext; 
ClimaScriptParser.Sensor_climaContext = Sensor_climaContext; 
ClimaScriptParser.AspectoContext = AspectoContext; 
