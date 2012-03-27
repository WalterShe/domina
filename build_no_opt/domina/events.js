goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.events');
/**
* returns true if the node(child) is a child of parent
*/
domina.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__15795 = parent;
var G__15796 = child.parentNode;
parent = G__15795;
child = G__15796;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
domina.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__15797 = e.relatedTarget;
var this$__15798 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15799 = cljs.core.not.call(null,(re__15797 === this$__15798));

if(cljs.core.truth_(and__3546__auto____15799))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15798,re__15797));
} else
{return and__3546__auto____15799;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
/**
* Generic event wrapper that handles listening and cleanup of wrapped events
*/
domina.events.gen_wrapper = (function gen_wrapper(event_key,wrapped_key,wrapper_func){
var obj__15800 = (new Object());
var wevent__15801 = cljs.core.name.call(null,wrapped_key);
var event__15802 = cljs.core.name.call(null,event_key);

obj__15800.wrapped_event = wevent__15801;
obj__15800.event = event__15802;
obj__15800.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15804 = wrapper_func.call(null,func);

callback__15804.listen = func;
callback__15804.scope = opt_scope;
callback__15804.event = event__15802;
callback__15804.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15801,callback__15804,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15801,callback__15804,capture);
}
});
obj__15800.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15826 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15801,false),goog.events.getListeners.call(null,elm,wevent__15801,true)):goog.events.getListeners.call(null,elm,wevent__15801,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15829 = obj.listener;
var lfunc__15830 = listener__15829.listen;
var scope__15831 = listener__15829.scope;
var capture__15832 = listener__15829.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15834 = (function (){var or__3548__auto____15833 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15833))
{return or__3548__auto____15833;
} else
{return cljs.core._EQ_.call(null,lfunc__15830,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15834))
{var or__3548__auto____15835 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15835))
{return or__3548__auto____15835;
} else
{return cljs.core._EQ_.call(null,scope__15831,opt_scope);
}
} else
{return and__3546__auto____15834;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15801,listener__15829,capture__15832);
} else
{return goog.events.unlisten.call(null,elm,wevent__15801,listener__15829,capture__15832);
}
} else
{return null;
}
}),listeners__15826));
});
return obj__15800;
});
domina.events.wrapper_register = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
domina.events.reg_event_wrapper_BANG_ = (function reg_event_wrapper_BANG_(event_key,wrapped_key,wrapper_func){
return cljs.core.swap_BANG_.call(null,domina.events.wrapper_register,cljs.core.assoc,event_key,domina.events.gen_wrapper.call(null,event_key,wrapped_key,wrapper_func));
});
/**
* adding an event to the selected nodes
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___15860 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15861 = (function (nds,event,func,capture){
var wrapper__15850 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15851__15852 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15851__15852))
{var node__15854 = cljs.core.first.call(null,G__15851__15852);
var G__15851__15855 = G__15851__15852;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15850)))
{goog.events.listen.call(null,node__15854,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15854,wrapper__15850,func,capture);
}
var temp__3698__auto____15858 = cljs.core.next.call(null,G__15851__15855);

if(cljs.core.truth_(temp__3698__auto____15858))
{var G__15851__15859 = temp__3698__auto____15858;

{
var G__15879 = cljs.core.first.call(null,G__15851__15859);
var G__15880 = G__15851__15859;
node__15854 = G__15879;
G__15851__15855 = G__15880;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
listen_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return listen_BANG___15860.call(this,nds,event,func);
case  4 :
return listen_BANG___15861.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_BANG_;
})()
;
/**
* removing a specific event from the selected nodes
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___15896 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15897 = (function (nds,event,func,capture){
var wrapper__15882 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15883__15884 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15883__15884))
{var node__15885 = cljs.core.first.call(null,G__15883__15884);
var G__15883__15886 = G__15883__15884;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15882)))
{goog.events.unlisten.call(null,node__15885,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15882.unlisten(node__15885,func,capture);
}
var temp__3698__auto____15892 = cljs.core.next.call(null,G__15883__15886);

if(cljs.core.truth_(temp__3698__auto____15892))
{var G__15883__15893 = temp__3698__auto____15892;

{
var G__15899 = cljs.core.first.call(null,G__15883__15893);
var G__15900 = G__15883__15893;
node__15885 = G__15899;
G__15883__15886 = G__15900;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
unlisten_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return unlisten_BANG___15896.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15897.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten_BANG_;
})()
;
/**
* removes all listeners for a given set of events on the selected nodes
* @param {...*} var_args
*/
domina.events.remove_listeners_BANG_ = (function() { 
var remove_listeners_BANG___delegate = function (nds,event_list){
var G__15901__15902 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15901__15902))
{var node__15903 = cljs.core.first.call(null,G__15901__15902);
var G__15901__15904 = G__15901__15902;

while(true){
var map_func__15906 = ((function (node__15903,G__15901__15904){
return (function (p1__15881_SHARP_){
var wrapper__15905 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15881_SHARP_);

if(cljs.core.truth_(wrapper__15905))
{return wrapper__15905.unlisten(node__15903);
} else
{return goog.events.removeAll.call(null,node__15903,cljs.core.name.call(null,p1__15881_SHARP_));
}
});})(node__15903,G__15901__15904))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15906,event_list));
var temp__3698__auto____15907 = cljs.core.next.call(null,G__15901__15904);

if(cljs.core.truth_(temp__3698__auto____15907))
{var G__15901__15908 = temp__3698__auto____15907;

{
var G__15911 = cljs.core.first.call(null,G__15901__15908);
var G__15912 = G__15901__15908;
node__15903 = G__15911;
G__15901__15904 = G__15912;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
};
var remove_listeners_BANG_ = function (nds,var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return remove_listeners_BANG___delegate.call(this, nds, event_list);
};
remove_listeners_BANG_.cljs$lang$maxFixedArity = 1;
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15913){
var nds = cljs.core.first(arglist__15913);
var event_list = cljs.core.rest(arglist__15913);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15914 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15915 = (cljs.core.truth_(wrapper__15914)?wrapper__15914.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15917 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15917.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15918__15919 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15918__15919))
{var node__15920 = cljs.core.first.call(null,G__15918__15919);
var G__15918__15921 = G__15918__15919;

while(true){
goog.events.fireListeners.call(null,node__15920,nevent__15915,capture,event_obj__15917);
var temp__3698__auto____15922 = cljs.core.next.call(null,G__15918__15921);

if(cljs.core.truth_(temp__3698__auto____15922))
{var G__15918__15923 = temp__3698__auto____15922;

{
var G__15928 = cljs.core.first.call(null,G__15918__15923);
var G__15929 = G__15918__15923;
node__15920 = G__15928;
G__15918__15921 = G__15929;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseenter","﷐'mouseover",domina.events.mouse_enter_leave);
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseleave","﷐'mouseout",domina.events.mouse_enter_leave);
