goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__16092 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__16093 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__16094 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__16093,"caption":table_section_wrapper__16093,"optgroup":opt_wrapper__16092,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__16094,"thead":table_section_wrapper__16093,"th":cell_wrapper__16094,"option":opt_wrapper__16092,"tbody":table_section_wrapper__16093,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__16093});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___16162 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__16170 = (cljs.core.truth_((function (){var and__3546__auto____16163 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____16163))
{return no_tbody_QMARK___16162;
} else
{return and__3546__auto____16163;
}
})())?(function (){var and__3546__auto____16166 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____16166))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____16166;
}
})():(cljs.core.truth_((function (){var and__3546__auto____16168 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____16168))
{return no_tbody_QMARK___16162;
} else
{return and__3546__auto____16168;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__16171__16174 = cljs.core.seq.call(null,tbody__16170);

if(cljs.core.truth_(G__16171__16174))
{var child__16175 = cljs.core.first.call(null,G__16171__16174);
var G__16171__16176 = G__16171__16174;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____16178 = cljs.core._EQ_.call(null,child__16175.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____16178))
{return cljs.core._EQ_.call(null,child__16175.childNodes.length,0);
} else
{return and__3546__auto____16178;
}
})()))
{child__16175.parentNode.removeChild(child__16175);
} else
{}
var temp__3698__auto____16186 = cljs.core.next.call(null,G__16171__16176);

if(cljs.core.truth_(temp__3698__auto____16186))
{var G__16171__16190 = temp__3698__auto____16186;

{
var G__16199 = cljs.core.first.call(null,G__16171__16190);
var G__16200 = G__16171__16190;
child__16175 = G__16199;
G__16171__16176 = G__16200;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__16207 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__16208 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__16207))).toLowerCase();
var vec__16206__16209 = cljs.core.get.call(null,domina.wrap_map,tag_name__16208,"﷐'default".call(null,domina.wrap_map));
var depth__16210 = cljs.core.nth.call(null,vec__16206__16209,0,null);
var start_wrap__16212 = cljs.core.nth.call(null,vec__16206__16209,1,null);
var end_wrap__16213 = cljs.core.nth.call(null,vec__16206__16209,2,null);
var div__16224 = (function (){var wrapper__16220 = (function (){var div__16215 = document.createElement("div");

div__16215.innerHTML = cljs.core.str.call(null,start_wrap__16212,html__16207,end_wrap__16213);
return div__16215;
})();
var level__16221 = depth__16210;

while(true){
if(cljs.core.truth_((level__16221 > 0)))
{{
var G__16236 = wrapper__16220.lastChild;
var G__16237 = (level__16221 - 1);
wrapper__16220 = G__16236;
level__16221 = G__16237;
continue;
}
} else
{return wrapper__16220;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16224,html__16207);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16225 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16225))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__16207);
} else
{return and__3546__auto____16225;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16224,html__16207);
} else
{}
return div__16224.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____16242 = content;

