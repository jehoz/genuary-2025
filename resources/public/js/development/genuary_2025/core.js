// Compiled by ClojureScript 1.10.520 {}
goog.provide('genuary_2025.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
genuary_2025.core.setup = (function genuary_2025$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
genuary_2025.core.update_state = (function genuary_2025$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
genuary_2025.core.draw_state = (function genuary_2025$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__21761__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21761__auto__);

return quil.core.rect.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
genuary_2025.core.run_sketch = (function genuary_2025$core$run_sketch(){
genuary_2025.core.genuary_2025 = (function genuary_2025$core$run_sketch_$_genuary_2025(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"genuary-2025",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,genuary_2025.core.update_state))?(function() { 
var G__35030__delegate = function (args){
return cljs.core.apply.call(null,genuary_2025.core.update_state,args);
};
var G__35030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35031__i = 0, G__35031__a = new Array(arguments.length -  0);
while (G__35031__i < G__35031__a.length) {G__35031__a[G__35031__i] = arguments[G__35031__i + 0]; ++G__35031__i;}
  args = new cljs.core.IndexedSeq(G__35031__a,0,null);
} 
return G__35030__delegate.call(this,args);};
G__35030.cljs$lang$maxFixedArity = 0;
G__35030.cljs$lang$applyTo = (function (arglist__35032){
var args = cljs.core.seq(arglist__35032);
return G__35030__delegate(args);
});
G__35030.cljs$core$IFn$_invoke$arity$variadic = G__35030__delegate;
return G__35030;
})()
:genuary_2025.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,genuary_2025.core.setup))?(function() { 
var G__35033__delegate = function (args){
return cljs.core.apply.call(null,genuary_2025.core.setup,args);
};
var G__35033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35034__i = 0, G__35034__a = new Array(arguments.length -  0);
while (G__35034__i < G__35034__a.length) {G__35034__a[G__35034__i] = arguments[G__35034__i + 0]; ++G__35034__i;}
  args = new cljs.core.IndexedSeq(G__35034__a,0,null);
} 
return G__35033__delegate.call(this,args);};
G__35033.cljs$lang$maxFixedArity = 0;
G__35033.cljs$lang$applyTo = (function (arglist__35035){
var args = cljs.core.seq(arglist__35035);
return G__35033__delegate(args);
});
G__35033.cljs$core$IFn$_invoke$arity$variadic = G__35033__delegate;
return G__35033;
})()
:genuary_2025.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,genuary_2025.core.draw_state))?(function() { 
var G__35036__delegate = function (args){
return cljs.core.apply.call(null,genuary_2025.core.draw_state,args);
};
var G__35036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35037__i = 0, G__35037__a = new Array(arguments.length -  0);
while (G__35037__i < G__35037__a.length) {G__35037__a[G__35037__i] = arguments[G__35037__i + 0]; ++G__35037__i;}
  args = new cljs.core.IndexedSeq(G__35037__a,0,null);
} 
return G__35036__delegate.call(this,args);};
G__35036.cljs$lang$maxFixedArity = 0;
G__35036.cljs$lang$applyTo = (function (arglist__35038){
var args = cljs.core.seq(arglist__35038);
return G__35036__delegate(args);
});
G__35036.cljs$core$IFn$_invoke$arity$variadic = G__35036__delegate;
return G__35036;
})()
:genuary_2025.core.draw_state));
});
goog.exportSymbol('genuary_2025.core.genuary_2025', genuary_2025.core.genuary_2025);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),genuary_2025.core.genuary_2025,new cljs.core.Keyword(null,"host-id","host-id",742376279),"genuary-2025"], null));
}
});
goog.exportSymbol('genuary_2025.core.run_sketch', genuary_2025.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1738021295543
