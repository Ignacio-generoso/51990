// Generated from c:/Users/ignac/OneDrive/Escritorio/Analizador Sintáctico/clima_script_project/ClimaScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ClimaScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		IGUAL=1, DOS_PUNTOS=2, COMA=3, PAREN_IZQ=4, PAREN_DER=5, ASTERISCO=6, 
		PUNTO=7, AUTOMATE=8, CLIMA=9, MONITOREAR=10, CADA=11, MIN=12, CUANDO=13, 
		SUBE=14, DE=15, HACER=16, ACTIVAR=17, IMPRIMIR=18, TEMPERATURA=19, HUMEDAD=20, 
		VENTILACION=21, RIEGO=22, LLAVE_ABIERTA=23, LLAVE_CERRADA=24, PUNTO_Y_COMA=25, 
		NUMERO=26, IDENTIFICADOR=27, TEXTO=28, WS=29;
	public static final int
		RULE_clima_script = 0, RULE_accion = 1, RULE_monitoreo = 2, RULE_respuesta = 3, 
		RULE_imprimir = 4, RULE_sensor_clima = 5, RULE_aspecto = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"clima_script", "accion", "monitoreo", "respuesta", "imprimir", "sensor_clima", 
			"aspecto"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "':'", "','", "'('", "')'", "'*'", "'.'", "'automate'", 
			"'clima'", "'monitorear'", "'cada'", "'min'", "'cuando'", "'sube'", "'de'", 
			"'hacer'", "'activar'", "'imprimir'", "'temperatura'", "'humedad'", "'ventilacion'", 
			"'riego'", "'{'", "'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IGUAL", "DOS_PUNTOS", "COMA", "PAREN_IZQ", "PAREN_DER", "ASTERISCO", 
			"PUNTO", "AUTOMATE", "CLIMA", "MONITOREAR", "CADA", "MIN", "CUANDO", 
			"SUBE", "DE", "HACER", "ACTIVAR", "IMPRIMIR", "TEMPERATURA", "HUMEDAD", 
			"VENTILACION", "RIEGO", "LLAVE_ABIERTA", "LLAVE_CERRADA", "PUNTO_Y_COMA", 
			"NUMERO", "IDENTIFICADOR", "TEXTO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ClimaScript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ClimaScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Clima_scriptContext extends ParserRuleContext {
		public TerminalNode AUTOMATE() { return getToken(ClimaScriptParser.AUTOMATE, 0); }
		public TerminalNode CLIMA() { return getToken(ClimaScriptParser.CLIMA, 0); }
		public TerminalNode IDENTIFICADOR() { return getToken(ClimaScriptParser.IDENTIFICADOR, 0); }
		public TerminalNode LLAVE_ABIERTA() { return getToken(ClimaScriptParser.LLAVE_ABIERTA, 0); }
		public TerminalNode LLAVE_CERRADA() { return getToken(ClimaScriptParser.LLAVE_CERRADA, 0); }
		public List<AccionContext> accion() {
			return getRuleContexts(AccionContext.class);
		}
		public AccionContext accion(int i) {
			return getRuleContext(AccionContext.class,i);
		}
		public Clima_scriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clima_script; }
	}

	public final Clima_scriptContext clima_script() throws RecognitionException {
		Clima_scriptContext _localctx = new Clima_scriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_clima_script);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(14);
			match(AUTOMATE);
			setState(15);
			match(CLIMA);
			setState(16);
			match(IDENTIFICADOR);
			setState(17);
			match(LLAVE_ABIERTA);
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 271360L) != 0)) {
				{
				{
				setState(18);
				accion();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(24);
			match(LLAVE_CERRADA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AccionContext extends ParserRuleContext {
		public MonitoreoContext monitoreo() {
			return getRuleContext(MonitoreoContext.class,0);
		}
		public RespuestaContext respuesta() {
			return getRuleContext(RespuestaContext.class,0);
		}
		public ImprimirContext imprimir() {
			return getRuleContext(ImprimirContext.class,0);
		}
		public AccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accion; }
	}

	public final AccionContext accion() throws RecognitionException {
		AccionContext _localctx = new AccionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_accion);
		try {
			setState(29);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MONITOREAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(26);
				monitoreo();
				}
				break;
			case CUANDO:
				enterOuterAlt(_localctx, 2);
				{
				setState(27);
				respuesta();
				}
				break;
			case IMPRIMIR:
				enterOuterAlt(_localctx, 3);
				{
				setState(28);
				imprimir();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MonitoreoContext extends ParserRuleContext {
		public TerminalNode MONITOREAR() { return getToken(ClimaScriptParser.MONITOREAR, 0); }
		public Sensor_climaContext sensor_clima() {
			return getRuleContext(Sensor_climaContext.class,0);
		}
		public TerminalNode CADA() { return getToken(ClimaScriptParser.CADA, 0); }
		public TerminalNode NUMERO() { return getToken(ClimaScriptParser.NUMERO, 0); }
		public TerminalNode MIN() { return getToken(ClimaScriptParser.MIN, 0); }
		public TerminalNode PUNTO_Y_COMA() { return getToken(ClimaScriptParser.PUNTO_Y_COMA, 0); }
		public MonitoreoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_monitoreo; }
	}

	public final MonitoreoContext monitoreo() throws RecognitionException {
		MonitoreoContext _localctx = new MonitoreoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_monitoreo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			match(MONITOREAR);
			setState(32);
			sensor_clima();
			setState(33);
			match(CADA);
			setState(34);
			match(NUMERO);
			setState(35);
			match(MIN);
			setState(36);
			match(PUNTO_Y_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RespuestaContext extends ParserRuleContext {
		public TerminalNode CUANDO() { return getToken(ClimaScriptParser.CUANDO, 0); }
		public Sensor_climaContext sensor_clima() {
			return getRuleContext(Sensor_climaContext.class,0);
		}
		public TerminalNode SUBE() { return getToken(ClimaScriptParser.SUBE, 0); }
		public TerminalNode DE() { return getToken(ClimaScriptParser.DE, 0); }
		public TerminalNode NUMERO() { return getToken(ClimaScriptParser.NUMERO, 0); }
		public TerminalNode HACER() { return getToken(ClimaScriptParser.HACER, 0); }
		public TerminalNode ACTIVAR() { return getToken(ClimaScriptParser.ACTIVAR, 0); }
		public AspectoContext aspecto() {
			return getRuleContext(AspectoContext.class,0);
		}
		public TerminalNode PUNTO_Y_COMA() { return getToken(ClimaScriptParser.PUNTO_Y_COMA, 0); }
		public RespuestaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_respuesta; }
	}

	public final RespuestaContext respuesta() throws RecognitionException {
		RespuestaContext _localctx = new RespuestaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_respuesta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(CUANDO);
			setState(39);
			sensor_clima();
			setState(40);
			match(SUBE);
			setState(41);
			match(DE);
			setState(42);
			match(NUMERO);
			setState(43);
			match(HACER);
			setState(44);
			match(ACTIVAR);
			setState(45);
			aspecto();
			setState(46);
			match(PUNTO_Y_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImprimirContext extends ParserRuleContext {
		public TerminalNode IMPRIMIR() { return getToken(ClimaScriptParser.IMPRIMIR, 0); }
		public TerminalNode TEXTO() { return getToken(ClimaScriptParser.TEXTO, 0); }
		public TerminalNode CADA() { return getToken(ClimaScriptParser.CADA, 0); }
		public TerminalNode NUMERO() { return getToken(ClimaScriptParser.NUMERO, 0); }
		public TerminalNode MIN() { return getToken(ClimaScriptParser.MIN, 0); }
		public TerminalNode PUNTO_Y_COMA() { return getToken(ClimaScriptParser.PUNTO_Y_COMA, 0); }
		public ImprimirContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imprimir; }
	}

	public final ImprimirContext imprimir() throws RecognitionException {
		ImprimirContext _localctx = new ImprimirContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_imprimir);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(IMPRIMIR);
			setState(49);
			match(TEXTO);
			setState(50);
			match(CADA);
			setState(51);
			match(NUMERO);
			setState(52);
			match(MIN);
			setState(53);
			match(PUNTO_Y_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Sensor_climaContext extends ParserRuleContext {
		public TerminalNode TEMPERATURA() { return getToken(ClimaScriptParser.TEMPERATURA, 0); }
		public TerminalNode HUMEDAD() { return getToken(ClimaScriptParser.HUMEDAD, 0); }
		public Sensor_climaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sensor_clima; }
	}

	public final Sensor_climaContext sensor_clima() throws RecognitionException {
		Sensor_climaContext _localctx = new Sensor_climaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_sensor_clima);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			_la = _input.LA(1);
			if ( !(_la==TEMPERATURA || _la==HUMEDAD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AspectoContext extends ParserRuleContext {
		public TerminalNode VENTILACION() { return getToken(ClimaScriptParser.VENTILACION, 0); }
		public TerminalNode RIEGO() { return getToken(ClimaScriptParser.RIEGO, 0); }
		public AspectoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aspecto; }
	}

	public final AspectoContext aspecto() throws RecognitionException {
		AspectoContext _localctx = new AspectoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_aspecto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			_la = _input.LA(1);
			if ( !(_la==VENTILACION || _la==RIEGO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001d<\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0014\b\u0000\n\u0000\f\u0000"+
		"\u0017\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u0001\u001e\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0000\u0000\u0007\u0000\u0002\u0004\u0006\b\n\f\u0000\u0002"+
		"\u0001\u0000\u0013\u0014\u0001\u0000\u0015\u00167\u0000\u000e\u0001\u0000"+
		"\u0000\u0000\u0002\u001d\u0001\u0000\u0000\u0000\u0004\u001f\u0001\u0000"+
		"\u0000\u0000\u0006&\u0001\u0000\u0000\u0000\b0\u0001\u0000\u0000\u0000"+
		"\n7\u0001\u0000\u0000\u0000\f9\u0001\u0000\u0000\u0000\u000e\u000f\u0005"+
		"\b\u0000\u0000\u000f\u0010\u0005\t\u0000\u0000\u0010\u0011\u0005\u001b"+
		"\u0000\u0000\u0011\u0015\u0005\u0017\u0000\u0000\u0012\u0014\u0003\u0002"+
		"\u0001\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014\u0017\u0001\u0000"+
		"\u0000\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016\u0001\u0000"+
		"\u0000\u0000\u0016\u0018\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000"+
		"\u0000\u0000\u0018\u0019\u0005\u0018\u0000\u0000\u0019\u0001\u0001\u0000"+
		"\u0000\u0000\u001a\u001e\u0003\u0004\u0002\u0000\u001b\u001e\u0003\u0006"+
		"\u0003\u0000\u001c\u001e\u0003\b\u0004\u0000\u001d\u001a\u0001\u0000\u0000"+
		"\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001c\u0001\u0000\u0000"+
		"\u0000\u001e\u0003\u0001\u0000\u0000\u0000\u001f \u0005\n\u0000\u0000"+
		" !\u0003\n\u0005\u0000!\"\u0005\u000b\u0000\u0000\"#\u0005\u001a\u0000"+
		"\u0000#$\u0005\f\u0000\u0000$%\u0005\u0019\u0000\u0000%\u0005\u0001\u0000"+
		"\u0000\u0000&\'\u0005\r\u0000\u0000\'(\u0003\n\u0005\u0000()\u0005\u000e"+
		"\u0000\u0000)*\u0005\u000f\u0000\u0000*+\u0005\u001a\u0000\u0000+,\u0005"+
		"\u0010\u0000\u0000,-\u0005\u0011\u0000\u0000-.\u0003\f\u0006\u0000./\u0005"+
		"\u0019\u0000\u0000/\u0007\u0001\u0000\u0000\u000001\u0005\u0012\u0000"+
		"\u000012\u0005\u001c\u0000\u000023\u0005\u000b\u0000\u000034\u0005\u001a"+
		"\u0000\u000045\u0005\f\u0000\u000056\u0005\u0019\u0000\u00006\t\u0001"+
		"\u0000\u0000\u000078\u0007\u0000\u0000\u00008\u000b\u0001\u0000\u0000"+
		"\u00009:\u0007\u0001\u0000\u0000:\r\u0001\u0000\u0000\u0000\u0002\u0015"+
		"\u001d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}