if(cljs.core.truth_(and__3546__auto____16242))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16242;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16243 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16243))
{return or__3548__auto____16243;
} else
{var or__3548__auto____16244 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16244))
{return or__3548__auto____16244;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16248 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16248))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16248;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16249 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16249))
{return or__3548__auto____16249;
} else
{var or__3548__auto____16251 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16251))
{return or__3548__auto____16251;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16261 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16261))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16261;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(cljs.core.truth_((void 0 === domina.t16272)))
{
/**
* @constructor
*/
domina.t16272 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16272.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16272");
});
domina.t16272.prototype.domina$DomContent$ = true;
domina.t16272.prototype.domina$DomContent$nodes = (function (_){
var this__16274 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16274.class_name)));
});
domina.t16272.prototype.domina$DomContent$single_node = (function (_){
var this__16276 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16276.class_name)));
});
domina.t16272.prototype.cljs$core$IMeta$ = true;
domina.t16272.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16278 = this;
return this__16278.__meta;
});
domina.t16272.prototype.cljs$core$IWithMeta$ = true;
domina.t16272.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16281 = this;
return (new domina.t16272(this__16281.class_name,this__16281.by_class,__meta));
});
domina.t16272;
} else
{}
return (new domina.t16272(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__16303_SHARP_){
return p1__16303_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__16306_SHARP_,p2__16307_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16306_SHARP_,p2__16307_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16310_SHARP_,p2__16309_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16309_SHARP_,p1__16310_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16384_SHARP_,p2__16383_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16383_SHARP_,p1__16384_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16388_SHARP_,p2__16387_SHARP_){
return goog.dom.replaceNode.call(null,p2__16387_SHARP_,p1__16388_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__16401 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16401)))
{return null;
} else
{return s__16401;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__16404__16406 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16404__16406))
{var n__16410 = cljs.core.first.call(null,G__16404__16406);
var G__16404__16411 = G__16404__16406;

while(true){
goog.style.setStyle.call(null,n__16410,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16415 = cljs.core.next.call(null,G__16404__16411);

if(cljs.core.truth_(temp__3698__auto____16415))
{var G__16404__16418 = temp__3698__auto____16415;

{
var G__16429 = cljs.core.first.call(null,G__16404__16418);
var G__16430 = G__16404__16418;
n__16410 = G__16429;
G__16404__16411 = G__16430;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16431){
var content = cljs.core.first(arglist__16431);
var name = cljs.core.first(cljs.core.next(arglist__16431));
var value = cljs.core.rest(cljs.core.next(arglist__16431));
return set_style_BANG___delegate.call(this, content, name, value);
});
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__16434__16435 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16434__16435))
{var n__16438 = cljs.core.first.call(null,G__16434__16435);
var G__16434__16439 = G__16434__16435;

while(true){
n__16438.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16446 = cljs.core.next.call(null,G__16434__16439);

if(cljs.core.truth_(temp__3698__auto____16446))
{var G__16434__16451 = temp__3698__auto____16446;

{
var G__16463 = cljs.core.first.call(null,G__16434__16451);
var G__16464 = G__16434__16451;
n__16438 = G__16463;
G__16434__16439 = G__16464;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16466){
var content = cljs.core.first(arglist__16466);
var name = cljs.core.first(cljs.core.next(arglist__16466));
var value = cljs.core.rest(cljs.core.next(arglist__16466));
return set_attr_BANG___delegate.call(this, content, name, value);
});
return set_attr_BANG_;
})()
;
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__16473__16475 = pair.split(/\s*:\s*/);
var k__16478 = cljs.core.nth.call(null,vec__16473__16475,0,null);
var v__16479 = cljs.core.nth.call(null,vec__16473__16475,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16480 = k__16478;

if(cljs.core.truth_(and__3546__auto____16480))
{return v__16479;
} else
{return and__3546__auto____16480;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16478.toLowerCase()),v__16479);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16492 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16492)))
{return domina.parse_style_attributes.call(null,style__16492);
} else
{if(cljs.core.truth_(style__16492.cssText))
{return domina.parse_style_attributes.call(null,style__16492.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16497 = domina.single_node.call(null,content);
var attrs__16498 = node__16497.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16486_SHARP_){
var attr__16512 = attrs__16498.item(p1__16486_SHARP_);
var value__16514 = attr__16512.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16515 = cljs.core.not_EQ_.call(null,null,value__16514);

if(cljs.core.truth_(and__3546__auto____16515))
{return cljs.core.not_EQ_.call(null,"",value__16514);
} else
{return and__3546__auto____16515;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16512.nodeName.toLowerCase())],[attr__16512.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16498.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16547__16552 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16547__16552))
{var G__16554__16556 = cljs.core.first.call(null,G__16547__16552);
var vec__16555__16557 = G__16554__16556;
var name__16558 = cljs.core.nth.call(null,vec__16555__16557,0,null);
var value__16559 = cljs.core.nth.call(null,vec__16555__16557,1,null);
var G__16547__16560 = G__16547__16552;

var G__16554__16561 = G__16554__16556;
var G__16547__16562 = G__16547__16560;

while(true){
var vec__16563__16564 = G__16554__16561;
var name__16565 = cljs.core.nth.call(null,vec__16563__16564,0,null);
var value__16566 = cljs.core.nth.call(null,vec__16563__16564,1,null);
var G__16547__16567 = G__16547__16562;

domina.set_style_BANG_.call(null,content,name__16565,value__16566);
var temp__3698__auto____16568 = cljs.core.next.call(null,G__16547__16567);

if(cljs.core.truth_(temp__3698__auto____16568))
{var G__16547__16572 = temp__3698__auto____16568;

{
var G__16573 = cljs.core.first.call(null,G__16547__16572);
var G__16574 = G__16547__16572;
G__16554__16561 = G__16573;
G__16547__16562 = G__16574;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__16575__16576 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16575__16576))
{var G__16578__16580 = cljs.core.first.call(null,G__16575__16576);
var vec__16579__16581 = G__16578__16580;
var name__16582 = cljs.core.nth.call(null,vec__16579__16581,0,null);
var value__16583 = cljs.core.nth.call(null,vec__16579__16581,1,null);
var G__16575__16584 = G__16575__16576;

var G__16578__16585 = G__16578__16580;
var G__16575__16615 = G__16575__16584;

while(true){
var vec__16616__16617 = G__16578__16585;
var name__16618 = cljs.core.nth.call(null,vec__16616__16617,0,null);
var value__16619 = cljs.core.nth.call(null,vec__16616__16617,1,null);
var G__16575__16620 = G__16575__16615;

domina.set_attr_BANG_.call(null,content,name__16618,value__16619);
var temp__3698__auto____16623 = cljs.core.next.call(null,G__16575__16620);

if(cljs.core.truth_(temp__3698__auto____16623))
{var G__16575__16624 = temp__3698__auto____16623;

{
var G__16625 = cljs.core.first.call(null,G__16575__16624);
var G__16626 = G__16575__16624;
G__16578__16585 = G__16625;
G__16575__16615 = G__16626;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has.call(null,domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__16630__16662 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16630__16662))
{var node__16684 = cljs.core.first.call(null,G__16630__16662);
var G__16630__16716 = G__16630__16662;

while(true){
goog.dom.classes.add.call(null,node__16684,class$);
var temp__3698__auto____16718 = cljs.core.next.call(null,G__16630__16716);

if(cljs.core.truth_(temp__3698__auto____16718))
{var G__16630__16719 = temp__3698__auto____16718;

{
var G__16720 = cljs.core.first.call(null,G__16630__16719);
var G__16721 = G__16630__16719;
node__16684 = G__16720;
G__16630__16716 = G__16721;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__16723__16724 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16723__16724))
{var node__16725 = cljs.core.first.call(null,G__16723__16724);
var G__16723__16726 = G__16723__16724;

while(true){
goog.dom.classes.remove.call(null,node__16725,class$);
var temp__3698__auto____16727 = cljs.core.next.call(null,G__16723__16726);

if(cljs.core.truth_(temp__3698__auto____16727))
{var G__16723__16728 = temp__3698__auto____16727;

{
var G__16732 = cljs.core.first.call(null,G__16723__16728);
var G__16733 = G__16723__16728;
node__16725 = G__16732;
G__16723__16726 = G__16733;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get.call(null,domina.single_node.call(null,content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__16734 = (function (content){
return text.call(null,content,true);
});
var text__16735 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16734.call(this,content);
case  2 :
return text__16735.call(this,content,normalize);
}
throw('Invalid arity: ' + arguments.length);
};
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__16741__16742 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16741__16742))
{var node__16743 = cljs.core.first.call(null,G__16741__16742);
var G__16741__16744 = G__16741__16742;

while(true){
goog.dom.setTextContent.call(null,node__16743,value);
var temp__3698__auto____16745 = cljs.core.next.call(null,G__16741__16744);

if(cljs.core.truth_(temp__3698__auto____16745))
{var G__16741__16746 = temp__3698__auto____16745;

{
var G__16747 = cljs.core.first.call(null,G__16741__16746);
var G__16748 = G__16741__16746;
node__16743 = G__16747;
G__16741__16744 = G__16748;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue.call(null,domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__16752__16753 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16752__16753))
{var node__16754 = cljs.core.first.call(null,G__16752__16753);
var G__16752__16755 = G__16752__16753;

while(true){
goog.dom.forms.setValue.call(null,node__16754,value);
var temp__3698__auto____16756 = cljs.core.next.call(null,G__16752__16755);

if(cljs.core.truth_(temp__3698__auto____16756))
{var G__16752__16757 = temp__3698__auto____16756;

{
var G__16759 = cljs.core.first.call(null,G__16752__16757);
var G__16760 = G__16752__16757;
node__16754 = G__16759;
G__16752__16755 = G__16760;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,html_string){
var allows_inner_html_QMARK___16770 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16771 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16772 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16773 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16772);
var fallback__16774 = (function (p1__16762_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16762_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16775 = allows_inner_html_QMARK___16770;

if(cljs.core.truth_(and__3546__auto____16775))
{var and__3546__auto____16777 = (function (){var or__3548__auto____16776 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16776))
{return or__3548__auto____16776;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16771);
}
})();

if(cljs.core.truth_(and__3546__auto____16777))
{return cljs.core.not.call(null,special_tag_QMARK___16773);
} else
{return and__3546__auto____16777;
}
} else
{return and__3546__auto____16775;
}
})()))
{var value__16778 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16781__16782 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16781__16782))
{var node__16783 = cljs.core.first.call(null,G__16781__16782);
var G__16781__16784 = G__16781__16782;

while(true){
goog.events.removeAll.call(null,node__16783);
node__16783.innerHTML = value__16778;
var temp__3698__auto____16785 = cljs.core.next.call(null,G__16781__16784);

if(cljs.core.truth_(temp__3698__auto____16785))
{var G__16781__16786 = temp__3698__auto____16785;

{
var G__16787 = cljs.core.first.call(null,G__16781__16786);
var G__16788 = G__16781__16786;
node__16783 = G__16787;
G__16781__16784 = G__16788;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16779){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16779)))
{var e__16780 = e16779;

fallback__16774.call(null,value__16778);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16779;
} else
{}
}
}} else
{fallback__16774.call(null,html_string);
}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__16789 = domina.nodes.call(null,parent_content);
var children__16790 = domina.nodes.call(null,child_content);
var first_child__16800 = (function (){var frag__16791 = document.createDocumentFragment();

var G__16792__16793 = cljs.core.seq.call(null,children__16790);

if(cljs.core.truth_(G__16792__16793))
{var child__16794 = cljs.core.first.call(null,G__16792__16793);
var G__16792__16795 = G__16792__16793;

while(true){
frag__16791.appendChild(child__16794);
var temp__3698__auto____16798 = cljs.core.next.call(null,G__16792__16795);

if(cljs.core.truth_(temp__3698__auto____16798))
{var G__16792__16799 = temp__3698__auto____16798;

{
var G__16802 = cljs.core.first.call(null,G__16792__16799);
var G__16803 = G__16792__16799;
child__16794 = G__16802;
G__16792__16795 = G__16803;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16791;
})();
var other_children__16801 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16789) - 1),(function (){
return first_child__16800.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16789)))
{f.call(null,cljs.core.first.call(null,parents__16789),first_child__16800);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16768_SHARP_,p2__16769_SHARP_){
return f.call(null,p1__16768_SHARP_,p2__16769_SHARP_);
}),cljs.core.rest.call(null,parents__16789),other_children__16801));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16804 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16805 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_item__16804.call(this,nl);
case  2 :
return lazy_nl_via_item__16805.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16807 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16808 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_array_ref__16807.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16808.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
/**
* Early versions of IE have things which are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,list_thing)))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.truth_((function (){var x__6764__auto____16810 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16811 = x__6764__auto____16810;

if(cljs.core.truth_(and__3546__auto____16811))
{var and__3546__auto____16812 = x__6764__auto____16810.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16812))
{var and__3546__auto____16813 = x__6764__auto____16810.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16813))
{return cljs.core.not.call(null,x__6764__auto____16810.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16813;
}
} else
{return and__3546__auto____16812;
}
} else
{return and__3546__auto____16811;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6764__auto____16810);
}
})()))
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(list_thing.length))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(cljs.core.truth_("﷐'default"))
{return cljs.core.cons.call(null,list_thing);
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,content)))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.truth_((function (){var x__6764__auto____16817 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16818 = x__6764__auto____16817;

if(cljs.core.truth_(and__3546__auto____16818))
{var and__3546__auto____16819 = x__6764__auto____16817.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16819))
{var and__3546__auto____16820 = x__6764__auto____16817.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16820))
{return cljs.core.not.call(null,x__6764__auto____16817.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16820;
}
} else
{return and__3546__auto____16819;
}
} else
{return and__3546__auto____16818;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6764__auto____16817);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(content.length))
{return domina.lazy_nodelist.call(null,content);
} else
{if(cljs.core.truth_("﷐'default"))
{return cljs.core.cons.call(null,content);
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,content)))
{return null;
} else
{if(cljs.core.truth_((function (){var x__6764__auto____16821 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16822 = x__6764__auto____16821;

if(cljs.core.truth_(and__3546__auto____16822))
{var and__3546__auto____16823 = x__6764__auto____16821.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16823))
{var and__3546__auto____16824 = x__6764__auto____16821.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16824))
{return cljs.core.not.call(null,x__6764__auto____16821.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16824;
}
} else
{return and__3546__auto____16823;
}
} else
{return and__3546__auto____16822;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6764__auto____16821);
}
})()))
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(content.length))
{return content.item(0);
} else
{if(cljs.core.truth_("﷐'default"))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16825 = null;
var G__16825__16826 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16825__16827 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16825 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16825__16826.call(this,nodelist,n);
case  3 :
return G__16825__16827.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16825;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16829 = null;
var G__16829__16830 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16829__16831 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16829 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16829__16830.call(this,nodelist,n);
case  3 :
return G__16829__16831.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16829;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16836 = null;
var G__16836__16837 = (function (coll,n){
return coll.item(n);
});
var G__16836__16838 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16836 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16836__16837.call(this,coll,n);
case  3 :
return G__16836__16838.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16836;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
