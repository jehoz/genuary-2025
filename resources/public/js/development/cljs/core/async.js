// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23695 = arguments.length;
switch (G__23695) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23696 = (function (f,blockable,meta23697){
this.f = f;
this.blockable = blockable;
this.meta23697 = meta23697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23698,meta23697__$1){
var self__ = this;
var _23698__$1 = this;
return (new cljs.core.async.t_cljs$core$async23696(self__.f,self__.blockable,meta23697__$1));
});

cljs.core.async.t_cljs$core$async23696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23698){
var self__ = this;
var _23698__$1 = this;
return self__.meta23697;
});

cljs.core.async.t_cljs$core$async23696.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23697","meta23697",-1344418945,null)], null);
});

cljs.core.async.t_cljs$core$async23696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23696";

cljs.core.async.t_cljs$core$async23696.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23696");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23696.
 */
cljs.core.async.__GT_t_cljs$core$async23696 = (function cljs$core$async$__GT_t_cljs$core$async23696(f__$1,blockable__$1,meta23697){
return (new cljs.core.async.t_cljs$core$async23696(f__$1,blockable__$1,meta23697));
});

}

return (new cljs.core.async.t_cljs$core$async23696(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23702 = arguments.length;
switch (G__23702) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23705 = arguments.length;
switch (G__23705) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23708 = arguments.length;
switch (G__23708) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23710 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23710);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23710,ret){
return (function (){
return fn1.call(null,val_23710);
});})(val_23710,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23712 = arguments.length;
switch (G__23712) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23714 = n;
var x_23715 = (0);
while(true){
if((x_23715 < n__4607__auto___23714)){
(a[x_23715] = (0));

var G__23716 = (x_23715 + (1));
x_23715 = G__23716;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23717 = (i + (1));
i = G__23717;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23718 = (function (flag,meta23719){
this.flag = flag;
this.meta23719 = meta23719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23720,meta23719__$1){
var self__ = this;
var _23720__$1 = this;
return (new cljs.core.async.t_cljs$core$async23718(self__.flag,meta23719__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23720){
var self__ = this;
var _23720__$1 = this;
return self__.meta23719;
});})(flag))
;

cljs.core.async.t_cljs$core$async23718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23718.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23719","meta23719",-1102103733,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23718";

cljs.core.async.t_cljs$core$async23718.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23718");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23718.
 */
cljs.core.async.__GT_t_cljs$core$async23718 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23718(flag__$1,meta23719){
return (new cljs.core.async.t_cljs$core$async23718(flag__$1,meta23719));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23718(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23721 = (function (flag,cb,meta23722){
this.flag = flag;
this.cb = cb;
this.meta23722 = meta23722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23723,meta23722__$1){
var self__ = this;
var _23723__$1 = this;
return (new cljs.core.async.t_cljs$core$async23721(self__.flag,self__.cb,meta23722__$1));
});

cljs.core.async.t_cljs$core$async23721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23723){
var self__ = this;
var _23723__$1 = this;
return self__.meta23722;
});

cljs.core.async.t_cljs$core$async23721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23722","meta23722",-1297960992,null)], null);
});

cljs.core.async.t_cljs$core$async23721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23721";

cljs.core.async.t_cljs$core$async23721.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23721");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23721.
 */
cljs.core.async.__GT_t_cljs$core$async23721 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23721(flag__$1,cb__$1,meta23722){
return (new cljs.core.async.t_cljs$core$async23721(flag__$1,cb__$1,meta23722));
});

}

return (new cljs.core.async.t_cljs$core$async23721(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23724_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23724_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23725_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23725_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23726 = (i + (1));
i = G__23726;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23732 = arguments.length;
var i__4731__auto___23733 = (0);
while(true){
if((i__4731__auto___23733 < len__4730__auto___23732)){
args__4736__auto__.push((arguments[i__4731__auto___23733]));

var G__23734 = (i__4731__auto___23733 + (1));
i__4731__auto___23733 = G__23734;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23729){
var map__23730 = p__23729;
var map__23730__$1 = (((((!((map__23730 == null))))?(((((map__23730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23730):map__23730);
var opts = map__23730__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23727){
var G__23728 = cljs.core.first.call(null,seq23727);
var seq23727__$1 = cljs.core.next.call(null,seq23727);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23728,seq23727__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23736 = arguments.length;
switch (G__23736) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23635__auto___23782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___23782){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___23782){
return (function (state_23760){
var state_val_23761 = (state_23760[(1)]);
if((state_val_23761 === (7))){
var inst_23756 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
var statearr_23762_23783 = state_23760__$1;
(statearr_23762_23783[(2)] = inst_23756);

(statearr_23762_23783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (1))){
var state_23760__$1 = state_23760;
var statearr_23763_23784 = state_23760__$1;
(statearr_23763_23784[(2)] = null);

(statearr_23763_23784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (4))){
var inst_23739 = (state_23760[(7)]);
var inst_23739__$1 = (state_23760[(2)]);
var inst_23740 = (inst_23739__$1 == null);
var state_23760__$1 = (function (){var statearr_23764 = state_23760;
(statearr_23764[(7)] = inst_23739__$1);

return statearr_23764;
})();
if(cljs.core.truth_(inst_23740)){
var statearr_23765_23785 = state_23760__$1;
(statearr_23765_23785[(1)] = (5));

} else {
var statearr_23766_23786 = state_23760__$1;
(statearr_23766_23786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (13))){
var state_23760__$1 = state_23760;
var statearr_23767_23787 = state_23760__$1;
(statearr_23767_23787[(2)] = null);

(statearr_23767_23787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (6))){
var inst_23739 = (state_23760[(7)]);
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23760__$1,(11),to,inst_23739);
} else {
if((state_val_23761 === (3))){
var inst_23758 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23760__$1,inst_23758);
} else {
if((state_val_23761 === (12))){
var state_23760__$1 = state_23760;
var statearr_23768_23788 = state_23760__$1;
(statearr_23768_23788[(2)] = null);

(statearr_23768_23788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (2))){
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23760__$1,(4),from);
} else {
if((state_val_23761 === (11))){
var inst_23749 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
if(cljs.core.truth_(inst_23749)){
var statearr_23769_23789 = state_23760__$1;
(statearr_23769_23789[(1)] = (12));

} else {
var statearr_23770_23790 = state_23760__$1;
(statearr_23770_23790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (9))){
var state_23760__$1 = state_23760;
var statearr_23771_23791 = state_23760__$1;
(statearr_23771_23791[(2)] = null);

(statearr_23771_23791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (5))){
var state_23760__$1 = state_23760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23772_23792 = state_23760__$1;
(statearr_23772_23792[(1)] = (8));

} else {
var statearr_23773_23793 = state_23760__$1;
(statearr_23773_23793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (14))){
var inst_23754 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
var statearr_23774_23794 = state_23760__$1;
(statearr_23774_23794[(2)] = inst_23754);

(statearr_23774_23794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (10))){
var inst_23746 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
var statearr_23775_23795 = state_23760__$1;
(statearr_23775_23795[(2)] = inst_23746);

(statearr_23775_23795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (8))){
var inst_23743 = cljs.core.async.close_BANG_.call(null,to);
var state_23760__$1 = state_23760;
var statearr_23776_23796 = state_23760__$1;
(statearr_23776_23796[(2)] = inst_23743);

(statearr_23776_23796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___23782))
;
return ((function (switch__23540__auto__,c__23635__auto___23782){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_23777 = [null,null,null,null,null,null,null,null];
(statearr_23777[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_23777[(1)] = (1));

return statearr_23777;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_23760){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_23760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e23778){if((e23778 instanceof Object)){
var ex__23544__auto__ = e23778;
var statearr_23779_23797 = state_23760;
(statearr_23779_23797[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23798 = state_23760;
state_23760 = G__23798;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_23760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_23760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___23782))
})();
var state__23637__auto__ = (function (){var statearr_23780 = f__23636__auto__.call(null);
(statearr_23780[(6)] = c__23635__auto___23782);

return statearr_23780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___23782))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23799){
var vec__23800 = p__23799;
var v = cljs.core.nth.call(null,vec__23800,(0),null);
var p = cljs.core.nth.call(null,vec__23800,(1),null);
var job = vec__23800;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23635__auto___23971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___23971,res,vec__23800,v,p,job,jobs,results){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___23971,res,vec__23800,v,p,job,jobs,results){
return (function (state_23807){
var state_val_23808 = (state_23807[(1)]);
if((state_val_23808 === (1))){
var state_23807__$1 = state_23807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23807__$1,(2),res,v);
} else {
if((state_val_23808 === (2))){
var inst_23804 = (state_23807[(2)]);
var inst_23805 = cljs.core.async.close_BANG_.call(null,res);
var state_23807__$1 = (function (){var statearr_23809 = state_23807;
(statearr_23809[(7)] = inst_23804);

return statearr_23809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23807__$1,inst_23805);
} else {
return null;
}
}
});})(c__23635__auto___23971,res,vec__23800,v,p,job,jobs,results))
;
return ((function (switch__23540__auto__,c__23635__auto___23971,res,vec__23800,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0 = (function (){
var statearr_23810 = [null,null,null,null,null,null,null,null];
(statearr_23810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__);

(statearr_23810[(1)] = (1));

return statearr_23810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1 = (function (state_23807){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_23807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e23811){if((e23811 instanceof Object)){
var ex__23544__auto__ = e23811;
var statearr_23812_23972 = state_23807;
(statearr_23812_23972[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23973 = state_23807;
state_23807 = G__23973;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = function(state_23807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1.call(this,state_23807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___23971,res,vec__23800,v,p,job,jobs,results))
})();
var state__23637__auto__ = (function (){var statearr_23813 = f__23636__auto__.call(null);
(statearr_23813[(6)] = c__23635__auto___23971);

return statearr_23813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___23971,res,vec__23800,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23814){
var vec__23815 = p__23814;
var v = cljs.core.nth.call(null,vec__23815,(0),null);
var p = cljs.core.nth.call(null,vec__23815,(1),null);
var job = vec__23815;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23974 = n;
var __23975 = (0);
while(true){
if((__23975 < n__4607__auto___23974)){
var G__23818_23976 = type;
var G__23818_23977__$1 = (((G__23818_23976 instanceof cljs.core.Keyword))?G__23818_23976.fqn:null);
switch (G__23818_23977__$1) {
case "compute":
var c__23635__auto___23979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23975,c__23635__auto___23979,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (__23975,c__23635__auto___23979,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async){
return (function (state_23831){
var state_val_23832 = (state_23831[(1)]);
if((state_val_23832 === (1))){
var state_23831__$1 = state_23831;
var statearr_23833_23980 = state_23831__$1;
(statearr_23833_23980[(2)] = null);

(statearr_23833_23980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23832 === (2))){
var state_23831__$1 = state_23831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23831__$1,(4),jobs);
} else {
if((state_val_23832 === (3))){
var inst_23829 = (state_23831[(2)]);
var state_23831__$1 = state_23831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23831__$1,inst_23829);
} else {
if((state_val_23832 === (4))){
var inst_23821 = (state_23831[(2)]);
var inst_23822 = process.call(null,inst_23821);
var state_23831__$1 = state_23831;
if(cljs.core.truth_(inst_23822)){
var statearr_23834_23981 = state_23831__$1;
(statearr_23834_23981[(1)] = (5));

} else {
var statearr_23835_23982 = state_23831__$1;
(statearr_23835_23982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23832 === (5))){
var state_23831__$1 = state_23831;
var statearr_23836_23983 = state_23831__$1;
(statearr_23836_23983[(2)] = null);

(statearr_23836_23983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23832 === (6))){
var state_23831__$1 = state_23831;
var statearr_23837_23984 = state_23831__$1;
(statearr_23837_23984[(2)] = null);

(statearr_23837_23984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23832 === (7))){
var inst_23827 = (state_23831[(2)]);
var state_23831__$1 = state_23831;
var statearr_23838_23985 = state_23831__$1;
(statearr_23838_23985[(2)] = inst_23827);

(statearr_23838_23985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23975,c__23635__auto___23979,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async))
;
return ((function (__23975,switch__23540__auto__,c__23635__auto___23979,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0 = (function (){
var statearr_23839 = [null,null,null,null,null,null,null];
(statearr_23839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__);

(statearr_23839[(1)] = (1));

return statearr_23839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1 = (function (state_23831){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_23831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e23840){if((e23840 instanceof Object)){
var ex__23544__auto__ = e23840;
var statearr_23841_23986 = state_23831;
(statearr_23841_23986[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23987 = state_23831;
state_23831 = G__23987;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = function(state_23831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1.call(this,state_23831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__;
})()
;})(__23975,switch__23540__auto__,c__23635__auto___23979,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async))
})();
var state__23637__auto__ = (function (){var statearr_23842 = f__23636__auto__.call(null);
(statearr_23842[(6)] = c__23635__auto___23979);

return statearr_23842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(__23975,c__23635__auto___23979,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async))
);


break;
case "async":
var c__23635__auto___23988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23975,c__23635__auto___23988,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (__23975,c__23635__auto___23988,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async){
return (function (state_23855){
var state_val_23856 = (state_23855[(1)]);
if((state_val_23856 === (1))){
var state_23855__$1 = state_23855;
var statearr_23857_23989 = state_23855__$1;
(statearr_23857_23989[(2)] = null);

(statearr_23857_23989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (2))){
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23855__$1,(4),jobs);
} else {
if((state_val_23856 === (3))){
var inst_23853 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23855__$1,inst_23853);
} else {
if((state_val_23856 === (4))){
var inst_23845 = (state_23855[(2)]);
var inst_23846 = async.call(null,inst_23845);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23846)){
var statearr_23858_23990 = state_23855__$1;
(statearr_23858_23990[(1)] = (5));

} else {
var statearr_23859_23991 = state_23855__$1;
(statearr_23859_23991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (5))){
var state_23855__$1 = state_23855;
var statearr_23860_23992 = state_23855__$1;
(statearr_23860_23992[(2)] = null);

(statearr_23860_23992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (6))){
var state_23855__$1 = state_23855;
var statearr_23861_23993 = state_23855__$1;
(statearr_23861_23993[(2)] = null);

(statearr_23861_23993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (7))){
var inst_23851 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23862_23994 = state_23855__$1;
(statearr_23862_23994[(2)] = inst_23851);

(statearr_23862_23994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23975,c__23635__auto___23988,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async))
;
return ((function (__23975,switch__23540__auto__,c__23635__auto___23988,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0 = (function (){
var statearr_23863 = [null,null,null,null,null,null,null];
(statearr_23863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__);

(statearr_23863[(1)] = (1));

return statearr_23863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1 = (function (state_23855){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_23855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e23864){if((e23864 instanceof Object)){
var ex__23544__auto__ = e23864;
var statearr_23865_23995 = state_23855;
(statearr_23865_23995[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23996 = state_23855;
state_23855 = G__23996;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = function(state_23855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1.call(this,state_23855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__;
})()
;})(__23975,switch__23540__auto__,c__23635__auto___23988,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async))
})();
var state__23637__auto__ = (function (){var statearr_23866 = f__23636__auto__.call(null);
(statearr_23866[(6)] = c__23635__auto___23988);

return statearr_23866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(__23975,c__23635__auto___23988,G__23818_23976,G__23818_23977__$1,n__4607__auto___23974,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23818_23977__$1)].join('')));

}

var G__23997 = (__23975 + (1));
__23975 = G__23997;
continue;
} else {
}
break;
}

var c__23635__auto___23998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___23998,jobs,results,process,async){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___23998,jobs,results,process,async){
return (function (state_23888){
var state_val_23889 = (state_23888[(1)]);
if((state_val_23889 === (7))){
var inst_23884 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
var statearr_23890_23999 = state_23888__$1;
(statearr_23890_23999[(2)] = inst_23884);

(statearr_23890_23999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (1))){
var state_23888__$1 = state_23888;
var statearr_23891_24000 = state_23888__$1;
(statearr_23891_24000[(2)] = null);

(statearr_23891_24000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (4))){
var inst_23869 = (state_23888[(7)]);
var inst_23869__$1 = (state_23888[(2)]);
var inst_23870 = (inst_23869__$1 == null);
var state_23888__$1 = (function (){var statearr_23892 = state_23888;
(statearr_23892[(7)] = inst_23869__$1);

return statearr_23892;
})();
if(cljs.core.truth_(inst_23870)){
var statearr_23893_24001 = state_23888__$1;
(statearr_23893_24001[(1)] = (5));

} else {
var statearr_23894_24002 = state_23888__$1;
(statearr_23894_24002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (6))){
var inst_23869 = (state_23888[(7)]);
var inst_23874 = (state_23888[(8)]);
var inst_23874__$1 = cljs.core.async.chan.call(null,(1));
var inst_23875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23876 = [inst_23869,inst_23874__$1];
var inst_23877 = (new cljs.core.PersistentVector(null,2,(5),inst_23875,inst_23876,null));
var state_23888__$1 = (function (){var statearr_23895 = state_23888;
(statearr_23895[(8)] = inst_23874__$1);

return statearr_23895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23888__$1,(8),jobs,inst_23877);
} else {
if((state_val_23889 === (3))){
var inst_23886 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23888__$1,inst_23886);
} else {
if((state_val_23889 === (2))){
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23888__$1,(4),from);
} else {
if((state_val_23889 === (9))){
var inst_23881 = (state_23888[(2)]);
var state_23888__$1 = (function (){var statearr_23896 = state_23888;
(statearr_23896[(9)] = inst_23881);

return statearr_23896;
})();
var statearr_23897_24003 = state_23888__$1;
(statearr_23897_24003[(2)] = null);

(statearr_23897_24003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (5))){
var inst_23872 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23888__$1 = state_23888;
var statearr_23898_24004 = state_23888__$1;
(statearr_23898_24004[(2)] = inst_23872);

(statearr_23898_24004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (8))){
var inst_23874 = (state_23888[(8)]);
var inst_23879 = (state_23888[(2)]);
var state_23888__$1 = (function (){var statearr_23899 = state_23888;
(statearr_23899[(10)] = inst_23879);

return statearr_23899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23888__$1,(9),results,inst_23874);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___23998,jobs,results,process,async))
;
return ((function (switch__23540__auto__,c__23635__auto___23998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0 = (function (){
var statearr_23900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__);

(statearr_23900[(1)] = (1));

return statearr_23900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1 = (function (state_23888){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_23888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e23901){if((e23901 instanceof Object)){
var ex__23544__auto__ = e23901;
var statearr_23902_24005 = state_23888;
(statearr_23902_24005[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24006 = state_23888;
state_23888 = G__24006;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = function(state_23888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1.call(this,state_23888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___23998,jobs,results,process,async))
})();
var state__23637__auto__ = (function (){var statearr_23903 = f__23636__auto__.call(null);
(statearr_23903[(6)] = c__23635__auto___23998);

return statearr_23903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___23998,jobs,results,process,async))
);


var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__,jobs,results,process,async){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__,jobs,results,process,async){
return (function (state_23941){
var state_val_23942 = (state_23941[(1)]);
if((state_val_23942 === (7))){
var inst_23937 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23943_24007 = state_23941__$1;
(statearr_23943_24007[(2)] = inst_23937);

(statearr_23943_24007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (20))){
var state_23941__$1 = state_23941;
var statearr_23944_24008 = state_23941__$1;
(statearr_23944_24008[(2)] = null);

(statearr_23944_24008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (1))){
var state_23941__$1 = state_23941;
var statearr_23945_24009 = state_23941__$1;
(statearr_23945_24009[(2)] = null);

(statearr_23945_24009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (4))){
var inst_23906 = (state_23941[(7)]);
var inst_23906__$1 = (state_23941[(2)]);
var inst_23907 = (inst_23906__$1 == null);
var state_23941__$1 = (function (){var statearr_23946 = state_23941;
(statearr_23946[(7)] = inst_23906__$1);

return statearr_23946;
})();
if(cljs.core.truth_(inst_23907)){
var statearr_23947_24010 = state_23941__$1;
(statearr_23947_24010[(1)] = (5));

} else {
var statearr_23948_24011 = state_23941__$1;
(statearr_23948_24011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (15))){
var inst_23919 = (state_23941[(8)]);
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23941__$1,(18),to,inst_23919);
} else {
if((state_val_23942 === (21))){
var inst_23932 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23949_24012 = state_23941__$1;
(statearr_23949_24012[(2)] = inst_23932);

(statearr_23949_24012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (13))){
var inst_23934 = (state_23941[(2)]);
var state_23941__$1 = (function (){var statearr_23950 = state_23941;
(statearr_23950[(9)] = inst_23934);

return statearr_23950;
})();
var statearr_23951_24013 = state_23941__$1;
(statearr_23951_24013[(2)] = null);

(statearr_23951_24013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (6))){
var inst_23906 = (state_23941[(7)]);
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23941__$1,(11),inst_23906);
} else {
if((state_val_23942 === (17))){
var inst_23927 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
if(cljs.core.truth_(inst_23927)){
var statearr_23952_24014 = state_23941__$1;
(statearr_23952_24014[(1)] = (19));

} else {
var statearr_23953_24015 = state_23941__$1;
(statearr_23953_24015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (3))){
var inst_23939 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23941__$1,inst_23939);
} else {
if((state_val_23942 === (12))){
var inst_23916 = (state_23941[(10)]);
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23941__$1,(14),inst_23916);
} else {
if((state_val_23942 === (2))){
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23941__$1,(4),results);
} else {
if((state_val_23942 === (19))){
var state_23941__$1 = state_23941;
var statearr_23954_24016 = state_23941__$1;
(statearr_23954_24016[(2)] = null);

(statearr_23954_24016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (11))){
var inst_23916 = (state_23941[(2)]);
var state_23941__$1 = (function (){var statearr_23955 = state_23941;
(statearr_23955[(10)] = inst_23916);

return statearr_23955;
})();
var statearr_23956_24017 = state_23941__$1;
(statearr_23956_24017[(2)] = null);

(statearr_23956_24017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (9))){
var state_23941__$1 = state_23941;
var statearr_23957_24018 = state_23941__$1;
(statearr_23957_24018[(2)] = null);

(statearr_23957_24018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (5))){
var state_23941__$1 = state_23941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23958_24019 = state_23941__$1;
(statearr_23958_24019[(1)] = (8));

} else {
var statearr_23959_24020 = state_23941__$1;
(statearr_23959_24020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (14))){
var inst_23919 = (state_23941[(8)]);
var inst_23921 = (state_23941[(11)]);
var inst_23919__$1 = (state_23941[(2)]);
var inst_23920 = (inst_23919__$1 == null);
var inst_23921__$1 = cljs.core.not.call(null,inst_23920);
var state_23941__$1 = (function (){var statearr_23960 = state_23941;
(statearr_23960[(8)] = inst_23919__$1);

(statearr_23960[(11)] = inst_23921__$1);

return statearr_23960;
})();
if(inst_23921__$1){
var statearr_23961_24021 = state_23941__$1;
(statearr_23961_24021[(1)] = (15));

} else {
var statearr_23962_24022 = state_23941__$1;
(statearr_23962_24022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (16))){
var inst_23921 = (state_23941[(11)]);
var state_23941__$1 = state_23941;
var statearr_23963_24023 = state_23941__$1;
(statearr_23963_24023[(2)] = inst_23921);

(statearr_23963_24023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (10))){
var inst_23913 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23964_24024 = state_23941__$1;
(statearr_23964_24024[(2)] = inst_23913);

(statearr_23964_24024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (18))){
var inst_23924 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23965_24025 = state_23941__$1;
(statearr_23965_24025[(2)] = inst_23924);

(statearr_23965_24025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (8))){
var inst_23910 = cljs.core.async.close_BANG_.call(null,to);
var state_23941__$1 = state_23941;
var statearr_23966_24026 = state_23941__$1;
(statearr_23966_24026[(2)] = inst_23910);

(statearr_23966_24026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto__,jobs,results,process,async))
;
return ((function (switch__23540__auto__,c__23635__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1 = (function (state_23941){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_23941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object)){
var ex__23544__auto__ = e23968;
var statearr_23969_24027 = state_23941;
(statearr_23969_24027[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24028 = state_23941;
state_23941 = G__24028;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__ = function(state_23941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1.call(this,state_23941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__,jobs,results,process,async))
})();
var state__23637__auto__ = (function (){var statearr_23970 = f__23636__auto__.call(null);
(statearr_23970[(6)] = c__23635__auto__);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__,jobs,results,process,async))
);

return c__23635__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24030 = arguments.length;
switch (G__24030) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24033 = arguments.length;
switch (G__24033) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24036 = arguments.length;
switch (G__24036) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23635__auto___24085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___24085,tc,fc){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___24085,tc,fc){
return (function (state_24062){
var state_val_24063 = (state_24062[(1)]);
if((state_val_24063 === (7))){
var inst_24058 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
var statearr_24064_24086 = state_24062__$1;
(statearr_24064_24086[(2)] = inst_24058);

(statearr_24064_24086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (1))){
var state_24062__$1 = state_24062;
var statearr_24065_24087 = state_24062__$1;
(statearr_24065_24087[(2)] = null);

(statearr_24065_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (4))){
var inst_24039 = (state_24062[(7)]);
var inst_24039__$1 = (state_24062[(2)]);
var inst_24040 = (inst_24039__$1 == null);
var state_24062__$1 = (function (){var statearr_24066 = state_24062;
(statearr_24066[(7)] = inst_24039__$1);

return statearr_24066;
})();
if(cljs.core.truth_(inst_24040)){
var statearr_24067_24088 = state_24062__$1;
(statearr_24067_24088[(1)] = (5));

} else {
var statearr_24068_24089 = state_24062__$1;
(statearr_24068_24089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (13))){
var state_24062__$1 = state_24062;
var statearr_24069_24090 = state_24062__$1;
(statearr_24069_24090[(2)] = null);

(statearr_24069_24090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (6))){
var inst_24039 = (state_24062[(7)]);
var inst_24045 = p.call(null,inst_24039);
var state_24062__$1 = state_24062;
if(cljs.core.truth_(inst_24045)){
var statearr_24070_24091 = state_24062__$1;
(statearr_24070_24091[(1)] = (9));

} else {
var statearr_24071_24092 = state_24062__$1;
(statearr_24071_24092[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (3))){
var inst_24060 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24062__$1,inst_24060);
} else {
if((state_val_24063 === (12))){
var state_24062__$1 = state_24062;
var statearr_24072_24093 = state_24062__$1;
(statearr_24072_24093[(2)] = null);

(statearr_24072_24093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (2))){
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24062__$1,(4),ch);
} else {
if((state_val_24063 === (11))){
var inst_24039 = (state_24062[(7)]);
var inst_24049 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24062__$1,(8),inst_24049,inst_24039);
} else {
if((state_val_24063 === (9))){
var state_24062__$1 = state_24062;
var statearr_24073_24094 = state_24062__$1;
(statearr_24073_24094[(2)] = tc);

(statearr_24073_24094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (5))){
var inst_24042 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24043 = cljs.core.async.close_BANG_.call(null,fc);
var state_24062__$1 = (function (){var statearr_24074 = state_24062;
(statearr_24074[(8)] = inst_24042);

return statearr_24074;
})();
var statearr_24075_24095 = state_24062__$1;
(statearr_24075_24095[(2)] = inst_24043);

(statearr_24075_24095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (14))){
var inst_24056 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
var statearr_24076_24096 = state_24062__$1;
(statearr_24076_24096[(2)] = inst_24056);

(statearr_24076_24096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (10))){
var state_24062__$1 = state_24062;
var statearr_24077_24097 = state_24062__$1;
(statearr_24077_24097[(2)] = fc);

(statearr_24077_24097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (8))){
var inst_24051 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
if(cljs.core.truth_(inst_24051)){
var statearr_24078_24098 = state_24062__$1;
(statearr_24078_24098[(1)] = (12));

} else {
var statearr_24079_24099 = state_24062__$1;
(statearr_24079_24099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___24085,tc,fc))
;
return ((function (switch__23540__auto__,c__23635__auto___24085,tc,fc){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_24080 = [null,null,null,null,null,null,null,null,null];
(statearr_24080[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_24080[(1)] = (1));

return statearr_24080;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_24062){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24081){if((e24081 instanceof Object)){
var ex__23544__auto__ = e24081;
var statearr_24082_24100 = state_24062;
(statearr_24082_24100[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24101 = state_24062;
state_24062 = G__24101;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_24062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_24062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___24085,tc,fc))
})();
var state__23637__auto__ = (function (){var statearr_24083 = f__23636__auto__.call(null);
(statearr_24083[(6)] = c__23635__auto___24085);

return statearr_24083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___24085,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__){
return (function (state_24122){
var state_val_24123 = (state_24122[(1)]);
if((state_val_24123 === (7))){
var inst_24118 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24124_24142 = state_24122__$1;
(statearr_24124_24142[(2)] = inst_24118);

(statearr_24124_24142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (1))){
var inst_24102 = init;
var state_24122__$1 = (function (){var statearr_24125 = state_24122;
(statearr_24125[(7)] = inst_24102);

return statearr_24125;
})();
var statearr_24126_24143 = state_24122__$1;
(statearr_24126_24143[(2)] = null);

(statearr_24126_24143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (4))){
var inst_24105 = (state_24122[(8)]);
var inst_24105__$1 = (state_24122[(2)]);
var inst_24106 = (inst_24105__$1 == null);
var state_24122__$1 = (function (){var statearr_24127 = state_24122;
(statearr_24127[(8)] = inst_24105__$1);

return statearr_24127;
})();
if(cljs.core.truth_(inst_24106)){
var statearr_24128_24144 = state_24122__$1;
(statearr_24128_24144[(1)] = (5));

} else {
var statearr_24129_24145 = state_24122__$1;
(statearr_24129_24145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (6))){
var inst_24105 = (state_24122[(8)]);
var inst_24109 = (state_24122[(9)]);
var inst_24102 = (state_24122[(7)]);
var inst_24109__$1 = f.call(null,inst_24102,inst_24105);
var inst_24110 = cljs.core.reduced_QMARK_.call(null,inst_24109__$1);
var state_24122__$1 = (function (){var statearr_24130 = state_24122;
(statearr_24130[(9)] = inst_24109__$1);

return statearr_24130;
})();
if(inst_24110){
var statearr_24131_24146 = state_24122__$1;
(statearr_24131_24146[(1)] = (8));

} else {
var statearr_24132_24147 = state_24122__$1;
(statearr_24132_24147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (3))){
var inst_24120 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24122__$1,inst_24120);
} else {
if((state_val_24123 === (2))){
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24122__$1,(4),ch);
} else {
if((state_val_24123 === (9))){
var inst_24109 = (state_24122[(9)]);
var inst_24102 = inst_24109;
var state_24122__$1 = (function (){var statearr_24133 = state_24122;
(statearr_24133[(7)] = inst_24102);

return statearr_24133;
})();
var statearr_24134_24148 = state_24122__$1;
(statearr_24134_24148[(2)] = null);

(statearr_24134_24148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (5))){
var inst_24102 = (state_24122[(7)]);
var state_24122__$1 = state_24122;
var statearr_24135_24149 = state_24122__$1;
(statearr_24135_24149[(2)] = inst_24102);

(statearr_24135_24149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (10))){
var inst_24116 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24136_24150 = state_24122__$1;
(statearr_24136_24150[(2)] = inst_24116);

(statearr_24136_24150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (8))){
var inst_24109 = (state_24122[(9)]);
var inst_24112 = cljs.core.deref.call(null,inst_24109);
var state_24122__$1 = state_24122;
var statearr_24137_24151 = state_24122__$1;
(statearr_24137_24151[(2)] = inst_24112);

(statearr_24137_24151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto__))
;
return ((function (switch__23540__auto__,c__23635__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23541__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23541__auto____0 = (function (){
var statearr_24138 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24138[(0)] = cljs$core$async$reduce_$_state_machine__23541__auto__);

(statearr_24138[(1)] = (1));

return statearr_24138;
});
var cljs$core$async$reduce_$_state_machine__23541__auto____1 = (function (state_24122){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24139){if((e24139 instanceof Object)){
var ex__23544__auto__ = e24139;
var statearr_24140_24152 = state_24122;
(statearr_24140_24152[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24153 = state_24122;
state_24122 = G__24153;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23541__auto__ = function(state_24122){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23541__auto____1.call(this,state_24122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23541__auto____0;
cljs$core$async$reduce_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23541__auto____1;
return cljs$core$async$reduce_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__))
})();
var state__23637__auto__ = (function (){var statearr_24141 = f__23636__auto__.call(null);
(statearr_24141[(6)] = c__23635__auto__);

return statearr_24141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__))
);

return c__23635__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__,f__$1){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__,f__$1){
return (function (state_24159){
var state_val_24160 = (state_24159[(1)]);
if((state_val_24160 === (1))){
var inst_24154 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24159__$1 = state_24159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24159__$1,(2),inst_24154);
} else {
if((state_val_24160 === (2))){
var inst_24156 = (state_24159[(2)]);
var inst_24157 = f__$1.call(null,inst_24156);
var state_24159__$1 = state_24159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24159__$1,inst_24157);
} else {
return null;
}
}
});})(c__23635__auto__,f__$1))
;
return ((function (switch__23540__auto__,c__23635__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23541__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23541__auto____0 = (function (){
var statearr_24161 = [null,null,null,null,null,null,null];
(statearr_24161[(0)] = cljs$core$async$transduce_$_state_machine__23541__auto__);

(statearr_24161[(1)] = (1));

return statearr_24161;
});
var cljs$core$async$transduce_$_state_machine__23541__auto____1 = (function (state_24159){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24162){if((e24162 instanceof Object)){
var ex__23544__auto__ = e24162;
var statearr_24163_24165 = state_24159;
(statearr_24163_24165[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24166 = state_24159;
state_24159 = G__24166;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23541__auto__ = function(state_24159){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23541__auto____1.call(this,state_24159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23541__auto____0;
cljs$core$async$transduce_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23541__auto____1;
return cljs$core$async$transduce_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__,f__$1))
})();
var state__23637__auto__ = (function (){var statearr_24164 = f__23636__auto__.call(null);
(statearr_24164[(6)] = c__23635__auto__);

return statearr_24164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__,f__$1))
);

return c__23635__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24168 = arguments.length;
switch (G__24168) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__){
return (function (state_24193){
var state_val_24194 = (state_24193[(1)]);
if((state_val_24194 === (7))){
var inst_24175 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24195_24216 = state_24193__$1;
(statearr_24195_24216[(2)] = inst_24175);

(statearr_24195_24216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (1))){
var inst_24169 = cljs.core.seq.call(null,coll);
var inst_24170 = inst_24169;
var state_24193__$1 = (function (){var statearr_24196 = state_24193;
(statearr_24196[(7)] = inst_24170);

return statearr_24196;
})();
var statearr_24197_24217 = state_24193__$1;
(statearr_24197_24217[(2)] = null);

(statearr_24197_24217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (4))){
var inst_24170 = (state_24193[(7)]);
var inst_24173 = cljs.core.first.call(null,inst_24170);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24193__$1,(7),ch,inst_24173);
} else {
if((state_val_24194 === (13))){
var inst_24187 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24198_24218 = state_24193__$1;
(statearr_24198_24218[(2)] = inst_24187);

(statearr_24198_24218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (6))){
var inst_24178 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24178)){
var statearr_24199_24219 = state_24193__$1;
(statearr_24199_24219[(1)] = (8));

} else {
var statearr_24200_24220 = state_24193__$1;
(statearr_24200_24220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (3))){
var inst_24191 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24193__$1,inst_24191);
} else {
if((state_val_24194 === (12))){
var state_24193__$1 = state_24193;
var statearr_24201_24221 = state_24193__$1;
(statearr_24201_24221[(2)] = null);

(statearr_24201_24221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (2))){
var inst_24170 = (state_24193[(7)]);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24170)){
var statearr_24202_24222 = state_24193__$1;
(statearr_24202_24222[(1)] = (4));

} else {
var statearr_24203_24223 = state_24193__$1;
(statearr_24203_24223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (11))){
var inst_24184 = cljs.core.async.close_BANG_.call(null,ch);
var state_24193__$1 = state_24193;
var statearr_24204_24224 = state_24193__$1;
(statearr_24204_24224[(2)] = inst_24184);

(statearr_24204_24224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (9))){
var state_24193__$1 = state_24193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24205_24225 = state_24193__$1;
(statearr_24205_24225[(1)] = (11));

} else {
var statearr_24206_24226 = state_24193__$1;
(statearr_24206_24226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (5))){
var inst_24170 = (state_24193[(7)]);
var state_24193__$1 = state_24193;
var statearr_24207_24227 = state_24193__$1;
(statearr_24207_24227[(2)] = inst_24170);

(statearr_24207_24227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (10))){
var inst_24189 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24208_24228 = state_24193__$1;
(statearr_24208_24228[(2)] = inst_24189);

(statearr_24208_24228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (8))){
var inst_24170 = (state_24193[(7)]);
var inst_24180 = cljs.core.next.call(null,inst_24170);
var inst_24170__$1 = inst_24180;
var state_24193__$1 = (function (){var statearr_24209 = state_24193;
(statearr_24209[(7)] = inst_24170__$1);

return statearr_24209;
})();
var statearr_24210_24229 = state_24193__$1;
(statearr_24210_24229[(2)] = null);

(statearr_24210_24229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto__))
;
return ((function (switch__23540__auto__,c__23635__auto__){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null,null];
(statearr_24211[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_24193){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object)){
var ex__23544__auto__ = e24212;
var statearr_24213_24230 = state_24193;
(statearr_24213_24230[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24231 = state_24193;
state_24193 = G__24231;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_24193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_24193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__))
})();
var state__23637__auto__ = (function (){var statearr_24214 = f__23636__auto__.call(null);
(statearr_24214[(6)] = c__23635__auto__);

return statearr_24214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__))
);

return c__23635__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24232 = (function (ch,cs,meta24233){
this.ch = ch;
this.cs = cs;
this.meta24233 = meta24233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24234,meta24233__$1){
var self__ = this;
var _24234__$1 = this;
return (new cljs.core.async.t_cljs$core$async24232(self__.ch,self__.cs,meta24233__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24234){
var self__ = this;
var _24234__$1 = this;
return self__.meta24233;
});})(cs))
;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24232.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24233","meta24233",987630682,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24232";

cljs.core.async.t_cljs$core$async24232.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24232");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24232.
 */
cljs.core.async.__GT_t_cljs$core$async24232 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24232(ch__$1,cs__$1,meta24233){
return (new cljs.core.async.t_cljs$core$async24232(ch__$1,cs__$1,meta24233));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24232(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23635__auto___24454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___24454,cs,m,dchan,dctr,done){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___24454,cs,m,dchan,dctr,done){
return (function (state_24369){
var state_val_24370 = (state_24369[(1)]);
if((state_val_24370 === (7))){
var inst_24365 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24371_24455 = state_24369__$1;
(statearr_24371_24455[(2)] = inst_24365);

(statearr_24371_24455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (20))){
var inst_24268 = (state_24369[(7)]);
var inst_24280 = cljs.core.first.call(null,inst_24268);
var inst_24281 = cljs.core.nth.call(null,inst_24280,(0),null);
var inst_24282 = cljs.core.nth.call(null,inst_24280,(1),null);
var state_24369__$1 = (function (){var statearr_24372 = state_24369;
(statearr_24372[(8)] = inst_24281);

return statearr_24372;
})();
if(cljs.core.truth_(inst_24282)){
var statearr_24373_24456 = state_24369__$1;
(statearr_24373_24456[(1)] = (22));

} else {
var statearr_24374_24457 = state_24369__$1;
(statearr_24374_24457[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (27))){
var inst_24317 = (state_24369[(9)]);
var inst_24237 = (state_24369[(10)]);
var inst_24312 = (state_24369[(11)]);
var inst_24310 = (state_24369[(12)]);
var inst_24317__$1 = cljs.core._nth.call(null,inst_24310,inst_24312);
var inst_24318 = cljs.core.async.put_BANG_.call(null,inst_24317__$1,inst_24237,done);
var state_24369__$1 = (function (){var statearr_24375 = state_24369;
(statearr_24375[(9)] = inst_24317__$1);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24318)){
var statearr_24376_24458 = state_24369__$1;
(statearr_24376_24458[(1)] = (30));

} else {
var statearr_24377_24459 = state_24369__$1;
(statearr_24377_24459[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (1))){
var state_24369__$1 = state_24369;
var statearr_24378_24460 = state_24369__$1;
(statearr_24378_24460[(2)] = null);

(statearr_24378_24460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (24))){
var inst_24268 = (state_24369[(7)]);
var inst_24287 = (state_24369[(2)]);
var inst_24288 = cljs.core.next.call(null,inst_24268);
var inst_24246 = inst_24288;
var inst_24247 = null;
var inst_24248 = (0);
var inst_24249 = (0);
var state_24369__$1 = (function (){var statearr_24379 = state_24369;
(statearr_24379[(13)] = inst_24248);

(statearr_24379[(14)] = inst_24287);

(statearr_24379[(15)] = inst_24247);

(statearr_24379[(16)] = inst_24249);

(statearr_24379[(17)] = inst_24246);

return statearr_24379;
})();
var statearr_24380_24461 = state_24369__$1;
(statearr_24380_24461[(2)] = null);

(statearr_24380_24461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (39))){
var state_24369__$1 = state_24369;
var statearr_24384_24462 = state_24369__$1;
(statearr_24384_24462[(2)] = null);

(statearr_24384_24462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (4))){
var inst_24237 = (state_24369[(10)]);
var inst_24237__$1 = (state_24369[(2)]);
var inst_24238 = (inst_24237__$1 == null);
var state_24369__$1 = (function (){var statearr_24385 = state_24369;
(statearr_24385[(10)] = inst_24237__$1);

return statearr_24385;
})();
if(cljs.core.truth_(inst_24238)){
var statearr_24386_24463 = state_24369__$1;
(statearr_24386_24463[(1)] = (5));

} else {
var statearr_24387_24464 = state_24369__$1;
(statearr_24387_24464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (15))){
var inst_24248 = (state_24369[(13)]);
var inst_24247 = (state_24369[(15)]);
var inst_24249 = (state_24369[(16)]);
var inst_24246 = (state_24369[(17)]);
var inst_24264 = (state_24369[(2)]);
var inst_24265 = (inst_24249 + (1));
var tmp24381 = inst_24248;
var tmp24382 = inst_24247;
var tmp24383 = inst_24246;
var inst_24246__$1 = tmp24383;
var inst_24247__$1 = tmp24382;
var inst_24248__$1 = tmp24381;
var inst_24249__$1 = inst_24265;
var state_24369__$1 = (function (){var statearr_24388 = state_24369;
(statearr_24388[(13)] = inst_24248__$1);

(statearr_24388[(18)] = inst_24264);

(statearr_24388[(15)] = inst_24247__$1);

(statearr_24388[(16)] = inst_24249__$1);

(statearr_24388[(17)] = inst_24246__$1);

return statearr_24388;
})();
var statearr_24389_24465 = state_24369__$1;
(statearr_24389_24465[(2)] = null);

(statearr_24389_24465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (21))){
var inst_24291 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24393_24466 = state_24369__$1;
(statearr_24393_24466[(2)] = inst_24291);

(statearr_24393_24466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (31))){
var inst_24317 = (state_24369[(9)]);
var inst_24321 = done.call(null,null);
var inst_24322 = cljs.core.async.untap_STAR_.call(null,m,inst_24317);
var state_24369__$1 = (function (){var statearr_24394 = state_24369;
(statearr_24394[(19)] = inst_24321);

return statearr_24394;
})();
var statearr_24395_24467 = state_24369__$1;
(statearr_24395_24467[(2)] = inst_24322);

(statearr_24395_24467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (32))){
var inst_24311 = (state_24369[(20)]);
var inst_24312 = (state_24369[(11)]);
var inst_24309 = (state_24369[(21)]);
var inst_24310 = (state_24369[(12)]);
var inst_24324 = (state_24369[(2)]);
var inst_24325 = (inst_24312 + (1));
var tmp24390 = inst_24311;
var tmp24391 = inst_24309;
var tmp24392 = inst_24310;
var inst_24309__$1 = tmp24391;
var inst_24310__$1 = tmp24392;
var inst_24311__$1 = tmp24390;
var inst_24312__$1 = inst_24325;
var state_24369__$1 = (function (){var statearr_24396 = state_24369;
(statearr_24396[(22)] = inst_24324);

(statearr_24396[(20)] = inst_24311__$1);

(statearr_24396[(11)] = inst_24312__$1);

(statearr_24396[(21)] = inst_24309__$1);

(statearr_24396[(12)] = inst_24310__$1);

return statearr_24396;
})();
var statearr_24397_24468 = state_24369__$1;
(statearr_24397_24468[(2)] = null);

(statearr_24397_24468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (40))){
var inst_24337 = (state_24369[(23)]);
var inst_24341 = done.call(null,null);
var inst_24342 = cljs.core.async.untap_STAR_.call(null,m,inst_24337);
var state_24369__$1 = (function (){var statearr_24398 = state_24369;
(statearr_24398[(24)] = inst_24341);

return statearr_24398;
})();
var statearr_24399_24469 = state_24369__$1;
(statearr_24399_24469[(2)] = inst_24342);

(statearr_24399_24469[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (33))){
var inst_24328 = (state_24369[(25)]);
var inst_24330 = cljs.core.chunked_seq_QMARK_.call(null,inst_24328);
var state_24369__$1 = state_24369;
if(inst_24330){
var statearr_24400_24470 = state_24369__$1;
(statearr_24400_24470[(1)] = (36));

} else {
var statearr_24401_24471 = state_24369__$1;
(statearr_24401_24471[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (13))){
var inst_24258 = (state_24369[(26)]);
var inst_24261 = cljs.core.async.close_BANG_.call(null,inst_24258);
var state_24369__$1 = state_24369;
var statearr_24402_24472 = state_24369__$1;
(statearr_24402_24472[(2)] = inst_24261);

(statearr_24402_24472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (22))){
var inst_24281 = (state_24369[(8)]);
var inst_24284 = cljs.core.async.close_BANG_.call(null,inst_24281);
var state_24369__$1 = state_24369;
var statearr_24403_24473 = state_24369__$1;
(statearr_24403_24473[(2)] = inst_24284);

(statearr_24403_24473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (36))){
var inst_24328 = (state_24369[(25)]);
var inst_24332 = cljs.core.chunk_first.call(null,inst_24328);
var inst_24333 = cljs.core.chunk_rest.call(null,inst_24328);
var inst_24334 = cljs.core.count.call(null,inst_24332);
var inst_24309 = inst_24333;
var inst_24310 = inst_24332;
var inst_24311 = inst_24334;
var inst_24312 = (0);
var state_24369__$1 = (function (){var statearr_24404 = state_24369;
(statearr_24404[(20)] = inst_24311);

(statearr_24404[(11)] = inst_24312);

(statearr_24404[(21)] = inst_24309);

(statearr_24404[(12)] = inst_24310);

return statearr_24404;
})();
var statearr_24405_24474 = state_24369__$1;
(statearr_24405_24474[(2)] = null);

(statearr_24405_24474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (41))){
var inst_24328 = (state_24369[(25)]);
var inst_24344 = (state_24369[(2)]);
var inst_24345 = cljs.core.next.call(null,inst_24328);
var inst_24309 = inst_24345;
var inst_24310 = null;
var inst_24311 = (0);
var inst_24312 = (0);
var state_24369__$1 = (function (){var statearr_24406 = state_24369;
(statearr_24406[(27)] = inst_24344);

(statearr_24406[(20)] = inst_24311);

(statearr_24406[(11)] = inst_24312);

(statearr_24406[(21)] = inst_24309);

(statearr_24406[(12)] = inst_24310);

return statearr_24406;
})();
var statearr_24407_24475 = state_24369__$1;
(statearr_24407_24475[(2)] = null);

(statearr_24407_24475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (43))){
var state_24369__$1 = state_24369;
var statearr_24408_24476 = state_24369__$1;
(statearr_24408_24476[(2)] = null);

(statearr_24408_24476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (29))){
var inst_24353 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24409_24477 = state_24369__$1;
(statearr_24409_24477[(2)] = inst_24353);

(statearr_24409_24477[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (44))){
var inst_24362 = (state_24369[(2)]);
var state_24369__$1 = (function (){var statearr_24410 = state_24369;
(statearr_24410[(28)] = inst_24362);

return statearr_24410;
})();
var statearr_24411_24478 = state_24369__$1;
(statearr_24411_24478[(2)] = null);

(statearr_24411_24478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (6))){
var inst_24301 = (state_24369[(29)]);
var inst_24300 = cljs.core.deref.call(null,cs);
var inst_24301__$1 = cljs.core.keys.call(null,inst_24300);
var inst_24302 = cljs.core.count.call(null,inst_24301__$1);
var inst_24303 = cljs.core.reset_BANG_.call(null,dctr,inst_24302);
var inst_24308 = cljs.core.seq.call(null,inst_24301__$1);
var inst_24309 = inst_24308;
var inst_24310 = null;
var inst_24311 = (0);
var inst_24312 = (0);
var state_24369__$1 = (function (){var statearr_24412 = state_24369;
(statearr_24412[(30)] = inst_24303);

(statearr_24412[(29)] = inst_24301__$1);

(statearr_24412[(20)] = inst_24311);

(statearr_24412[(11)] = inst_24312);

(statearr_24412[(21)] = inst_24309);

(statearr_24412[(12)] = inst_24310);

return statearr_24412;
})();
var statearr_24413_24479 = state_24369__$1;
(statearr_24413_24479[(2)] = null);

(statearr_24413_24479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (28))){
var inst_24328 = (state_24369[(25)]);
var inst_24309 = (state_24369[(21)]);
var inst_24328__$1 = cljs.core.seq.call(null,inst_24309);
var state_24369__$1 = (function (){var statearr_24414 = state_24369;
(statearr_24414[(25)] = inst_24328__$1);

return statearr_24414;
})();
if(inst_24328__$1){
var statearr_24415_24480 = state_24369__$1;
(statearr_24415_24480[(1)] = (33));

} else {
var statearr_24416_24481 = state_24369__$1;
(statearr_24416_24481[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (25))){
var inst_24311 = (state_24369[(20)]);
var inst_24312 = (state_24369[(11)]);
var inst_24314 = (inst_24312 < inst_24311);
var inst_24315 = inst_24314;
var state_24369__$1 = state_24369;
if(cljs.core.truth_(inst_24315)){
var statearr_24417_24482 = state_24369__$1;
(statearr_24417_24482[(1)] = (27));

} else {
var statearr_24418_24483 = state_24369__$1;
(statearr_24418_24483[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (34))){
var state_24369__$1 = state_24369;
var statearr_24419_24484 = state_24369__$1;
(statearr_24419_24484[(2)] = null);

(statearr_24419_24484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (17))){
var state_24369__$1 = state_24369;
var statearr_24420_24485 = state_24369__$1;
(statearr_24420_24485[(2)] = null);

(statearr_24420_24485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (3))){
var inst_24367 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24369__$1,inst_24367);
} else {
if((state_val_24370 === (12))){
var inst_24296 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24421_24486 = state_24369__$1;
(statearr_24421_24486[(2)] = inst_24296);

(statearr_24421_24486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (2))){
var state_24369__$1 = state_24369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24369__$1,(4),ch);
} else {
if((state_val_24370 === (23))){
var state_24369__$1 = state_24369;
var statearr_24422_24487 = state_24369__$1;
(statearr_24422_24487[(2)] = null);

(statearr_24422_24487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (35))){
var inst_24351 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24423_24488 = state_24369__$1;
(statearr_24423_24488[(2)] = inst_24351);

(statearr_24423_24488[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (19))){
var inst_24268 = (state_24369[(7)]);
var inst_24272 = cljs.core.chunk_first.call(null,inst_24268);
var inst_24273 = cljs.core.chunk_rest.call(null,inst_24268);
var inst_24274 = cljs.core.count.call(null,inst_24272);
var inst_24246 = inst_24273;
var inst_24247 = inst_24272;
var inst_24248 = inst_24274;
var inst_24249 = (0);
var state_24369__$1 = (function (){var statearr_24424 = state_24369;
(statearr_24424[(13)] = inst_24248);

(statearr_24424[(15)] = inst_24247);

(statearr_24424[(16)] = inst_24249);

(statearr_24424[(17)] = inst_24246);

return statearr_24424;
})();
var statearr_24425_24489 = state_24369__$1;
(statearr_24425_24489[(2)] = null);

(statearr_24425_24489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (11))){
var inst_24268 = (state_24369[(7)]);
var inst_24246 = (state_24369[(17)]);
var inst_24268__$1 = cljs.core.seq.call(null,inst_24246);
var state_24369__$1 = (function (){var statearr_24426 = state_24369;
(statearr_24426[(7)] = inst_24268__$1);

return statearr_24426;
})();
if(inst_24268__$1){
var statearr_24427_24490 = state_24369__$1;
(statearr_24427_24490[(1)] = (16));

} else {
var statearr_24428_24491 = state_24369__$1;
(statearr_24428_24491[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (9))){
var inst_24298 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24429_24492 = state_24369__$1;
(statearr_24429_24492[(2)] = inst_24298);

(statearr_24429_24492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (5))){
var inst_24244 = cljs.core.deref.call(null,cs);
var inst_24245 = cljs.core.seq.call(null,inst_24244);
var inst_24246 = inst_24245;
var inst_24247 = null;
var inst_24248 = (0);
var inst_24249 = (0);
var state_24369__$1 = (function (){var statearr_24430 = state_24369;
(statearr_24430[(13)] = inst_24248);

(statearr_24430[(15)] = inst_24247);

(statearr_24430[(16)] = inst_24249);

(statearr_24430[(17)] = inst_24246);

return statearr_24430;
})();
var statearr_24431_24493 = state_24369__$1;
(statearr_24431_24493[(2)] = null);

(statearr_24431_24493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (14))){
var state_24369__$1 = state_24369;
var statearr_24432_24494 = state_24369__$1;
(statearr_24432_24494[(2)] = null);

(statearr_24432_24494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (45))){
var inst_24359 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24433_24495 = state_24369__$1;
(statearr_24433_24495[(2)] = inst_24359);

(statearr_24433_24495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (26))){
var inst_24301 = (state_24369[(29)]);
var inst_24355 = (state_24369[(2)]);
var inst_24356 = cljs.core.seq.call(null,inst_24301);
var state_24369__$1 = (function (){var statearr_24434 = state_24369;
(statearr_24434[(31)] = inst_24355);

return statearr_24434;
})();
if(inst_24356){
var statearr_24435_24496 = state_24369__$1;
(statearr_24435_24496[(1)] = (42));

} else {
var statearr_24436_24497 = state_24369__$1;
(statearr_24436_24497[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (16))){
var inst_24268 = (state_24369[(7)]);
var inst_24270 = cljs.core.chunked_seq_QMARK_.call(null,inst_24268);
var state_24369__$1 = state_24369;
if(inst_24270){
var statearr_24437_24498 = state_24369__$1;
(statearr_24437_24498[(1)] = (19));

} else {
var statearr_24438_24499 = state_24369__$1;
(statearr_24438_24499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (38))){
var inst_24348 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24439_24500 = state_24369__$1;
(statearr_24439_24500[(2)] = inst_24348);

(statearr_24439_24500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (30))){
var state_24369__$1 = state_24369;
var statearr_24440_24501 = state_24369__$1;
(statearr_24440_24501[(2)] = null);

(statearr_24440_24501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (10))){
var inst_24247 = (state_24369[(15)]);
var inst_24249 = (state_24369[(16)]);
var inst_24257 = cljs.core._nth.call(null,inst_24247,inst_24249);
var inst_24258 = cljs.core.nth.call(null,inst_24257,(0),null);
var inst_24259 = cljs.core.nth.call(null,inst_24257,(1),null);
var state_24369__$1 = (function (){var statearr_24441 = state_24369;
(statearr_24441[(26)] = inst_24258);

return statearr_24441;
})();
if(cljs.core.truth_(inst_24259)){
var statearr_24442_24502 = state_24369__$1;
(statearr_24442_24502[(1)] = (13));

} else {
var statearr_24443_24503 = state_24369__$1;
(statearr_24443_24503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (18))){
var inst_24294 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24444_24504 = state_24369__$1;
(statearr_24444_24504[(2)] = inst_24294);

(statearr_24444_24504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (42))){
var state_24369__$1 = state_24369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24369__$1,(45),dchan);
} else {
if((state_val_24370 === (37))){
var inst_24337 = (state_24369[(23)]);
var inst_24328 = (state_24369[(25)]);
var inst_24237 = (state_24369[(10)]);
var inst_24337__$1 = cljs.core.first.call(null,inst_24328);
var inst_24338 = cljs.core.async.put_BANG_.call(null,inst_24337__$1,inst_24237,done);
var state_24369__$1 = (function (){var statearr_24445 = state_24369;
(statearr_24445[(23)] = inst_24337__$1);

return statearr_24445;
})();
if(cljs.core.truth_(inst_24338)){
var statearr_24446_24505 = state_24369__$1;
(statearr_24446_24505[(1)] = (39));

} else {
var statearr_24447_24506 = state_24369__$1;
(statearr_24447_24506[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (8))){
var inst_24248 = (state_24369[(13)]);
var inst_24249 = (state_24369[(16)]);
var inst_24251 = (inst_24249 < inst_24248);
var inst_24252 = inst_24251;
var state_24369__$1 = state_24369;
if(cljs.core.truth_(inst_24252)){
var statearr_24448_24507 = state_24369__$1;
(statearr_24448_24507[(1)] = (10));

} else {
var statearr_24449_24508 = state_24369__$1;
(statearr_24449_24508[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___24454,cs,m,dchan,dctr,done))
;
return ((function (switch__23540__auto__,c__23635__auto___24454,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23541__auto__ = null;
var cljs$core$async$mult_$_state_machine__23541__auto____0 = (function (){
var statearr_24450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24450[(0)] = cljs$core$async$mult_$_state_machine__23541__auto__);

(statearr_24450[(1)] = (1));

return statearr_24450;
});
var cljs$core$async$mult_$_state_machine__23541__auto____1 = (function (state_24369){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24451){if((e24451 instanceof Object)){
var ex__23544__auto__ = e24451;
var statearr_24452_24509 = state_24369;
(statearr_24452_24509[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24510 = state_24369;
state_24369 = G__24510;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23541__auto__ = function(state_24369){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23541__auto____1.call(this,state_24369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23541__auto____0;
cljs$core$async$mult_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23541__auto____1;
return cljs$core$async$mult_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___24454,cs,m,dchan,dctr,done))
})();
var state__23637__auto__ = (function (){var statearr_24453 = f__23636__auto__.call(null);
(statearr_24453[(6)] = c__23635__auto___24454);

return statearr_24453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___24454,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24512 = arguments.length;
switch (G__24512) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24524 = arguments.length;
var i__4731__auto___24525 = (0);
while(true){
if((i__4731__auto___24525 < len__4730__auto___24524)){
args__4736__auto__.push((arguments[i__4731__auto___24525]));

var G__24526 = (i__4731__auto___24525 + (1));
i__4731__auto___24525 = G__24526;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24518){
var map__24519 = p__24518;
var map__24519__$1 = (((((!((map__24519 == null))))?(((((map__24519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24519):map__24519);
var opts = map__24519__$1;
var statearr_24521_24527 = state;
(statearr_24521_24527[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24519,map__24519__$1,opts){
return (function (val){
var statearr_24522_24528 = state;
(statearr_24522_24528[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24519,map__24519__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24523_24529 = state;
(statearr_24523_24529[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24514){
var G__24515 = cljs.core.first.call(null,seq24514);
var seq24514__$1 = cljs.core.next.call(null,seq24514);
var G__24516 = cljs.core.first.call(null,seq24514__$1);
var seq24514__$2 = cljs.core.next.call(null,seq24514__$1);
var G__24517 = cljs.core.first.call(null,seq24514__$2);
var seq24514__$3 = cljs.core.next.call(null,seq24514__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24515,G__24516,G__24517,seq24514__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24530 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24531){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24531 = meta24531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24532,meta24531__$1){
var self__ = this;
var _24532__$1 = this;
return (new cljs.core.async.t_cljs$core$async24530(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24531__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24532){
var self__ = this;
var _24532__$1 = this;
return self__.meta24531;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24531","meta24531",-2074726868,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24530";

cljs.core.async.t_cljs$core$async24530.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24530");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24530.
 */
cljs.core.async.__GT_t_cljs$core$async24530 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24530(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24531){
return (new cljs.core.async.t_cljs$core$async24530(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24531));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24530(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23635__auto___24694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___24694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___24694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24634){
var state_val_24635 = (state_24634[(1)]);
if((state_val_24635 === (7))){
var inst_24549 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24636_24695 = state_24634__$1;
(statearr_24636_24695[(2)] = inst_24549);

(statearr_24636_24695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (20))){
var inst_24561 = (state_24634[(7)]);
var state_24634__$1 = state_24634;
var statearr_24637_24696 = state_24634__$1;
(statearr_24637_24696[(2)] = inst_24561);

(statearr_24637_24696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (27))){
var state_24634__$1 = state_24634;
var statearr_24638_24697 = state_24634__$1;
(statearr_24638_24697[(2)] = null);

(statearr_24638_24697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (1))){
var inst_24536 = (state_24634[(8)]);
var inst_24536__$1 = calc_state.call(null);
var inst_24538 = (inst_24536__$1 == null);
var inst_24539 = cljs.core.not.call(null,inst_24538);
var state_24634__$1 = (function (){var statearr_24639 = state_24634;
(statearr_24639[(8)] = inst_24536__$1);

return statearr_24639;
})();
if(inst_24539){
var statearr_24640_24698 = state_24634__$1;
(statearr_24640_24698[(1)] = (2));

} else {
var statearr_24641_24699 = state_24634__$1;
(statearr_24641_24699[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (24))){
var inst_24594 = (state_24634[(9)]);
var inst_24585 = (state_24634[(10)]);
var inst_24608 = (state_24634[(11)]);
var inst_24608__$1 = inst_24585.call(null,inst_24594);
var state_24634__$1 = (function (){var statearr_24642 = state_24634;
(statearr_24642[(11)] = inst_24608__$1);

return statearr_24642;
})();
if(cljs.core.truth_(inst_24608__$1)){
var statearr_24643_24700 = state_24634__$1;
(statearr_24643_24700[(1)] = (29));

} else {
var statearr_24644_24701 = state_24634__$1;
(statearr_24644_24701[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (4))){
var inst_24552 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24552)){
var statearr_24645_24702 = state_24634__$1;
(statearr_24645_24702[(1)] = (8));

} else {
var statearr_24646_24703 = state_24634__$1;
(statearr_24646_24703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (15))){
var inst_24579 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24579)){
var statearr_24647_24704 = state_24634__$1;
(statearr_24647_24704[(1)] = (19));

} else {
var statearr_24648_24705 = state_24634__$1;
(statearr_24648_24705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (21))){
var inst_24584 = (state_24634[(12)]);
var inst_24584__$1 = (state_24634[(2)]);
var inst_24585 = cljs.core.get.call(null,inst_24584__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24586 = cljs.core.get.call(null,inst_24584__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24587 = cljs.core.get.call(null,inst_24584__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24634__$1 = (function (){var statearr_24649 = state_24634;
(statearr_24649[(13)] = inst_24586);

(statearr_24649[(10)] = inst_24585);

(statearr_24649[(12)] = inst_24584__$1);

return statearr_24649;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24634__$1,(22),inst_24587);
} else {
if((state_val_24635 === (31))){
var inst_24616 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24616)){
var statearr_24650_24706 = state_24634__$1;
(statearr_24650_24706[(1)] = (32));

} else {
var statearr_24651_24707 = state_24634__$1;
(statearr_24651_24707[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (32))){
var inst_24593 = (state_24634[(14)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24634__$1,(35),out,inst_24593);
} else {
if((state_val_24635 === (33))){
var inst_24584 = (state_24634[(12)]);
var inst_24561 = inst_24584;
var state_24634__$1 = (function (){var statearr_24652 = state_24634;
(statearr_24652[(7)] = inst_24561);

return statearr_24652;
})();
var statearr_24653_24708 = state_24634__$1;
(statearr_24653_24708[(2)] = null);

(statearr_24653_24708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (13))){
var inst_24561 = (state_24634[(7)]);
var inst_24568 = inst_24561.cljs$lang$protocol_mask$partition0$;
var inst_24569 = (inst_24568 & (64));
var inst_24570 = inst_24561.cljs$core$ISeq$;
var inst_24571 = (cljs.core.PROTOCOL_SENTINEL === inst_24570);
var inst_24572 = ((inst_24569) || (inst_24571));
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24572)){
var statearr_24654_24709 = state_24634__$1;
(statearr_24654_24709[(1)] = (16));

} else {
var statearr_24655_24710 = state_24634__$1;
(statearr_24655_24710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (22))){
var inst_24594 = (state_24634[(9)]);
var inst_24593 = (state_24634[(14)]);
var inst_24592 = (state_24634[(2)]);
var inst_24593__$1 = cljs.core.nth.call(null,inst_24592,(0),null);
var inst_24594__$1 = cljs.core.nth.call(null,inst_24592,(1),null);
var inst_24595 = (inst_24593__$1 == null);
var inst_24596 = cljs.core._EQ_.call(null,inst_24594__$1,change);
var inst_24597 = ((inst_24595) || (inst_24596));
var state_24634__$1 = (function (){var statearr_24656 = state_24634;
(statearr_24656[(9)] = inst_24594__$1);

(statearr_24656[(14)] = inst_24593__$1);

return statearr_24656;
})();
if(cljs.core.truth_(inst_24597)){
var statearr_24657_24711 = state_24634__$1;
(statearr_24657_24711[(1)] = (23));

} else {
var statearr_24658_24712 = state_24634__$1;
(statearr_24658_24712[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (36))){
var inst_24584 = (state_24634[(12)]);
var inst_24561 = inst_24584;
var state_24634__$1 = (function (){var statearr_24659 = state_24634;
(statearr_24659[(7)] = inst_24561);

return statearr_24659;
})();
var statearr_24660_24713 = state_24634__$1;
(statearr_24660_24713[(2)] = null);

(statearr_24660_24713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (29))){
var inst_24608 = (state_24634[(11)]);
var state_24634__$1 = state_24634;
var statearr_24661_24714 = state_24634__$1;
(statearr_24661_24714[(2)] = inst_24608);

(statearr_24661_24714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (6))){
var state_24634__$1 = state_24634;
var statearr_24662_24715 = state_24634__$1;
(statearr_24662_24715[(2)] = false);

(statearr_24662_24715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (28))){
var inst_24604 = (state_24634[(2)]);
var inst_24605 = calc_state.call(null);
var inst_24561 = inst_24605;
var state_24634__$1 = (function (){var statearr_24663 = state_24634;
(statearr_24663[(15)] = inst_24604);

(statearr_24663[(7)] = inst_24561);

return statearr_24663;
})();
var statearr_24664_24716 = state_24634__$1;
(statearr_24664_24716[(2)] = null);

(statearr_24664_24716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (25))){
var inst_24630 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24665_24717 = state_24634__$1;
(statearr_24665_24717[(2)] = inst_24630);

(statearr_24665_24717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (34))){
var inst_24628 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24666_24718 = state_24634__$1;
(statearr_24666_24718[(2)] = inst_24628);

(statearr_24666_24718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (17))){
var state_24634__$1 = state_24634;
var statearr_24667_24719 = state_24634__$1;
(statearr_24667_24719[(2)] = false);

(statearr_24667_24719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (3))){
var state_24634__$1 = state_24634;
var statearr_24668_24720 = state_24634__$1;
(statearr_24668_24720[(2)] = false);

(statearr_24668_24720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (12))){
var inst_24632 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24634__$1,inst_24632);
} else {
if((state_val_24635 === (2))){
var inst_24536 = (state_24634[(8)]);
var inst_24541 = inst_24536.cljs$lang$protocol_mask$partition0$;
var inst_24542 = (inst_24541 & (64));
var inst_24543 = inst_24536.cljs$core$ISeq$;
var inst_24544 = (cljs.core.PROTOCOL_SENTINEL === inst_24543);
var inst_24545 = ((inst_24542) || (inst_24544));
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24545)){
var statearr_24669_24721 = state_24634__$1;
(statearr_24669_24721[(1)] = (5));

} else {
var statearr_24670_24722 = state_24634__$1;
(statearr_24670_24722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (23))){
var inst_24593 = (state_24634[(14)]);
var inst_24599 = (inst_24593 == null);
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24599)){
var statearr_24671_24723 = state_24634__$1;
(statearr_24671_24723[(1)] = (26));

} else {
var statearr_24672_24724 = state_24634__$1;
(statearr_24672_24724[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (35))){
var inst_24619 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
if(cljs.core.truth_(inst_24619)){
var statearr_24673_24725 = state_24634__$1;
(statearr_24673_24725[(1)] = (36));

} else {
var statearr_24674_24726 = state_24634__$1;
(statearr_24674_24726[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (19))){
var inst_24561 = (state_24634[(7)]);
var inst_24581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24561);
var state_24634__$1 = state_24634;
var statearr_24675_24727 = state_24634__$1;
(statearr_24675_24727[(2)] = inst_24581);

(statearr_24675_24727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (11))){
var inst_24561 = (state_24634[(7)]);
var inst_24565 = (inst_24561 == null);
var inst_24566 = cljs.core.not.call(null,inst_24565);
var state_24634__$1 = state_24634;
if(inst_24566){
var statearr_24676_24728 = state_24634__$1;
(statearr_24676_24728[(1)] = (13));

} else {
var statearr_24677_24729 = state_24634__$1;
(statearr_24677_24729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (9))){
var inst_24536 = (state_24634[(8)]);
var state_24634__$1 = state_24634;
var statearr_24678_24730 = state_24634__$1;
(statearr_24678_24730[(2)] = inst_24536);

(statearr_24678_24730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (5))){
var state_24634__$1 = state_24634;
var statearr_24679_24731 = state_24634__$1;
(statearr_24679_24731[(2)] = true);

(statearr_24679_24731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (14))){
var state_24634__$1 = state_24634;
var statearr_24680_24732 = state_24634__$1;
(statearr_24680_24732[(2)] = false);

(statearr_24680_24732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (26))){
var inst_24594 = (state_24634[(9)]);
var inst_24601 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24594);
var state_24634__$1 = state_24634;
var statearr_24681_24733 = state_24634__$1;
(statearr_24681_24733[(2)] = inst_24601);

(statearr_24681_24733[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (16))){
var state_24634__$1 = state_24634;
var statearr_24682_24734 = state_24634__$1;
(statearr_24682_24734[(2)] = true);

(statearr_24682_24734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (38))){
var inst_24624 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24683_24735 = state_24634__$1;
(statearr_24683_24735[(2)] = inst_24624);

(statearr_24683_24735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (30))){
var inst_24586 = (state_24634[(13)]);
var inst_24594 = (state_24634[(9)]);
var inst_24585 = (state_24634[(10)]);
var inst_24611 = cljs.core.empty_QMARK_.call(null,inst_24585);
var inst_24612 = inst_24586.call(null,inst_24594);
var inst_24613 = cljs.core.not.call(null,inst_24612);
var inst_24614 = ((inst_24611) && (inst_24613));
var state_24634__$1 = state_24634;
var statearr_24684_24736 = state_24634__$1;
(statearr_24684_24736[(2)] = inst_24614);

(statearr_24684_24736[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (10))){
var inst_24536 = (state_24634[(8)]);
var inst_24557 = (state_24634[(2)]);
var inst_24558 = cljs.core.get.call(null,inst_24557,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24559 = cljs.core.get.call(null,inst_24557,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24560 = cljs.core.get.call(null,inst_24557,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24561 = inst_24536;
var state_24634__$1 = (function (){var statearr_24685 = state_24634;
(statearr_24685[(16)] = inst_24558);

(statearr_24685[(17)] = inst_24560);

(statearr_24685[(18)] = inst_24559);

(statearr_24685[(7)] = inst_24561);

return statearr_24685;
})();
var statearr_24686_24737 = state_24634__$1;
(statearr_24686_24737[(2)] = null);

(statearr_24686_24737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (18))){
var inst_24576 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24687_24738 = state_24634__$1;
(statearr_24687_24738[(2)] = inst_24576);

(statearr_24687_24738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (37))){
var state_24634__$1 = state_24634;
var statearr_24688_24739 = state_24634__$1;
(statearr_24688_24739[(2)] = null);

(statearr_24688_24739[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24635 === (8))){
var inst_24536 = (state_24634[(8)]);
var inst_24554 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24536);
var state_24634__$1 = state_24634;
var statearr_24689_24740 = state_24634__$1;
(statearr_24689_24740[(2)] = inst_24554);

(statearr_24689_24740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___24694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23540__auto__,c__23635__auto___24694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23541__auto__ = null;
var cljs$core$async$mix_$_state_machine__23541__auto____0 = (function (){
var statearr_24690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24690[(0)] = cljs$core$async$mix_$_state_machine__23541__auto__);

(statearr_24690[(1)] = (1));

return statearr_24690;
});
var cljs$core$async$mix_$_state_machine__23541__auto____1 = (function (state_24634){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24691){if((e24691 instanceof Object)){
var ex__23544__auto__ = e24691;
var statearr_24692_24741 = state_24634;
(statearr_24692_24741[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24742 = state_24634;
state_24634 = G__24742;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23541__auto__ = function(state_24634){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23541__auto____1.call(this,state_24634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23541__auto____0;
cljs$core$async$mix_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23541__auto____1;
return cljs$core$async$mix_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___24694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23637__auto__ = (function (){var statearr_24693 = f__23636__auto__.call(null);
(statearr_24693[(6)] = c__23635__auto___24694);

return statearr_24693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___24694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24744 = arguments.length;
switch (G__24744) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24748 = arguments.length;
switch (G__24748) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24746_SHARP_){
if(cljs.core.truth_(p1__24746_SHARP_.call(null,topic))){
return p1__24746_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24746_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24749 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24750){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24750 = meta24750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24751,meta24750__$1){
var self__ = this;
var _24751__$1 = this;
return (new cljs.core.async.t_cljs$core$async24749(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24750__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24751){
var self__ = this;
var _24751__$1 = this;
return self__.meta24750;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24750","meta24750",1509229239,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24749";

cljs.core.async.t_cljs$core$async24749.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24749");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24749.
 */
cljs.core.async.__GT_t_cljs$core$async24749 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24750){
return (new cljs.core.async.t_cljs$core$async24749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24750));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24749(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23635__auto___24869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___24869,mults,ensure_mult,p){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___24869,mults,ensure_mult,p){
return (function (state_24823){
var state_val_24824 = (state_24823[(1)]);
if((state_val_24824 === (7))){
var inst_24819 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24825_24870 = state_24823__$1;
(statearr_24825_24870[(2)] = inst_24819);

(statearr_24825_24870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (20))){
var state_24823__$1 = state_24823;
var statearr_24826_24871 = state_24823__$1;
(statearr_24826_24871[(2)] = null);

(statearr_24826_24871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (1))){
var state_24823__$1 = state_24823;
var statearr_24827_24872 = state_24823__$1;
(statearr_24827_24872[(2)] = null);

(statearr_24827_24872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (24))){
var inst_24802 = (state_24823[(7)]);
var inst_24811 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24802);
var state_24823__$1 = state_24823;
var statearr_24828_24873 = state_24823__$1;
(statearr_24828_24873[(2)] = inst_24811);

(statearr_24828_24873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (4))){
var inst_24754 = (state_24823[(8)]);
var inst_24754__$1 = (state_24823[(2)]);
var inst_24755 = (inst_24754__$1 == null);
var state_24823__$1 = (function (){var statearr_24829 = state_24823;
(statearr_24829[(8)] = inst_24754__$1);

return statearr_24829;
})();
if(cljs.core.truth_(inst_24755)){
var statearr_24830_24874 = state_24823__$1;
(statearr_24830_24874[(1)] = (5));

} else {
var statearr_24831_24875 = state_24823__$1;
(statearr_24831_24875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (15))){
var inst_24796 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24832_24876 = state_24823__$1;
(statearr_24832_24876[(2)] = inst_24796);

(statearr_24832_24876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (21))){
var inst_24816 = (state_24823[(2)]);
var state_24823__$1 = (function (){var statearr_24833 = state_24823;
(statearr_24833[(9)] = inst_24816);

return statearr_24833;
})();
var statearr_24834_24877 = state_24823__$1;
(statearr_24834_24877[(2)] = null);

(statearr_24834_24877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (13))){
var inst_24778 = (state_24823[(10)]);
var inst_24780 = cljs.core.chunked_seq_QMARK_.call(null,inst_24778);
var state_24823__$1 = state_24823;
if(inst_24780){
var statearr_24835_24878 = state_24823__$1;
(statearr_24835_24878[(1)] = (16));

} else {
var statearr_24836_24879 = state_24823__$1;
(statearr_24836_24879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (22))){
var inst_24808 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
if(cljs.core.truth_(inst_24808)){
var statearr_24837_24880 = state_24823__$1;
(statearr_24837_24880[(1)] = (23));

} else {
var statearr_24838_24881 = state_24823__$1;
(statearr_24838_24881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (6))){
var inst_24804 = (state_24823[(11)]);
var inst_24802 = (state_24823[(7)]);
var inst_24754 = (state_24823[(8)]);
var inst_24802__$1 = topic_fn.call(null,inst_24754);
var inst_24803 = cljs.core.deref.call(null,mults);
var inst_24804__$1 = cljs.core.get.call(null,inst_24803,inst_24802__$1);
var state_24823__$1 = (function (){var statearr_24839 = state_24823;
(statearr_24839[(11)] = inst_24804__$1);

(statearr_24839[(7)] = inst_24802__$1);

return statearr_24839;
})();
if(cljs.core.truth_(inst_24804__$1)){
var statearr_24840_24882 = state_24823__$1;
(statearr_24840_24882[(1)] = (19));

} else {
var statearr_24841_24883 = state_24823__$1;
(statearr_24841_24883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (25))){
var inst_24813 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24842_24884 = state_24823__$1;
(statearr_24842_24884[(2)] = inst_24813);

(statearr_24842_24884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (17))){
var inst_24778 = (state_24823[(10)]);
var inst_24787 = cljs.core.first.call(null,inst_24778);
var inst_24788 = cljs.core.async.muxch_STAR_.call(null,inst_24787);
var inst_24789 = cljs.core.async.close_BANG_.call(null,inst_24788);
var inst_24790 = cljs.core.next.call(null,inst_24778);
var inst_24764 = inst_24790;
var inst_24765 = null;
var inst_24766 = (0);
var inst_24767 = (0);
var state_24823__$1 = (function (){var statearr_24843 = state_24823;
(statearr_24843[(12)] = inst_24789);

(statearr_24843[(13)] = inst_24764);

(statearr_24843[(14)] = inst_24766);

(statearr_24843[(15)] = inst_24765);

(statearr_24843[(16)] = inst_24767);

return statearr_24843;
})();
var statearr_24844_24885 = state_24823__$1;
(statearr_24844_24885[(2)] = null);

(statearr_24844_24885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (3))){
var inst_24821 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24823__$1,inst_24821);
} else {
if((state_val_24824 === (12))){
var inst_24798 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24845_24886 = state_24823__$1;
(statearr_24845_24886[(2)] = inst_24798);

(statearr_24845_24886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (2))){
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24823__$1,(4),ch);
} else {
if((state_val_24824 === (23))){
var state_24823__$1 = state_24823;
var statearr_24846_24887 = state_24823__$1;
(statearr_24846_24887[(2)] = null);

(statearr_24846_24887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (19))){
var inst_24804 = (state_24823[(11)]);
var inst_24754 = (state_24823[(8)]);
var inst_24806 = cljs.core.async.muxch_STAR_.call(null,inst_24804);
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24823__$1,(22),inst_24806,inst_24754);
} else {
if((state_val_24824 === (11))){
var inst_24778 = (state_24823[(10)]);
var inst_24764 = (state_24823[(13)]);
var inst_24778__$1 = cljs.core.seq.call(null,inst_24764);
var state_24823__$1 = (function (){var statearr_24847 = state_24823;
(statearr_24847[(10)] = inst_24778__$1);

return statearr_24847;
})();
if(inst_24778__$1){
var statearr_24848_24888 = state_24823__$1;
(statearr_24848_24888[(1)] = (13));

} else {
var statearr_24849_24889 = state_24823__$1;
(statearr_24849_24889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (9))){
var inst_24800 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24850_24890 = state_24823__$1;
(statearr_24850_24890[(2)] = inst_24800);

(statearr_24850_24890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (5))){
var inst_24761 = cljs.core.deref.call(null,mults);
var inst_24762 = cljs.core.vals.call(null,inst_24761);
var inst_24763 = cljs.core.seq.call(null,inst_24762);
var inst_24764 = inst_24763;
var inst_24765 = null;
var inst_24766 = (0);
var inst_24767 = (0);
var state_24823__$1 = (function (){var statearr_24851 = state_24823;
(statearr_24851[(13)] = inst_24764);

(statearr_24851[(14)] = inst_24766);

(statearr_24851[(15)] = inst_24765);

(statearr_24851[(16)] = inst_24767);

return statearr_24851;
})();
var statearr_24852_24891 = state_24823__$1;
(statearr_24852_24891[(2)] = null);

(statearr_24852_24891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (14))){
var state_24823__$1 = state_24823;
var statearr_24856_24892 = state_24823__$1;
(statearr_24856_24892[(2)] = null);

(statearr_24856_24892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (16))){
var inst_24778 = (state_24823[(10)]);
var inst_24782 = cljs.core.chunk_first.call(null,inst_24778);
var inst_24783 = cljs.core.chunk_rest.call(null,inst_24778);
var inst_24784 = cljs.core.count.call(null,inst_24782);
var inst_24764 = inst_24783;
var inst_24765 = inst_24782;
var inst_24766 = inst_24784;
var inst_24767 = (0);
var state_24823__$1 = (function (){var statearr_24857 = state_24823;
(statearr_24857[(13)] = inst_24764);

(statearr_24857[(14)] = inst_24766);

(statearr_24857[(15)] = inst_24765);

(statearr_24857[(16)] = inst_24767);

return statearr_24857;
})();
var statearr_24858_24893 = state_24823__$1;
(statearr_24858_24893[(2)] = null);

(statearr_24858_24893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (10))){
var inst_24764 = (state_24823[(13)]);
var inst_24766 = (state_24823[(14)]);
var inst_24765 = (state_24823[(15)]);
var inst_24767 = (state_24823[(16)]);
var inst_24772 = cljs.core._nth.call(null,inst_24765,inst_24767);
var inst_24773 = cljs.core.async.muxch_STAR_.call(null,inst_24772);
var inst_24774 = cljs.core.async.close_BANG_.call(null,inst_24773);
var inst_24775 = (inst_24767 + (1));
var tmp24853 = inst_24764;
var tmp24854 = inst_24766;
var tmp24855 = inst_24765;
var inst_24764__$1 = tmp24853;
var inst_24765__$1 = tmp24855;
var inst_24766__$1 = tmp24854;
var inst_24767__$1 = inst_24775;
var state_24823__$1 = (function (){var statearr_24859 = state_24823;
(statearr_24859[(13)] = inst_24764__$1);

(statearr_24859[(14)] = inst_24766__$1);

(statearr_24859[(15)] = inst_24765__$1);

(statearr_24859[(17)] = inst_24774);

(statearr_24859[(16)] = inst_24767__$1);

return statearr_24859;
})();
var statearr_24860_24894 = state_24823__$1;
(statearr_24860_24894[(2)] = null);

(statearr_24860_24894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (18))){
var inst_24793 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24861_24895 = state_24823__$1;
(statearr_24861_24895[(2)] = inst_24793);

(statearr_24861_24895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (8))){
var inst_24766 = (state_24823[(14)]);
var inst_24767 = (state_24823[(16)]);
var inst_24769 = (inst_24767 < inst_24766);
var inst_24770 = inst_24769;
var state_24823__$1 = state_24823;
if(cljs.core.truth_(inst_24770)){
var statearr_24862_24896 = state_24823__$1;
(statearr_24862_24896[(1)] = (10));

} else {
var statearr_24863_24897 = state_24823__$1;
(statearr_24863_24897[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___24869,mults,ensure_mult,p))
;
return ((function (switch__23540__auto__,c__23635__auto___24869,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_24864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24864[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_24864[(1)] = (1));

return statearr_24864;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_24823){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24865){if((e24865 instanceof Object)){
var ex__23544__auto__ = e24865;
var statearr_24866_24898 = state_24823;
(statearr_24866_24898[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24899 = state_24823;
state_24823 = G__24899;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_24823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_24823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___24869,mults,ensure_mult,p))
})();
var state__23637__auto__ = (function (){var statearr_24867 = f__23636__auto__.call(null);
(statearr_24867[(6)] = c__23635__auto___24869);

return statearr_24867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___24869,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24901 = arguments.length;
switch (G__24901) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24904 = arguments.length;
switch (G__24904) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24907 = arguments.length;
switch (G__24907) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23635__auto___24974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___24974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___24974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24946){
var state_val_24947 = (state_24946[(1)]);
if((state_val_24947 === (7))){
var state_24946__$1 = state_24946;
var statearr_24948_24975 = state_24946__$1;
(statearr_24948_24975[(2)] = null);

(statearr_24948_24975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (1))){
var state_24946__$1 = state_24946;
var statearr_24949_24976 = state_24946__$1;
(statearr_24949_24976[(2)] = null);

(statearr_24949_24976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (4))){
var inst_24910 = (state_24946[(7)]);
var inst_24912 = (inst_24910 < cnt);
var state_24946__$1 = state_24946;
if(cljs.core.truth_(inst_24912)){
var statearr_24950_24977 = state_24946__$1;
(statearr_24950_24977[(1)] = (6));

} else {
var statearr_24951_24978 = state_24946__$1;
(statearr_24951_24978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (15))){
var inst_24942 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24952_24979 = state_24946__$1;
(statearr_24952_24979[(2)] = inst_24942);

(statearr_24952_24979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (13))){
var inst_24935 = cljs.core.async.close_BANG_.call(null,out);
var state_24946__$1 = state_24946;
var statearr_24953_24980 = state_24946__$1;
(statearr_24953_24980[(2)] = inst_24935);

(statearr_24953_24980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (6))){
var state_24946__$1 = state_24946;
var statearr_24954_24981 = state_24946__$1;
(statearr_24954_24981[(2)] = null);

(statearr_24954_24981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (3))){
var inst_24944 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24946__$1,inst_24944);
} else {
if((state_val_24947 === (12))){
var inst_24932 = (state_24946[(8)]);
var inst_24932__$1 = (state_24946[(2)]);
var inst_24933 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24932__$1);
var state_24946__$1 = (function (){var statearr_24955 = state_24946;
(statearr_24955[(8)] = inst_24932__$1);

return statearr_24955;
})();
if(cljs.core.truth_(inst_24933)){
var statearr_24956_24982 = state_24946__$1;
(statearr_24956_24982[(1)] = (13));

} else {
var statearr_24957_24983 = state_24946__$1;
(statearr_24957_24983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (2))){
var inst_24909 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24910 = (0);
var state_24946__$1 = (function (){var statearr_24958 = state_24946;
(statearr_24958[(9)] = inst_24909);

(statearr_24958[(7)] = inst_24910);

return statearr_24958;
})();
var statearr_24959_24984 = state_24946__$1;
(statearr_24959_24984[(2)] = null);

(statearr_24959_24984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (11))){
var inst_24910 = (state_24946[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24946,(10),Object,null,(9));
var inst_24919 = chs__$1.call(null,inst_24910);
var inst_24920 = done.call(null,inst_24910);
var inst_24921 = cljs.core.async.take_BANG_.call(null,inst_24919,inst_24920);
var state_24946__$1 = state_24946;
var statearr_24960_24985 = state_24946__$1;
(statearr_24960_24985[(2)] = inst_24921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24946__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (9))){
var inst_24910 = (state_24946[(7)]);
var inst_24923 = (state_24946[(2)]);
var inst_24924 = (inst_24910 + (1));
var inst_24910__$1 = inst_24924;
var state_24946__$1 = (function (){var statearr_24961 = state_24946;
(statearr_24961[(10)] = inst_24923);

(statearr_24961[(7)] = inst_24910__$1);

return statearr_24961;
})();
var statearr_24962_24986 = state_24946__$1;
(statearr_24962_24986[(2)] = null);

(statearr_24962_24986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (5))){
var inst_24930 = (state_24946[(2)]);
var state_24946__$1 = (function (){var statearr_24963 = state_24946;
(statearr_24963[(11)] = inst_24930);

return statearr_24963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24946__$1,(12),dchan);
} else {
if((state_val_24947 === (14))){
var inst_24932 = (state_24946[(8)]);
var inst_24937 = cljs.core.apply.call(null,f,inst_24932);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24946__$1,(16),out,inst_24937);
} else {
if((state_val_24947 === (16))){
var inst_24939 = (state_24946[(2)]);
var state_24946__$1 = (function (){var statearr_24964 = state_24946;
(statearr_24964[(12)] = inst_24939);

return statearr_24964;
})();
var statearr_24965_24987 = state_24946__$1;
(statearr_24965_24987[(2)] = null);

(statearr_24965_24987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (10))){
var inst_24914 = (state_24946[(2)]);
var inst_24915 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24946__$1 = (function (){var statearr_24966 = state_24946;
(statearr_24966[(13)] = inst_24914);

return statearr_24966;
})();
var statearr_24967_24988 = state_24946__$1;
(statearr_24967_24988[(2)] = inst_24915);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24946__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (8))){
var inst_24928 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24968_24989 = state_24946__$1;
(statearr_24968_24989[(2)] = inst_24928);

(statearr_24968_24989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___24974,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23540__auto__,c__23635__auto___24974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_24969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24969[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_24969[(1)] = (1));

return statearr_24969;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_24946){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_24946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e24970){if((e24970 instanceof Object)){
var ex__23544__auto__ = e24970;
var statearr_24971_24990 = state_24946;
(statearr_24971_24990[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24991 = state_24946;
state_24946 = G__24991;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_24946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_24946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___24974,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23637__auto__ = (function (){var statearr_24972 = f__23636__auto__.call(null);
(statearr_24972[(6)] = c__23635__auto___24974);

return statearr_24972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___24974,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24994 = arguments.length;
switch (G__24994) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23635__auto___25048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___25048,out){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___25048,out){
return (function (state_25026){
var state_val_25027 = (state_25026[(1)]);
if((state_val_25027 === (7))){
var inst_25006 = (state_25026[(7)]);
var inst_25005 = (state_25026[(8)]);
var inst_25005__$1 = (state_25026[(2)]);
var inst_25006__$1 = cljs.core.nth.call(null,inst_25005__$1,(0),null);
var inst_25007 = cljs.core.nth.call(null,inst_25005__$1,(1),null);
var inst_25008 = (inst_25006__$1 == null);
var state_25026__$1 = (function (){var statearr_25028 = state_25026;
(statearr_25028[(7)] = inst_25006__$1);

(statearr_25028[(8)] = inst_25005__$1);

(statearr_25028[(9)] = inst_25007);

return statearr_25028;
})();
if(cljs.core.truth_(inst_25008)){
var statearr_25029_25049 = state_25026__$1;
(statearr_25029_25049[(1)] = (8));

} else {
var statearr_25030_25050 = state_25026__$1;
(statearr_25030_25050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (1))){
var inst_24995 = cljs.core.vec.call(null,chs);
var inst_24996 = inst_24995;
var state_25026__$1 = (function (){var statearr_25031 = state_25026;
(statearr_25031[(10)] = inst_24996);

return statearr_25031;
})();
var statearr_25032_25051 = state_25026__$1;
(statearr_25032_25051[(2)] = null);

(statearr_25032_25051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (4))){
var inst_24996 = (state_25026[(10)]);
var state_25026__$1 = state_25026;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25026__$1,(7),inst_24996);
} else {
if((state_val_25027 === (6))){
var inst_25022 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
var statearr_25033_25052 = state_25026__$1;
(statearr_25033_25052[(2)] = inst_25022);

(statearr_25033_25052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (3))){
var inst_25024 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25026__$1,inst_25024);
} else {
if((state_val_25027 === (2))){
var inst_24996 = (state_25026[(10)]);
var inst_24998 = cljs.core.count.call(null,inst_24996);
var inst_24999 = (inst_24998 > (0));
var state_25026__$1 = state_25026;
if(cljs.core.truth_(inst_24999)){
var statearr_25035_25053 = state_25026__$1;
(statearr_25035_25053[(1)] = (4));

} else {
var statearr_25036_25054 = state_25026__$1;
(statearr_25036_25054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (11))){
var inst_24996 = (state_25026[(10)]);
var inst_25015 = (state_25026[(2)]);
var tmp25034 = inst_24996;
var inst_24996__$1 = tmp25034;
var state_25026__$1 = (function (){var statearr_25037 = state_25026;
(statearr_25037[(11)] = inst_25015);

(statearr_25037[(10)] = inst_24996__$1);

return statearr_25037;
})();
var statearr_25038_25055 = state_25026__$1;
(statearr_25038_25055[(2)] = null);

(statearr_25038_25055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (9))){
var inst_25006 = (state_25026[(7)]);
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25026__$1,(11),out,inst_25006);
} else {
if((state_val_25027 === (5))){
var inst_25020 = cljs.core.async.close_BANG_.call(null,out);
var state_25026__$1 = state_25026;
var statearr_25039_25056 = state_25026__$1;
(statearr_25039_25056[(2)] = inst_25020);

(statearr_25039_25056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (10))){
var inst_25018 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
var statearr_25040_25057 = state_25026__$1;
(statearr_25040_25057[(2)] = inst_25018);

(statearr_25040_25057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (8))){
var inst_25006 = (state_25026[(7)]);
var inst_24996 = (state_25026[(10)]);
var inst_25005 = (state_25026[(8)]);
var inst_25007 = (state_25026[(9)]);
var inst_25010 = (function (){var cs = inst_24996;
var vec__25001 = inst_25005;
var v = inst_25006;
var c = inst_25007;
return ((function (cs,vec__25001,v,c,inst_25006,inst_24996,inst_25005,inst_25007,state_val_25027,c__23635__auto___25048,out){
return (function (p1__24992_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24992_SHARP_);
});
;})(cs,vec__25001,v,c,inst_25006,inst_24996,inst_25005,inst_25007,state_val_25027,c__23635__auto___25048,out))
})();
var inst_25011 = cljs.core.filterv.call(null,inst_25010,inst_24996);
var inst_24996__$1 = inst_25011;
var state_25026__$1 = (function (){var statearr_25041 = state_25026;
(statearr_25041[(10)] = inst_24996__$1);

return statearr_25041;
})();
var statearr_25042_25058 = state_25026__$1;
(statearr_25042_25058[(2)] = null);

(statearr_25042_25058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___25048,out))
;
return ((function (switch__23540__auto__,c__23635__auto___25048,out){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_25043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25043[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_25043[(1)] = (1));

return statearr_25043;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_25026){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_25026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e25044){if((e25044 instanceof Object)){
var ex__23544__auto__ = e25044;
var statearr_25045_25059 = state_25026;
(statearr_25045_25059[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25060 = state_25026;
state_25026 = G__25060;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_25026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_25026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___25048,out))
})();
var state__23637__auto__ = (function (){var statearr_25046 = f__23636__auto__.call(null);
(statearr_25046[(6)] = c__23635__auto___25048);

return statearr_25046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___25048,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25062 = arguments.length;
switch (G__25062) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23635__auto___25107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___25107,out){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___25107,out){
return (function (state_25086){
var state_val_25087 = (state_25086[(1)]);
if((state_val_25087 === (7))){
var inst_25068 = (state_25086[(7)]);
var inst_25068__$1 = (state_25086[(2)]);
var inst_25069 = (inst_25068__$1 == null);
var inst_25070 = cljs.core.not.call(null,inst_25069);
var state_25086__$1 = (function (){var statearr_25088 = state_25086;
(statearr_25088[(7)] = inst_25068__$1);

return statearr_25088;
})();
if(inst_25070){
var statearr_25089_25108 = state_25086__$1;
(statearr_25089_25108[(1)] = (8));

} else {
var statearr_25090_25109 = state_25086__$1;
(statearr_25090_25109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (1))){
var inst_25063 = (0);
var state_25086__$1 = (function (){var statearr_25091 = state_25086;
(statearr_25091[(8)] = inst_25063);

return statearr_25091;
})();
var statearr_25092_25110 = state_25086__$1;
(statearr_25092_25110[(2)] = null);

(statearr_25092_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (4))){
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25086__$1,(7),ch);
} else {
if((state_val_25087 === (6))){
var inst_25081 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25093_25111 = state_25086__$1;
(statearr_25093_25111[(2)] = inst_25081);

(statearr_25093_25111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (3))){
var inst_25083 = (state_25086[(2)]);
var inst_25084 = cljs.core.async.close_BANG_.call(null,out);
var state_25086__$1 = (function (){var statearr_25094 = state_25086;
(statearr_25094[(9)] = inst_25083);

return statearr_25094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25086__$1,inst_25084);
} else {
if((state_val_25087 === (2))){
var inst_25063 = (state_25086[(8)]);
var inst_25065 = (inst_25063 < n);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25065)){
var statearr_25095_25112 = state_25086__$1;
(statearr_25095_25112[(1)] = (4));

} else {
var statearr_25096_25113 = state_25086__$1;
(statearr_25096_25113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (11))){
var inst_25063 = (state_25086[(8)]);
var inst_25073 = (state_25086[(2)]);
var inst_25074 = (inst_25063 + (1));
var inst_25063__$1 = inst_25074;
var state_25086__$1 = (function (){var statearr_25097 = state_25086;
(statearr_25097[(8)] = inst_25063__$1);

(statearr_25097[(10)] = inst_25073);

return statearr_25097;
})();
var statearr_25098_25114 = state_25086__$1;
(statearr_25098_25114[(2)] = null);

(statearr_25098_25114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (9))){
var state_25086__$1 = state_25086;
var statearr_25099_25115 = state_25086__$1;
(statearr_25099_25115[(2)] = null);

(statearr_25099_25115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (5))){
var state_25086__$1 = state_25086;
var statearr_25100_25116 = state_25086__$1;
(statearr_25100_25116[(2)] = null);

(statearr_25100_25116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (10))){
var inst_25078 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25101_25117 = state_25086__$1;
(statearr_25101_25117[(2)] = inst_25078);

(statearr_25101_25117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (8))){
var inst_25068 = (state_25086[(7)]);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25086__$1,(11),out,inst_25068);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___25107,out))
;
return ((function (switch__23540__auto__,c__23635__auto___25107,out){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_25102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25102[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_25102[(1)] = (1));

return statearr_25102;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_25086){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_25086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object)){
var ex__23544__auto__ = e25103;
var statearr_25104_25118 = state_25086;
(statearr_25104_25118[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25119 = state_25086;
state_25086 = G__25119;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_25086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_25086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___25107,out))
})();
var state__23637__auto__ = (function (){var statearr_25105 = f__23636__auto__.call(null);
(statearr_25105[(6)] = c__23635__auto___25107);

return statearr_25105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___25107,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25121 = (function (f,ch,meta25122){
this.f = f;
this.ch = ch;
this.meta25122 = meta25122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25123,meta25122__$1){
var self__ = this;
var _25123__$1 = this;
return (new cljs.core.async.t_cljs$core$async25121(self__.f,self__.ch,meta25122__$1));
});

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25123){
var self__ = this;
var _25123__$1 = this;
return self__.meta25122;
});

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25124 = (function (f,ch,meta25122,_,fn1,meta25125){
this.f = f;
this.ch = ch;
this.meta25122 = meta25122;
this._ = _;
this.fn1 = fn1;
this.meta25125 = meta25125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25126,meta25125__$1){
var self__ = this;
var _25126__$1 = this;
return (new cljs.core.async.t_cljs$core$async25124(self__.f,self__.ch,self__.meta25122,self__._,self__.fn1,meta25125__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25126){
var self__ = this;
var _25126__$1 = this;
return self__.meta25125;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25120_SHARP_){
return f1.call(null,(((p1__25120_SHARP_ == null))?null:self__.f.call(null,p1__25120_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25124.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25122","meta25122",1922697249,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25121","cljs.core.async/t_cljs$core$async25121",-1689310936,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25125","meta25125",-371314928,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25124";

cljs.core.async.t_cljs$core$async25124.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25124");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25124.
 */
cljs.core.async.__GT_t_cljs$core$async25124 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25124(f__$1,ch__$1,meta25122__$1,___$2,fn1__$1,meta25125){
return (new cljs.core.async.t_cljs$core$async25124(f__$1,ch__$1,meta25122__$1,___$2,fn1__$1,meta25125));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25124(self__.f,self__.ch,self__.meta25122,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25122","meta25122",1922697249,null)], null);
});

cljs.core.async.t_cljs$core$async25121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25121";

cljs.core.async.t_cljs$core$async25121.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25121");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25121.
 */
cljs.core.async.__GT_t_cljs$core$async25121 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25121(f__$1,ch__$1,meta25122){
return (new cljs.core.async.t_cljs$core$async25121(f__$1,ch__$1,meta25122));
});

}

return (new cljs.core.async.t_cljs$core$async25121(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25127 = (function (f,ch,meta25128){
this.f = f;
this.ch = ch;
this.meta25128 = meta25128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25129,meta25128__$1){
var self__ = this;
var _25129__$1 = this;
return (new cljs.core.async.t_cljs$core$async25127(self__.f,self__.ch,meta25128__$1));
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25129){
var self__ = this;
var _25129__$1 = this;
return self__.meta25128;
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25128","meta25128",-28303015,null)], null);
});

cljs.core.async.t_cljs$core$async25127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25127";

cljs.core.async.t_cljs$core$async25127.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25127");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25127.
 */
cljs.core.async.__GT_t_cljs$core$async25127 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25127(f__$1,ch__$1,meta25128){
return (new cljs.core.async.t_cljs$core$async25127(f__$1,ch__$1,meta25128));
});

}

return (new cljs.core.async.t_cljs$core$async25127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25130 = (function (p,ch,meta25131){
this.p = p;
this.ch = ch;
this.meta25131 = meta25131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25132,meta25131__$1){
var self__ = this;
var _25132__$1 = this;
return (new cljs.core.async.t_cljs$core$async25130(self__.p,self__.ch,meta25131__$1));
});

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25132){
var self__ = this;
var _25132__$1 = this;
return self__.meta25131;
});

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25131","meta25131",116103203,null)], null);
});

cljs.core.async.t_cljs$core$async25130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25130";

cljs.core.async.t_cljs$core$async25130.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25130");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25130.
 */
cljs.core.async.__GT_t_cljs$core$async25130 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25130(p__$1,ch__$1,meta25131){
return (new cljs.core.async.t_cljs$core$async25130(p__$1,ch__$1,meta25131));
});

}

return (new cljs.core.async.t_cljs$core$async25130(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25134 = arguments.length;
switch (G__25134) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23635__auto___25174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___25174,out){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___25174,out){
return (function (state_25155){
var state_val_25156 = (state_25155[(1)]);
if((state_val_25156 === (7))){
var inst_25151 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25157_25175 = state_25155__$1;
(statearr_25157_25175[(2)] = inst_25151);

(statearr_25157_25175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (1))){
var state_25155__$1 = state_25155;
var statearr_25158_25176 = state_25155__$1;
(statearr_25158_25176[(2)] = null);

(statearr_25158_25176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (4))){
var inst_25137 = (state_25155[(7)]);
var inst_25137__$1 = (state_25155[(2)]);
var inst_25138 = (inst_25137__$1 == null);
var state_25155__$1 = (function (){var statearr_25159 = state_25155;
(statearr_25159[(7)] = inst_25137__$1);

return statearr_25159;
})();
if(cljs.core.truth_(inst_25138)){
var statearr_25160_25177 = state_25155__$1;
(statearr_25160_25177[(1)] = (5));

} else {
var statearr_25161_25178 = state_25155__$1;
(statearr_25161_25178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (6))){
var inst_25137 = (state_25155[(7)]);
var inst_25142 = p.call(null,inst_25137);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25142)){
var statearr_25162_25179 = state_25155__$1;
(statearr_25162_25179[(1)] = (8));

} else {
var statearr_25163_25180 = state_25155__$1;
(statearr_25163_25180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (3))){
var inst_25153 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25155__$1,inst_25153);
} else {
if((state_val_25156 === (2))){
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25155__$1,(4),ch);
} else {
if((state_val_25156 === (11))){
var inst_25145 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25164_25181 = state_25155__$1;
(statearr_25164_25181[(2)] = inst_25145);

(statearr_25164_25181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (9))){
var state_25155__$1 = state_25155;
var statearr_25165_25182 = state_25155__$1;
(statearr_25165_25182[(2)] = null);

(statearr_25165_25182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (5))){
var inst_25140 = cljs.core.async.close_BANG_.call(null,out);
var state_25155__$1 = state_25155;
var statearr_25166_25183 = state_25155__$1;
(statearr_25166_25183[(2)] = inst_25140);

(statearr_25166_25183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (10))){
var inst_25148 = (state_25155[(2)]);
var state_25155__$1 = (function (){var statearr_25167 = state_25155;
(statearr_25167[(8)] = inst_25148);

return statearr_25167;
})();
var statearr_25168_25184 = state_25155__$1;
(statearr_25168_25184[(2)] = null);

(statearr_25168_25184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (8))){
var inst_25137 = (state_25155[(7)]);
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25155__$1,(11),out,inst_25137);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___25174,out))
;
return ((function (switch__23540__auto__,c__23635__auto___25174,out){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_25169 = [null,null,null,null,null,null,null,null,null];
(statearr_25169[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_25169[(1)] = (1));

return statearr_25169;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_25155){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_25155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e25170){if((e25170 instanceof Object)){
var ex__23544__auto__ = e25170;
var statearr_25171_25185 = state_25155;
(statearr_25171_25185[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25186 = state_25155;
state_25155 = G__25186;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_25155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_25155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___25174,out))
})();
var state__23637__auto__ = (function (){var statearr_25172 = f__23636__auto__.call(null);
(statearr_25172[(6)] = c__23635__auto___25174);

return statearr_25172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___25174,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25188 = arguments.length;
switch (G__25188) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__){
return (function (state_25251){
var state_val_25252 = (state_25251[(1)]);
if((state_val_25252 === (7))){
var inst_25247 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25253_25291 = state_25251__$1;
(statearr_25253_25291[(2)] = inst_25247);

(statearr_25253_25291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (20))){
var inst_25217 = (state_25251[(7)]);
var inst_25228 = (state_25251[(2)]);
var inst_25229 = cljs.core.next.call(null,inst_25217);
var inst_25203 = inst_25229;
var inst_25204 = null;
var inst_25205 = (0);
var inst_25206 = (0);
var state_25251__$1 = (function (){var statearr_25254 = state_25251;
(statearr_25254[(8)] = inst_25228);

(statearr_25254[(9)] = inst_25203);

(statearr_25254[(10)] = inst_25204);

(statearr_25254[(11)] = inst_25205);

(statearr_25254[(12)] = inst_25206);

return statearr_25254;
})();
var statearr_25255_25292 = state_25251__$1;
(statearr_25255_25292[(2)] = null);

(statearr_25255_25292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (1))){
var state_25251__$1 = state_25251;
var statearr_25256_25293 = state_25251__$1;
(statearr_25256_25293[(2)] = null);

(statearr_25256_25293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (4))){
var inst_25192 = (state_25251[(13)]);
var inst_25192__$1 = (state_25251[(2)]);
var inst_25193 = (inst_25192__$1 == null);
var state_25251__$1 = (function (){var statearr_25257 = state_25251;
(statearr_25257[(13)] = inst_25192__$1);

return statearr_25257;
})();
if(cljs.core.truth_(inst_25193)){
var statearr_25258_25294 = state_25251__$1;
(statearr_25258_25294[(1)] = (5));

} else {
var statearr_25259_25295 = state_25251__$1;
(statearr_25259_25295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (15))){
var state_25251__$1 = state_25251;
var statearr_25263_25296 = state_25251__$1;
(statearr_25263_25296[(2)] = null);

(statearr_25263_25296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (21))){
var state_25251__$1 = state_25251;
var statearr_25264_25297 = state_25251__$1;
(statearr_25264_25297[(2)] = null);

(statearr_25264_25297[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (13))){
var inst_25203 = (state_25251[(9)]);
var inst_25204 = (state_25251[(10)]);
var inst_25205 = (state_25251[(11)]);
var inst_25206 = (state_25251[(12)]);
var inst_25213 = (state_25251[(2)]);
var inst_25214 = (inst_25206 + (1));
var tmp25260 = inst_25203;
var tmp25261 = inst_25204;
var tmp25262 = inst_25205;
var inst_25203__$1 = tmp25260;
var inst_25204__$1 = tmp25261;
var inst_25205__$1 = tmp25262;
var inst_25206__$1 = inst_25214;
var state_25251__$1 = (function (){var statearr_25265 = state_25251;
(statearr_25265[(9)] = inst_25203__$1);

(statearr_25265[(10)] = inst_25204__$1);

(statearr_25265[(14)] = inst_25213);

(statearr_25265[(11)] = inst_25205__$1);

(statearr_25265[(12)] = inst_25206__$1);

return statearr_25265;
})();
var statearr_25266_25298 = state_25251__$1;
(statearr_25266_25298[(2)] = null);

(statearr_25266_25298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (22))){
var state_25251__$1 = state_25251;
var statearr_25267_25299 = state_25251__$1;
(statearr_25267_25299[(2)] = null);

(statearr_25267_25299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (6))){
var inst_25192 = (state_25251[(13)]);
var inst_25201 = f.call(null,inst_25192);
var inst_25202 = cljs.core.seq.call(null,inst_25201);
var inst_25203 = inst_25202;
var inst_25204 = null;
var inst_25205 = (0);
var inst_25206 = (0);
var state_25251__$1 = (function (){var statearr_25268 = state_25251;
(statearr_25268[(9)] = inst_25203);

(statearr_25268[(10)] = inst_25204);

(statearr_25268[(11)] = inst_25205);

(statearr_25268[(12)] = inst_25206);

return statearr_25268;
})();
var statearr_25269_25300 = state_25251__$1;
(statearr_25269_25300[(2)] = null);

(statearr_25269_25300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (17))){
var inst_25217 = (state_25251[(7)]);
var inst_25221 = cljs.core.chunk_first.call(null,inst_25217);
var inst_25222 = cljs.core.chunk_rest.call(null,inst_25217);
var inst_25223 = cljs.core.count.call(null,inst_25221);
var inst_25203 = inst_25222;
var inst_25204 = inst_25221;
var inst_25205 = inst_25223;
var inst_25206 = (0);
var state_25251__$1 = (function (){var statearr_25270 = state_25251;
(statearr_25270[(9)] = inst_25203);

(statearr_25270[(10)] = inst_25204);

(statearr_25270[(11)] = inst_25205);

(statearr_25270[(12)] = inst_25206);

return statearr_25270;
})();
var statearr_25271_25301 = state_25251__$1;
(statearr_25271_25301[(2)] = null);

(statearr_25271_25301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (3))){
var inst_25249 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25251__$1,inst_25249);
} else {
if((state_val_25252 === (12))){
var inst_25237 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25272_25302 = state_25251__$1;
(statearr_25272_25302[(2)] = inst_25237);

(statearr_25272_25302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (2))){
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25251__$1,(4),in$);
} else {
if((state_val_25252 === (23))){
var inst_25245 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25273_25303 = state_25251__$1;
(statearr_25273_25303[(2)] = inst_25245);

(statearr_25273_25303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (19))){
var inst_25232 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25274_25304 = state_25251__$1;
(statearr_25274_25304[(2)] = inst_25232);

(statearr_25274_25304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (11))){
var inst_25203 = (state_25251[(9)]);
var inst_25217 = (state_25251[(7)]);
var inst_25217__$1 = cljs.core.seq.call(null,inst_25203);
var state_25251__$1 = (function (){var statearr_25275 = state_25251;
(statearr_25275[(7)] = inst_25217__$1);

return statearr_25275;
})();
if(inst_25217__$1){
var statearr_25276_25305 = state_25251__$1;
(statearr_25276_25305[(1)] = (14));

} else {
var statearr_25277_25306 = state_25251__$1;
(statearr_25277_25306[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (9))){
var inst_25239 = (state_25251[(2)]);
var inst_25240 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25251__$1 = (function (){var statearr_25278 = state_25251;
(statearr_25278[(15)] = inst_25239);

return statearr_25278;
})();
if(cljs.core.truth_(inst_25240)){
var statearr_25279_25307 = state_25251__$1;
(statearr_25279_25307[(1)] = (21));

} else {
var statearr_25280_25308 = state_25251__$1;
(statearr_25280_25308[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (5))){
var inst_25195 = cljs.core.async.close_BANG_.call(null,out);
var state_25251__$1 = state_25251;
var statearr_25281_25309 = state_25251__$1;
(statearr_25281_25309[(2)] = inst_25195);

(statearr_25281_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (14))){
var inst_25217 = (state_25251[(7)]);
var inst_25219 = cljs.core.chunked_seq_QMARK_.call(null,inst_25217);
var state_25251__$1 = state_25251;
if(inst_25219){
var statearr_25282_25310 = state_25251__$1;
(statearr_25282_25310[(1)] = (17));

} else {
var statearr_25283_25311 = state_25251__$1;
(statearr_25283_25311[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (16))){
var inst_25235 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25284_25312 = state_25251__$1;
(statearr_25284_25312[(2)] = inst_25235);

(statearr_25284_25312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (10))){
var inst_25204 = (state_25251[(10)]);
var inst_25206 = (state_25251[(12)]);
var inst_25211 = cljs.core._nth.call(null,inst_25204,inst_25206);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25251__$1,(13),out,inst_25211);
} else {
if((state_val_25252 === (18))){
var inst_25217 = (state_25251[(7)]);
var inst_25226 = cljs.core.first.call(null,inst_25217);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25251__$1,(20),out,inst_25226);
} else {
if((state_val_25252 === (8))){
var inst_25205 = (state_25251[(11)]);
var inst_25206 = (state_25251[(12)]);
var inst_25208 = (inst_25206 < inst_25205);
var inst_25209 = inst_25208;
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25209)){
var statearr_25285_25313 = state_25251__$1;
(statearr_25285_25313[(1)] = (10));

} else {
var statearr_25286_25314 = state_25251__$1;
(statearr_25286_25314[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto__))
;
return ((function (switch__23540__auto__,c__23635__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23541__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23541__auto____0 = (function (){
var statearr_25287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25287[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23541__auto__);

(statearr_25287[(1)] = (1));

return statearr_25287;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23541__auto____1 = (function (state_25251){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_25251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e25288){if((e25288 instanceof Object)){
var ex__23544__auto__ = e25288;
var statearr_25289_25315 = state_25251;
(statearr_25289_25315[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25316 = state_25251;
state_25251 = G__25316;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23541__auto__ = function(state_25251){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23541__auto____1.call(this,state_25251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23541__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23541__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__))
})();
var state__23637__auto__ = (function (){var statearr_25290 = f__23636__auto__.call(null);
(statearr_25290[(6)] = c__23635__auto__);

return statearr_25290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__))
);

return c__23635__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25318 = arguments.length;
switch (G__25318) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25321 = arguments.length;
switch (G__25321) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25324 = arguments.length;
switch (G__25324) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23635__auto___25371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___25371,out){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___25371,out){
return (function (state_25348){
var state_val_25349 = (state_25348[(1)]);
if((state_val_25349 === (7))){
var inst_25343 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25350_25372 = state_25348__$1;
(statearr_25350_25372[(2)] = inst_25343);

(statearr_25350_25372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (1))){
var inst_25325 = null;
var state_25348__$1 = (function (){var statearr_25351 = state_25348;
(statearr_25351[(7)] = inst_25325);

return statearr_25351;
})();
var statearr_25352_25373 = state_25348__$1;
(statearr_25352_25373[(2)] = null);

(statearr_25352_25373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (4))){
var inst_25328 = (state_25348[(8)]);
var inst_25328__$1 = (state_25348[(2)]);
var inst_25329 = (inst_25328__$1 == null);
var inst_25330 = cljs.core.not.call(null,inst_25329);
var state_25348__$1 = (function (){var statearr_25353 = state_25348;
(statearr_25353[(8)] = inst_25328__$1);

return statearr_25353;
})();
if(inst_25330){
var statearr_25354_25374 = state_25348__$1;
(statearr_25354_25374[(1)] = (5));

} else {
var statearr_25355_25375 = state_25348__$1;
(statearr_25355_25375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (6))){
var state_25348__$1 = state_25348;
var statearr_25356_25376 = state_25348__$1;
(statearr_25356_25376[(2)] = null);

(statearr_25356_25376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (3))){
var inst_25345 = (state_25348[(2)]);
var inst_25346 = cljs.core.async.close_BANG_.call(null,out);
var state_25348__$1 = (function (){var statearr_25357 = state_25348;
(statearr_25357[(9)] = inst_25345);

return statearr_25357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25348__$1,inst_25346);
} else {
if((state_val_25349 === (2))){
var state_25348__$1 = state_25348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25348__$1,(4),ch);
} else {
if((state_val_25349 === (11))){
var inst_25328 = (state_25348[(8)]);
var inst_25337 = (state_25348[(2)]);
var inst_25325 = inst_25328;
var state_25348__$1 = (function (){var statearr_25358 = state_25348;
(statearr_25358[(7)] = inst_25325);

(statearr_25358[(10)] = inst_25337);

return statearr_25358;
})();
var statearr_25359_25377 = state_25348__$1;
(statearr_25359_25377[(2)] = null);

(statearr_25359_25377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (9))){
var inst_25328 = (state_25348[(8)]);
var state_25348__$1 = state_25348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25348__$1,(11),out,inst_25328);
} else {
if((state_val_25349 === (5))){
var inst_25325 = (state_25348[(7)]);
var inst_25328 = (state_25348[(8)]);
var inst_25332 = cljs.core._EQ_.call(null,inst_25328,inst_25325);
var state_25348__$1 = state_25348;
if(inst_25332){
var statearr_25361_25378 = state_25348__$1;
(statearr_25361_25378[(1)] = (8));

} else {
var statearr_25362_25379 = state_25348__$1;
(statearr_25362_25379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (10))){
var inst_25340 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25363_25380 = state_25348__$1;
(statearr_25363_25380[(2)] = inst_25340);

(statearr_25363_25380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (8))){
var inst_25325 = (state_25348[(7)]);
var tmp25360 = inst_25325;
var inst_25325__$1 = tmp25360;
var state_25348__$1 = (function (){var statearr_25364 = state_25348;
(statearr_25364[(7)] = inst_25325__$1);

return statearr_25364;
})();
var statearr_25365_25381 = state_25348__$1;
(statearr_25365_25381[(2)] = null);

(statearr_25365_25381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___25371,out))
;
return ((function (switch__23540__auto__,c__23635__auto___25371,out){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_25366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25366[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_25366[(1)] = (1));

return statearr_25366;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_25348){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_25348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e25367){if((e25367 instanceof Object)){
var ex__23544__auto__ = e25367;
var statearr_25368_25382 = state_25348;
(statearr_25368_25382[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25383 = state_25348;
state_25348 = G__25383;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_25348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_25348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___25371,out))
})();
var state__23637__auto__ = (function (){var statearr_25369 = f__23636__auto__.call(null);
(statearr_25369[(6)] = c__23635__auto___25371);

return statearr_25369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___25371,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25385 = arguments.length;
switch (G__25385) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23635__auto___25451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___25451,out){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___25451,out){
return (function (state_25423){
var state_val_25424 = (state_25423[(1)]);
if((state_val_25424 === (7))){
var inst_25419 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25425_25452 = state_25423__$1;
(statearr_25425_25452[(2)] = inst_25419);

(statearr_25425_25452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (1))){
var inst_25386 = (new Array(n));
var inst_25387 = inst_25386;
var inst_25388 = (0);
var state_25423__$1 = (function (){var statearr_25426 = state_25423;
(statearr_25426[(7)] = inst_25388);

(statearr_25426[(8)] = inst_25387);

return statearr_25426;
})();
var statearr_25427_25453 = state_25423__$1;
(statearr_25427_25453[(2)] = null);

(statearr_25427_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (4))){
var inst_25391 = (state_25423[(9)]);
var inst_25391__$1 = (state_25423[(2)]);
var inst_25392 = (inst_25391__$1 == null);
var inst_25393 = cljs.core.not.call(null,inst_25392);
var state_25423__$1 = (function (){var statearr_25428 = state_25423;
(statearr_25428[(9)] = inst_25391__$1);

return statearr_25428;
})();
if(inst_25393){
var statearr_25429_25454 = state_25423__$1;
(statearr_25429_25454[(1)] = (5));

} else {
var statearr_25430_25455 = state_25423__$1;
(statearr_25430_25455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (15))){
var inst_25413 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25431_25456 = state_25423__$1;
(statearr_25431_25456[(2)] = inst_25413);

(statearr_25431_25456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (13))){
var state_25423__$1 = state_25423;
var statearr_25432_25457 = state_25423__$1;
(statearr_25432_25457[(2)] = null);

(statearr_25432_25457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (6))){
var inst_25388 = (state_25423[(7)]);
var inst_25409 = (inst_25388 > (0));
var state_25423__$1 = state_25423;
if(cljs.core.truth_(inst_25409)){
var statearr_25433_25458 = state_25423__$1;
(statearr_25433_25458[(1)] = (12));

} else {
var statearr_25434_25459 = state_25423__$1;
(statearr_25434_25459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (3))){
var inst_25421 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25423__$1,inst_25421);
} else {
if((state_val_25424 === (12))){
var inst_25387 = (state_25423[(8)]);
var inst_25411 = cljs.core.vec.call(null,inst_25387);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25423__$1,(15),out,inst_25411);
} else {
if((state_val_25424 === (2))){
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25423__$1,(4),ch);
} else {
if((state_val_25424 === (11))){
var inst_25403 = (state_25423[(2)]);
var inst_25404 = (new Array(n));
var inst_25387 = inst_25404;
var inst_25388 = (0);
var state_25423__$1 = (function (){var statearr_25435 = state_25423;
(statearr_25435[(7)] = inst_25388);

(statearr_25435[(8)] = inst_25387);

(statearr_25435[(10)] = inst_25403);

return statearr_25435;
})();
var statearr_25436_25460 = state_25423__$1;
(statearr_25436_25460[(2)] = null);

(statearr_25436_25460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (9))){
var inst_25387 = (state_25423[(8)]);
var inst_25401 = cljs.core.vec.call(null,inst_25387);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25423__$1,(11),out,inst_25401);
} else {
if((state_val_25424 === (5))){
var inst_25396 = (state_25423[(11)]);
var inst_25391 = (state_25423[(9)]);
var inst_25388 = (state_25423[(7)]);
var inst_25387 = (state_25423[(8)]);
var inst_25395 = (inst_25387[inst_25388] = inst_25391);
var inst_25396__$1 = (inst_25388 + (1));
var inst_25397 = (inst_25396__$1 < n);
var state_25423__$1 = (function (){var statearr_25437 = state_25423;
(statearr_25437[(11)] = inst_25396__$1);

(statearr_25437[(12)] = inst_25395);

return statearr_25437;
})();
if(cljs.core.truth_(inst_25397)){
var statearr_25438_25461 = state_25423__$1;
(statearr_25438_25461[(1)] = (8));

} else {
var statearr_25439_25462 = state_25423__$1;
(statearr_25439_25462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (14))){
var inst_25416 = (state_25423[(2)]);
var inst_25417 = cljs.core.async.close_BANG_.call(null,out);
var state_25423__$1 = (function (){var statearr_25441 = state_25423;
(statearr_25441[(13)] = inst_25416);

return statearr_25441;
})();
var statearr_25442_25463 = state_25423__$1;
(statearr_25442_25463[(2)] = inst_25417);

(statearr_25442_25463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (10))){
var inst_25407 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25443_25464 = state_25423__$1;
(statearr_25443_25464[(2)] = inst_25407);

(statearr_25443_25464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (8))){
var inst_25396 = (state_25423[(11)]);
var inst_25387 = (state_25423[(8)]);
var tmp25440 = inst_25387;
var inst_25387__$1 = tmp25440;
var inst_25388 = inst_25396;
var state_25423__$1 = (function (){var statearr_25444 = state_25423;
(statearr_25444[(7)] = inst_25388);

(statearr_25444[(8)] = inst_25387__$1);

return statearr_25444;
})();
var statearr_25445_25465 = state_25423__$1;
(statearr_25445_25465[(2)] = null);

(statearr_25445_25465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___25451,out))
;
return ((function (switch__23540__auto__,c__23635__auto___25451,out){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_25446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25446[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_25446[(1)] = (1));

return statearr_25446;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_25423){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_25423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e25447){if((e25447 instanceof Object)){
var ex__23544__auto__ = e25447;
var statearr_25448_25466 = state_25423;
(statearr_25448_25466[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25467 = state_25423;
state_25423 = G__25467;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___25451,out))
})();
var state__23637__auto__ = (function (){var statearr_25449 = f__23636__auto__.call(null);
(statearr_25449[(6)] = c__23635__auto___25451);

return statearr_25449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___25451,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25469 = arguments.length;
switch (G__25469) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23635__auto___25539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___25539,out){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___25539,out){
return (function (state_25511){
var state_val_25512 = (state_25511[(1)]);
if((state_val_25512 === (7))){
var inst_25507 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25513_25540 = state_25511__$1;
(statearr_25513_25540[(2)] = inst_25507);

(statearr_25513_25540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (1))){
var inst_25470 = [];
var inst_25471 = inst_25470;
var inst_25472 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25511__$1 = (function (){var statearr_25514 = state_25511;
(statearr_25514[(7)] = inst_25471);

(statearr_25514[(8)] = inst_25472);

return statearr_25514;
})();
var statearr_25515_25541 = state_25511__$1;
(statearr_25515_25541[(2)] = null);

(statearr_25515_25541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (4))){
var inst_25475 = (state_25511[(9)]);
var inst_25475__$1 = (state_25511[(2)]);
var inst_25476 = (inst_25475__$1 == null);
var inst_25477 = cljs.core.not.call(null,inst_25476);
var state_25511__$1 = (function (){var statearr_25516 = state_25511;
(statearr_25516[(9)] = inst_25475__$1);

return statearr_25516;
})();
if(inst_25477){
var statearr_25517_25542 = state_25511__$1;
(statearr_25517_25542[(1)] = (5));

} else {
var statearr_25518_25543 = state_25511__$1;
(statearr_25518_25543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (15))){
var inst_25501 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25519_25544 = state_25511__$1;
(statearr_25519_25544[(2)] = inst_25501);

(statearr_25519_25544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (13))){
var state_25511__$1 = state_25511;
var statearr_25520_25545 = state_25511__$1;
(statearr_25520_25545[(2)] = null);

(statearr_25520_25545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (6))){
var inst_25471 = (state_25511[(7)]);
var inst_25496 = inst_25471.length;
var inst_25497 = (inst_25496 > (0));
var state_25511__$1 = state_25511;
if(cljs.core.truth_(inst_25497)){
var statearr_25521_25546 = state_25511__$1;
(statearr_25521_25546[(1)] = (12));

} else {
var statearr_25522_25547 = state_25511__$1;
(statearr_25522_25547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (3))){
var inst_25509 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else {
if((state_val_25512 === (12))){
var inst_25471 = (state_25511[(7)]);
var inst_25499 = cljs.core.vec.call(null,inst_25471);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25511__$1,(15),out,inst_25499);
} else {
if((state_val_25512 === (2))){
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(4),ch);
} else {
if((state_val_25512 === (11))){
var inst_25475 = (state_25511[(9)]);
var inst_25479 = (state_25511[(10)]);
var inst_25489 = (state_25511[(2)]);
var inst_25490 = [];
var inst_25491 = inst_25490.push(inst_25475);
var inst_25471 = inst_25490;
var inst_25472 = inst_25479;
var state_25511__$1 = (function (){var statearr_25523 = state_25511;
(statearr_25523[(7)] = inst_25471);

(statearr_25523[(11)] = inst_25491);

(statearr_25523[(12)] = inst_25489);

(statearr_25523[(8)] = inst_25472);

return statearr_25523;
})();
var statearr_25524_25548 = state_25511__$1;
(statearr_25524_25548[(2)] = null);

(statearr_25524_25548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (9))){
var inst_25471 = (state_25511[(7)]);
var inst_25487 = cljs.core.vec.call(null,inst_25471);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25511__$1,(11),out,inst_25487);
} else {
if((state_val_25512 === (5))){
var inst_25475 = (state_25511[(9)]);
var inst_25479 = (state_25511[(10)]);
var inst_25472 = (state_25511[(8)]);
var inst_25479__$1 = f.call(null,inst_25475);
var inst_25480 = cljs.core._EQ_.call(null,inst_25479__$1,inst_25472);
var inst_25481 = cljs.core.keyword_identical_QMARK_.call(null,inst_25472,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25482 = ((inst_25480) || (inst_25481));
var state_25511__$1 = (function (){var statearr_25525 = state_25511;
(statearr_25525[(10)] = inst_25479__$1);

return statearr_25525;
})();
if(cljs.core.truth_(inst_25482)){
var statearr_25526_25549 = state_25511__$1;
(statearr_25526_25549[(1)] = (8));

} else {
var statearr_25527_25550 = state_25511__$1;
(statearr_25527_25550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (14))){
var inst_25504 = (state_25511[(2)]);
var inst_25505 = cljs.core.async.close_BANG_.call(null,out);
var state_25511__$1 = (function (){var statearr_25529 = state_25511;
(statearr_25529[(13)] = inst_25504);

return statearr_25529;
})();
var statearr_25530_25551 = state_25511__$1;
(statearr_25530_25551[(2)] = inst_25505);

(statearr_25530_25551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (10))){
var inst_25494 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25531_25552 = state_25511__$1;
(statearr_25531_25552[(2)] = inst_25494);

(statearr_25531_25552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (8))){
var inst_25471 = (state_25511[(7)]);
var inst_25475 = (state_25511[(9)]);
var inst_25479 = (state_25511[(10)]);
var inst_25484 = inst_25471.push(inst_25475);
var tmp25528 = inst_25471;
var inst_25471__$1 = tmp25528;
var inst_25472 = inst_25479;
var state_25511__$1 = (function (){var statearr_25532 = state_25511;
(statearr_25532[(7)] = inst_25471__$1);

(statearr_25532[(14)] = inst_25484);

(statearr_25532[(8)] = inst_25472);

return statearr_25532;
})();
var statearr_25533_25553 = state_25511__$1;
(statearr_25533_25553[(2)] = null);

(statearr_25533_25553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23635__auto___25539,out))
;
return ((function (switch__23540__auto__,c__23635__auto___25539,out){
return (function() {
var cljs$core$async$state_machine__23541__auto__ = null;
var cljs$core$async$state_machine__23541__auto____0 = (function (){
var statearr_25534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25534[(0)] = cljs$core$async$state_machine__23541__auto__);

(statearr_25534[(1)] = (1));

return statearr_25534;
});
var cljs$core$async$state_machine__23541__auto____1 = (function (state_25511){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_25511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e25535){if((e25535 instanceof Object)){
var ex__23544__auto__ = e25535;
var statearr_25536_25554 = state_25511;
(statearr_25536_25554[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25555 = state_25511;
state_25511 = G__25555;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
cljs$core$async$state_machine__23541__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23541__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23541__auto____0;
cljs$core$async$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23541__auto____1;
return cljs$core$async$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___25539,out))
})();
var state__23637__auto__ = (function (){var statearr_25537 = f__23636__auto__.call(null);
(statearr_25537[(6)] = c__23635__auto___25539);

return statearr_25537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___25539,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1737953116860
