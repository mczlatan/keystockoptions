(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={wa:!0},ea={};try{ea.__proto__=da;ca=ea.wa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ja(a){if(a){for(var b=ia,c=["Object","assign"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&ha(b,c,{configurable:!0,writable:!0,value:a})}}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ja(function(a){return a||ka});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function la(a){return"number"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ma(){}
function na(a){a.fa=void 0;a.getInstance=function(){return a.fa?a.fa:a.fa=new a}}
function oa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==oa(a)}
function pa(a){var b=oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function qa(a){return"function"==oa(a)}
function ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var sa="closure_uid_"+(1E9*Math.random()>>>0),ta=0;function ua(a,b,c){return a.call.apply(a.bind,arguments)}
function va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=ua:x=va;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function wa(a,b){t(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ya=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},za=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function Aa(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ba(a,b){var c=xa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ca(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Da(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ea=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ga(a){if(!Ha.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ia,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ja,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ka,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(La,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ma,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Na,"&#0;"));return a}
var Ia=/&/g,Ja=/</g,Ka=/>/g,La=/"/g,Ma=/'/g,Na=/\x00/g,Ha=/[\x00&<>"']/;function Oa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Pa;a:{var Qa=p.navigator;if(Qa){var Ta=Qa.userAgent;if(Ta){Pa=Ta;break a}}Pa=""}function D(a){return-1!=Pa.indexOf(a)}
;function Ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Va(a,b){var c=pa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(a){for(var b in a)return!1;return!0}
function Za(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function $a(a){var b={},c;for(c in a)b[c]=a[c];return b}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var cb=D("Opera"),db=D("Trident")||D("MSIE"),eb=D("Edge"),fb=D("Gecko")&&!(-1!=Pa.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),gb=-1!=Pa.toLowerCase().indexOf("webkit")&&!D("Edge");function hb(){var a=p.document;return a?a.documentMode:void 0}
var ib;a:{var jb="",kb=function(){var a=Pa;if(fb)return/rv:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(db)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gb)return/WebKit\/(\S+)/.exec(a);if(cb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kb&&(jb=kb?kb[1]:"");if(db){var lb=hb();if(null!=lb&&lb>parseFloat(jb)){ib=String(lb);break a}}ib=jb}var mb=ib,nb;var ob=p.document;nb=ob&&db?hb()||("CSS1Compat"==ob.compatMode?parseInt(mb,10):5):void 0;var pb=!db||9<=Number(nb);function qb(){this.b="";this.f=rb}
qb.prototype.J=!0;qb.prototype.H=function(){return this.b};
qb.prototype.ea=!0;qb.prototype.Z=function(){return 1};
function sb(a){return a instanceof qb&&a.constructor===qb&&a.f===rb?a.b:"type_error:TrustedResourceUrl"}
var rb={};function E(){this.b="";this.f=tb}
E.prototype.J=!0;E.prototype.H=function(){return this.b};
E.prototype.ea=!0;E.prototype.Z=function(){return 1};
function ub(a){return a instanceof E&&a.constructor===E&&a.f===tb?a.b:"type_error:SafeUrl"}
var vb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function wb(a){if(a instanceof E)return a;a=a.J?a.H():String(a);vb.test(a)||(a="about:invalid#zClosurez");return xb(a)}
var tb={};function xb(a){var b=new E;b.b=a;return b}
xb("about:blank");function yb(){this.da="";this.va=zb;this.b=null}
yb.prototype.ea=!0;yb.prototype.Z=function(){return this.b};
yb.prototype.J=!0;yb.prototype.H=function(){return this.da};
var zb={};function Ab(a,b){var c=new yb;c.da=a;c.b=b;return c}
Ab("<!DOCTYPE html>",0);Ab("",0);Ab("<br>",0);function Bb(a,b){var c=b instanceof E?b:wb(b);a.href=ub(c)}
function Cb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?sb(b):b instanceof qb?sb(b):b instanceof E?ub(b):wb(b).H()}
function Db(a,b){a.src=sb(b)}
;function Eb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=Eb.prototype;k.clone=function(){return new Eb(this.x,this.y)};
k.equals=function(a){return a instanceof Eb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Fb(a,b){this.width=a;this.height=b}
k=Fb.prototype;k.clone=function(){return new Fb(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Gb(a){var b=document;return r(a)?b.getElementById(a):a}
function Hb(a,b){Ua(b,function(b,d){b&&b.J&&(b=b.H());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ib.hasOwnProperty(d)?a.setAttribute(Ib[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Ib={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Jb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!pb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ga(g.name),'"');if(g.type){f.push(' type="',Ga(g.type),'"');var h={};bb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Hb(f,g));2<d.length&&Kb(e,f,d);return f}
function Kb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!pa(f)||ra(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(ra(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(qa(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ca(f):f,d)}}}
function Lb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Mb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Nb(a){Ob();var b=new qb;b.b=a;return b}
var Ob=ma;var Pb=/^[\w+/_-]+[=]{0,2}$/;function Qb(){var a=p.document.querySelector("script[nonce]");if(a&&(a=a.nonce||a.getAttribute("nonce"))&&Pb.test(a))return a}
;var Rb=document,F=window;function Sb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Tb=(new Date).getTime();function Ub(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Vb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+u+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,u;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Wb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Xb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Xb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Xb(a){var b=Vb();b.update(a);return b.ya().toLowerCase()}
;function Yb(a){this.b=a||{cookie:""}}
k=Yb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ea(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ea(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Zb=new Yb("undefined"==typeof document?null:document);Zb.f=3950;function $b(a){var b=Ub(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Yb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Yb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Wb(Ub(d),b,a||null)].join(" "):null}return null}
;function ac(a,b){this.h=a;this.g=b;this.f=0;this.b=null}
ac.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.h();return a};
function bc(a,b){a.g(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function cc(a){p.setTimeout(function(){throw a;},0)}
var dc;
function ec(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.la;c.la=null;a()}};
return function(a){d.next={la:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function fc(){this.f=this.b=null}
var hc=new ac(function(){return new gc},function(a){a.reset()});
fc.prototype.add=function(a,b){var c=hc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
fc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function gc(){this.next=this.scope=this.b=null}
gc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
gc.prototype.reset=function(){this.next=this.scope=this.b=null};function ic(a,b){jc||kc();lc||(jc(),lc=!0);mc.add(a,b)}
var jc;function kc(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);jc=function(){a.then(nc)}}else jc=function(){var a=nc;
!qa(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(dc||(dc=ec()),dc(a)):p.setImmediate(a)}}
var lc=!1,mc=new fc;function nc(){for(var a;a=mc.remove();){try{a.b.call(a.scope)}catch(b){cc(b)}bc(hc,a)}lc=!1}
;var oc=null,pc=null;function qc(){this.f=-1}
;function rc(){this.f=64;this.b=[];this.j=[];this.l=[];this.g=[];this.g[0]=128;for(var a=1;a<this.f;++a)this.g[a]=0;this.i=this.h=0;this.reset()}
A(rc,qc);rc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.h=0};
function sc(a,b,c){c||(c=0);var d=a.l;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
rc.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.h;d<b;){if(0==f)for(;d<=c;)sc(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){sc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){sc(this,e);f=0;break}}this.h=f;this.i+=b}};
rc.prototype.digest=function(){var a=[],b=8*this.i;56>this.h?this.update(this.g,56-this.h):this.update(this.g,this.f-(this.h-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;sc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function G(){this.h=this.h;this.B=this.B}
G.prototype.h=!1;G.prototype.dispose=function(){this.h||(this.h=!0,this.m())};
function tc(a,b){a.h?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
G.prototype.m=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];pa(d)?vc.apply(null,d):uc(d)}}
;function wc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function xc(a,b){if(a.classList)var c=a.classList.contains(b);else c=wc(a),c=0<=xa(c,b);return c}
function yc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):xc(a,"inverted-hdpi")&&(a.className=ya(wc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var zc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Ac(){}
Ac.prototype.next=function(){throw zc;};
Ac.prototype.D=function(){return this};
function Bc(a){if(a instanceof Ac)return a;if("function"==typeof a.D)return a.D(!1);if(pa(a)){var b=0,c=new Ac;c.next=function(){for(;;){if(b>=a.length)throw zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Cc(a,b){if(pa(a))try{C(a,b,void 0)}catch(c){if(c!==zc)throw c;}else{a=Bc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==zc)throw c;}}}
function Dc(a){if(pa(a))return Ca(a);a=Bc(a);var b=[];Cc(a,function(a){b.push(a)});
return b}
;function Ec(a,b){this.h={};this.b=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ec)for(c=Fc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Fc(a){Gc(a);return a.b.concat()}
k=Ec.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||Hc;Gc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Hc(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.h={};this.g=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.f--,this.g++,this.b.length>2*this.f&&Gc(this),!0):!1};
function Gc(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.f++,this.b.push(a),this.g++);this.h[a]=b};
k.forEach=function(a,b){for(var c=Fc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new Ec(this)};
k.D=function(a){Gc(this);var b=0,c=this.g,d=this,e=new Ac;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw zc;var e=d.b[b++];return a?e:d.h[e]};
return e};(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",ma,b);p.removeEventListener("test",ma,b);return a})();function Ic(a){var b=[];Jc(new Kc,a,b);return b.join("")}
function Kc(){}
function Jc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Jc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Lc(d,c),c.push(":"),Jc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Lc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Mc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Nc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Lc(a,b){b.push('"',a.replace(Nc,function(a){var b=Mc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Mc[a]=b);return b}),'"')}
;function Oc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Pc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.l=void 0;this.g=this.f=this.h=null;this.i=this.j=!1;if(a!=ma)try{var c=this;a.call(b,function(a){Qc(c,2,a)},function(a){Qc(c,3,a)})}catch(d){Qc(this,3,d)}}
function Rc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
Rc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var Sc=new ac(function(){return new Rc},function(a){a.reset()});
function Tc(a,b,c){var d=Sc.get();d.g=a;d.f=b;d.context=c;return d}
function Uc(a){return new H(function(b,c){c(a)})}
function Vc(a,b,c){Wc(a,b,c,null)||ic(y(b,a))}
function Xc(a){return new H(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Vc(e,b,c)})}
function Yc(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Y:!0,value:f}:{Y:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Vc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
H.prototype.then=function(a,b,c){return Zc(this,qa(a)?a:null,qa(b)?b:null,c)};
Oc(H);function $c(a,b){var c=Tc(b,b,void 0);c.h=!0;ad(a,c);return a}
function bd(a,b){return Zc(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&ic(function(){var b=new cd(a);dd(this,b)},this)};
function dd(a,b){if(0==a.b)if(a.h){var c=a.h;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?dd(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):ed(c),fd(c,e,3,b)))}a.h=null}else Qc(a,3,b)}
function ad(a,b){a.f||2!=a.b&&3!=a.b||gd(a);a.g?a.g.next=b:a.f=b;a.g=b}
function Zc(a,b,c,d){var e=Tc(null,null,null);e.b=new H(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof cd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.h=a;ad(a,e);return e.b}
H.prototype.o=function(a){this.b=0;Qc(this,2,a)};
H.prototype.w=function(a){this.b=0;Qc(this,3,a)};
function Qc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Wc(c,a.o,a.w,a)||(a.l=c,a.b=b,a.h=null,gd(a),3!=b||c instanceof cd||hd(a,c)))}
function Wc(a,b,c,d){if(a instanceof H)return ad(a,Tc(b||ma,c||null,d)),!0;if(Pc(a))return a.then(b,c,d),!0;if(ra(a))try{var e=a.then;if(qa(e))return id(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function id(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function gd(a){a.j||(a.j=!0,ic(a.B,a))}
function ed(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.g=null);return b}
H.prototype.B=function(){for(var a;a=ed(this);)fd(this,a,this.b,this.l);this.j=!1};
function fd(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.h)a.i=!1;if(b.b)b.b.h=null,jd(b,c,d);else try{b.h?b.g.call(b.context):jd(b,c,d)}catch(e){kd.call(null,e)}bc(Sc,b)}
function jd(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function hd(a,b){a.i=!0;ic(function(){a.i&&kd.call(null,b)})}
var kd=cc;function cd(a){B.call(this,a)}
A(cd,B);cd.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.f={};this.l=!!a}
A(I,G);k=I.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function ld(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Aa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
k.K=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=ma):(c&&Ba(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.I=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];md(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.K(c)}}return 0!=e}return!1};
function md(a,b,c){ic(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.K,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.m=function(){I.u.m.call(this);this.clear();this.g.length=0};function nd(a){this.b=a}
nd.prototype.set=function(a,b){q(b)?this.b.set(a,Ic(b)):this.b.remove(a)};
nd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
nd.prototype.remove=function(a){this.b.remove(a)};function od(a){this.b=a}
A(od,nd);function pd(a){this.data=a}
function qd(a){return!q(a)||a instanceof pd?a:new pd(a)}
od.prototype.set=function(a,b){od.u.set.call(this,a,qd(b))};
od.prototype.f=function(a){a=od.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
od.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rd(a){this.b=a}
A(rd,od);rd.prototype.set=function(a,b,c){if(b=qd(b)){if(c){if(c<z()){rd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}rd.u.set.call(this,a,b)};
rd.prototype.f=function(a){var b=rd.u.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())rd.prototype.remove.call(this,a);else return b}};function sd(a){this.b=a}
A(sd,rd);function td(){}
;function ud(){}
A(ud,td);ud.prototype.clear=function(){var a=Dc(this.D(!0)),b=this;C(a,function(a){b.remove(a)})};function vd(a){this.b=a}
A(vd,ud);k=vd.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.D=function(a){var b=0,c=this.b,d=new Ac;d.next=function(){if(b>=c.length)throw zc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function wd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(wd,vd);function xd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(xd,vd);function yd(a,b){this.f=a;this.b=null;if(db&&!(9<=Number(nb))){zd||(zd=new Ec);this.b=zd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),zd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(yd,ud);var Ad={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},zd=null;function Bd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Ad[a]})}
k=yd.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Bd(a),b);Cd(this)};
k.get=function(a){a=this.b.getAttribute(Bd(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Bd(a));Cd(this)};
k.D=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Ac;d.next=function(){if(b>=c.length)throw zc;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Cd(this)};
function Cd(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Dd(a,b){this.f=a;this.b=b+"::"}
A(Dd,ud);Dd.prototype.set=function(a,b){this.f.set(this.b+a,b)};
Dd.prototype.get=function(a){return this.f.get(this.b+a)};
Dd.prototype.remove=function(a){this.f.remove(this.b+a)};
Dd.prototype.D=function(a){var b=this.f.D(!0),c=this,d=new Ac;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function Ed(a){if(!qa(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function Fd(){var a=null;return bd(new H(function(b,c){a=Ed(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var Gd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(Gd)}
function Hd(a){return a?decodeURI(a):a}
function Id(a,b,c){if(w(b))for(var d=0;d<b.length;d++)Id(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Jd(a){var b=[],c;for(c in a)Id(c,a[c],b);return b.join("&")}
function Kd(a,b){var c=Jd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Md(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");Cb(e,b,"preload");d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var Nd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Od=/\.(cn|com\.bi|do|sl|ba|by|ma)$/;function Pd(a){return Nd.test(a)&&!Od.test(a)}
var Qd=p;function Rd(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];K[3]>=z()&&b.push("adsid="+encodeURIComponent(K[1]));return a+"?"+b.join("&")}
var K,L;function Sd(){Qd=p;K=Qd.googleToken=Qd.googleToken||{};var a=z();K[1]&&K[3]>a&&0<K[2]||(K[1]="",K[2]=-1,K[3]=-1,K[4]="",K[6]="");L=Qd.googleIMState=Qd.googleIMState||{};Pd(L[1])||(L[1]=".google.com");w(L[5])||(L[5]=[]);"boolean"==typeof L[6]||(L[6]=!1);w(L[7])||(L[7]=[]);la(L[8])||(L[8]=0)}
function Td(){Sd();return K[1]}
var N={ca:function(){return 0<L[8]},
Qa:function(){L[8]++},
Ra:function(){0<L[8]&&L[8]--},
Sa:function(){L[8]=0},
shouldRetry:function(){return!1},
ma:function(){return L[5]},
ka:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ia:function(){if(!N.ca()){var a=p.document,b=function(b){b=Rd(b);a:{try{var c=Qb();break a}catch(h){}c=void 0}var d=c;Md(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=Nb(b);Db(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),N.Qa()}catch(h){}},c=L[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Ud(a){Sd();var b=Qd.googleToken[5]||0;a&&(0!=b||K[3]>=z()?N.ka(a):(N.ma().push(a),N.ia()));K[3]>=z()&&K[2]>=z()||N.ia()}
function Vd(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";Sd();1==e?N.Sa():N.Ra();if(!f&&N.shouldRetry())Pd(".google.com")&&(L[1]=".google.com"),N.ia();else{var u=Qd.googleToken=Qd.googleToken||{},M=0==e&&f&&r(f)&&!g&&la(h)&&0<h&&la(l)&&0<l&&r(m);g=g&&!N.ca()&&(!(K[3]>=z())||"NT"==K[1]);var Z=!(K[3]>=
z())&&0!=e;if(M||g||Z)g=z(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&(g="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e,p.google_image_requests||(p.google_image_requests=[]),Z=p.document.createElement("img"),Z.src=g,p.google_image_requests.push(Z)),u[5]=e,u[1]=f,u[2]=h,u[3]=l,u[4]=m,u[6]=b,Sd();if(M||!N.ca()){e=N.ma();for(f=0;f<e.length;f++)N.ka(e[f]);e.length=0}}};
Ud(a)}
;function Wd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Xd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Xd,void 0);function P(a){Wd(Xd,arguments)}
function Q(a,b){return a in Xd?Xd[a]:b}
function Yd(a){return Q(a,void 0)}
function Zd(){return Q("PLAYER_CONFIG",{})}
;function $d(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
;function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;function ae(a){a&&(a.dataset?a.dataset[be("loaded")]="true":a.setAttribute("data-loaded","true"))}
function ce(a,b){return a?a.dataset?a.dataset[be(b)]:a.getAttribute("data-"+b):null}
var de={};function be(a){return de[a]||(de[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function U(a,b){qa(a)&&(a=$d(a));return window.setTimeout(a,b)}
function ee(a){window.clearTimeout(a)}
;var fe=v("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsubPubsubInstance",fe,void 0);var ge=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",ge,void 0);var he=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",he,void 0);var ie=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",ie,void 0);
function je(a,b){var c=ke();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){ge[d]&&b.apply(window,c)};
try{ie[a]?f():U(f,0)}catch(g){R(g)}},void 0);
ge[d]=!0;he[a]||(he[a]=[]);he[a].push(d);return d}return 0}
function le(a){var b=ke();b&&(la(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete ge[a]}))}
function me(a,b){var c=ke();c&&c.publish.apply(c,arguments)}
function ne(a){var b=ke();if(b)if(b.clear(a),a)oe(a);else for(var c in he)oe(c)}
function ke(){return v("ytPubsubPubsubInstance")}
function oe(a){he[a]&&(a=he[a],C(a,function(a){ge[a]&&delete ge[a]}),a.length=0)}
;var pe=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,qe=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function re(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(pe,""),c=c.replace(qe,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else se(a,b)}
function se(a,b){var c=te(a),d=document.getElementById(c),e=d&&ce(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=je(c,b);var g=""+(b[sa]||(b[sa]=++ta));ue[g]=e}f||(d=ve(a,c,function(){ce(d,"loaded")||(ae(d),me(c),U(y(ne,c),0))}))}}
function ve(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Db(d,Nb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function we(a){a=te(a);var b=document.getElementById(a);b&&(ne(a),b.parentNode.removeChild(b))}
function xe(a,b){if(a&&b){var c=""+(b[sa]||(b[sa]=++ta));(c=ue[c])&&le(c)}}
function te(a){var b=document.createElement("a");Bb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Oa(a)}
var ue={};var ye=null;function ze(){var a=Q("BG_I",null),b=Q("BG_IU",null),c=Q("BG_P",void 0);b?re(b,function(){window.botguard?Ae(c):(we(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?Ae(c):R(Error("Unable to load Botguard from JS"),"WARNING"))}
function Ae(a){ye=new window.botguard.bg(a);S("botguard_periodic_refresh")&&O()}
function Be(){return null!=ye}
function Ce(){return ye?ye.invoke():null}
;z();var De=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ee(){if(!De)return null;var a=De();return"open"in a?a:null}
function Fe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ge(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Da(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var He={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ie=!1;
function Je(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=Hd(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Hd(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in He){if((e=d=Q(He[f]))&&!(e=c)){e=f;var g=Q("CORS_HEADER_WHITELIST")||{},h=Hd(J(a)[3]||null);e=h?(g=g[h])?0<=xa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Ke(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Le(a,b);var d=Me(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&ee(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ha&&b.ha.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.oa&&0<b.timeout&&(f=U(function(){e||(e=!0,ee(f),b.oa.call(b.context||p))},b.timeout))}else Ne(a,b)}
function Ne(a,b){var c=b.format||"JSON";a=Le(a,b);var d=Me(a,b),e=!1,f,g=Oe(a,function(a){if(!e){e=!0;f&&ee(f);var d=Fe(a),g=null;if(d||400<=a.status&&500>a.status)g=Pe(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ha&&b.ha.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.L&&0<b.timeout&&(f=U(function(){e||(e=!0,g.abort(),ee(f),b.L.call(b.context||p,g))},b.timeout));
return g}
function Le(a,b){b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.cb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Ge(f[1]||"");for(var g in d)f[g]=d[g];a=Kd(c,f)+e}return a}
function Me(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=Yd("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.ib||Hd(J(a)[3]||null)&&!b.withCredentials&&Hd(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Ge(e),bb(e,f),e=b.pa&&"JSON"==b.pa?JSON.stringify(e):Jd(e));f=e||f&&!Ya(f);!Ie&&f&&"POST"!=b.method&&(Ie=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Pe(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Qe(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Re(a)})}c&&Se(d);
return d}
function Se(a){if(ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ab(a[b],null);a[c]=d}else Se(a[b])}}
function Qe(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Re(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Te(a,b){b.method="POST";b.A||(b.A={});Ne(a,b)}
function Oe(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&$d(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Ee();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Je(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var Ue={},Ve=0;
function We(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Pa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof E||(a=a.J?a.H():String(a),vb.test(a)||(a="about:invalid#zClosurez"),a=xb(a)),b=ub(a),"about:invalid#zClosurez"===b?a="":(b instanceof yb?a=b:(a=null,b.ea&&(a=b.Z()),b=Ga(b.J?b.H():String(b)),a=Ab(b,a)),a=encodeURIComponent(String(Ic(a instanceof yb&&a.constructor===yb&&a.va===zb?a.da:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=Jb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Oe(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Oe(a,b,"GET","",d):Xe(a,b))}
function Xe(a,b){var c=new Image,d=""+Ve++;Ue[d]=c;c.onload=c.onerror=function(){b&&Ue[d]&&b();delete Ue[d]};
c.src=a}
;var Ye={},Ze=0;
function $e(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Ze)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(M){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(M){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Ye[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={cb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},A:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.A.stack=l);for(var m in f)h.A["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.A[u]=m[u];Ne(Q("ECATCHER_REPORT_HOST","")+"/error_204",h);Ye[a.message]=!0;Ze++}}}
;var af=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",af,void 0);function bf(a){Wd(af,arguments)}
;function cf(){}
function df(a,b){return ef(a,0,b)}
function ff(a,b){return ef(a,1,b)}
;function gf(){}
n(gf,cf);function ef(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function hf(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):ee(a)}}
gf.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
gf.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
na(gf);gf.getInstance();var jf=[],kf=!1;function lf(){if("1"!=Va(Zd(),"args","privembed")){var a=function(){kf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
re("//static.doubleclick.net/instream/ad_status.js",a);jf.push(ff(function(){kf||"google_ad_status"in window||(xe("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},5E3))}}
function mf(){return parseInt(Q("DCLKSTAT",0),10)}
;var nf=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++nf},void 0);var of={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in of||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function qf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
pf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Xa,void 0);var rf=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",rf,void 0);function sf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=sf(a,b,c,d);if(e)return e;e=++rf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new pf(d);if(!Lb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new pf(b);
b.currentTarget=a;return c.call(a,b)};
g=$d(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Xa[e]=[a,b,c,g,d];return e}
function tf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Xa){var b=Xa[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[a]}}))}
;function uf(a){this.o=a;this.b=null;this.i=0;this.l=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.g=0;this.C=V(window,"mousemove",x(this.F,this));a=x(this.w,this);qa(a)&&(a=$d(a));this.G=window.setInterval(a,25)}
A(uf,G);uf.prototype.F=function(a){q(a.b)||qf(a);var b=a.b;q(a.f)||qf(a);this.b=new Eb(b,a.f)};
uf.prototype.w=function(){if(this.b){var a=O();if(0!=this.i){var b=this.l,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.g]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.o();this.j=d}this.i=a;this.l=this.b;this.g=(this.g+1)%4}};
uf.prototype.m=function(){window.clearInterval(this.G);tf(this.C)};var vf={};function wf(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Oa?!1:b.Oa;if(null==v("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;t("_lact",c,window);t("_fact",c,window);-1==c&&xf();V(document,"keydown",xf);V(document,"keyup",xf);V(document,"mousedown",xf);V(document,"mouseup",xf);a&&(b?V(window,"touchmove",function(){yf("touchmove",200)}):(V(window,"resize",function(){yf("resize",200)}),V(window,"scroll",function(){yf("scroll",200)})));
new uf(function(){yf("mouse",100)});
V(document,"touchstart",xf);V(document,"touchend",xf)}}
function yf(a,b){vf[a]||(vf[a]=!0,ff(function(){xf();vf[a]=!1},b))}
function xf(){null==v("_lact",window)&&wf();var a=z();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function zf(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var Af=Math.pow(2,16)-1,Bf={log_event:"events",log_interaction:"interactions"},Cf=Object.create(null);Cf.log_event="GENERIC_EVENT_LOGGING";Cf.log_interaction="INTERACTION_LOGGING";var Df={},Ef=0,W=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",W,void 0);var Ff=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Ff,void 0);var Gf=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",Gf,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Hf(a,b){if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Ff[a.V.token]=d;c=If(a.endpoint,a.V.token)}else c=If(a.endpoint);c.push(a.payload);Df[a.endpoint]=new b;c.length>=(Number(S("web_logging_max_batch")||0)||20)?Jf():Kf()}
function Jf(){ee(Ef);if(!Ya(W)){for(var a in W){var b=Df[a];if(b){var c=void 0,d=a,e=b,f=Bf[d],g=Gf[d]||{};Gf[d]=g;b=Math.round(O());for(c in W[d]){var h=e.b;h={client:{hl:h.Ha,gl:h.Ga,clientName:h.Fa,clientVersion:h.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(h.client.screenDensityFloat=String(l));Q("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});h={context:h};h[f]=If(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(l=Ff[c])a:{var m=h,u=c;if(l.videoId)var M="VIDEO";else if(l.playlistId)M="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:M}]}delete Ff[c];l=h;l.requestTimeMs=b;(M=Q("EVENT_ID",void 0))&&S("enable_gel_web_client_event_id")&&(m=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>Af&&(m=1),P("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:M,clientCounter:m});
Lf(e,d,h,{retry:!0})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete W[a]}}Ya(W)||Kf()}}
function Kf(){ee(Ef);Ef=U(Jf,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function If(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
;function Mf(a,b,c,d){var e=Nf,f={};f.eventTimeMs=Math.round(c||O());f[a]=b;f.context={lastActivityMs:String(c?-1:zf())};Hf({endpoint:"log_event",payload:f,V:d},e)}
;function Of(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
function Pf(a){var b={"X-Goog-Visitor-Id":Q("VISITOR_DATA","")},c;a?c="Bearer "+v("gapi.auth.getToken")().eb:c=$b([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));return b}
function Qf(a){a=Object.assign({},a);delete a.Authorization;var b=$b();if(b){var c=new rc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!oc)for(oc={},pc={},c=0;65>c;c++)oc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),pc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=pc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,u=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[u],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Rf(a,b,c,d){Zb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Sf(){var a=new wd;(a=a.isAvailable()?new Dd(a,"yt.innertube"):null)||(a=new yd("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new rd(a):null;this.f=document.domain||window.location.hostname}
Sf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ic(b))}catch(f){return}else e=escape(b);Rf(a,e,c,this.f)};
Sf.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Zb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Sf.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Zb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Tf=new Sf;function Uf(a,b,c,d){if(d)return null;d=Tf.get("nextId",!0)||1;var e=Tf.get("requests",!0)||{};e[d]={method:a,request:b,authState:Qf(c),requestTime:Math.round(O())};Tf.set("nextId",d+1,86400,!0);Tf.set("requests",e,86400,!0);return d}
function Vf(a){var b=Tf.get("requests",!0)||{};delete b[a];Tf.set("requests",b,86400,!0)}
function Wf(a){var b=Tf.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState;var f=Qf(Pf(!1));a:{var g=void 0;for(g in e)if(!(g in f)||e[g]!==f[g]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Lf(a,d.method,e,{}));delete b[c]}}Tf.set("requests",b,86400,!0)}}
;function Nf(a){var b=this;this.b=a||{innertubeApiKey:Yd("INNERTUBE_API_KEY"),innertubeApiVersion:Yd("INNERTUBE_API_VERSION"),Fa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Yd("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ha:Yd("INNERTUBE_CONTEXT_HL"),Ga:Yd("INNERTUBE_CONTEXT_GL"),Ia:Yd("INNERTUBE_HOST_OVERRIDE")||"",Ja:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};df(function(){Wf(b)})}
function Lf(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",A:c,pa:"JSON",L:function(){d.L()},
oa:d.L,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
na:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.b.Ja||!1,g=Pf(f);Object.assign(e.headers,g);var h="",l=a.b.Ia;l&&(h=l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);h=""+h+Of(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;var m;if(d.retry&&S("retry_web_logging_batches")&&(m=Uf(b,c,g,f))){var u=e.onSuccess,M=e.na;e.onSuccess=function(a,b){Vf(m);u(a,b)};
c.na=function(a,b){Vf(m);M(a,b)}}try{S("use_fetch_for_op_xhr")?Ke(h,e):Te(h,e)}catch(Z){if("InvalidAccessError"==Z)m&&(Vf(m),m=0),R(Error("An extension is blocking network request."),"WARNING");
else throw Z;}m&&df(function(){Wf(a)},5E3)}
;var Xf=z().toString();
function Yf(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Xf)for(a=1,b=0;b<Xf.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Xf.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Zf=Yf();function $f(a,b,c,d,e){this.h=a;this.i=b;this.g=c;this.f=d;this.b=e}
function ag(a){var b={};void 0!==a.h?b.trackingParams=a.h:(b.veType=a.i,null!=a.g&&(b.veCounter=a.g),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=ag(a.b));return b}
var bg=1;function cg(){var a=Q("ROOT_VE_TYPE",void 0);return a?new $f(void 0,a,void 0):null}
function dg(){var a=Q("client-screen-nonce")||Q("EVENT_ID");return a?a:null}
function eg(a,b){function c(){setTimeout(function(){a&&Mf("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Zf,clientScreenNonce:a})},0)}
P("client-screen-nonce",a);P("ROOT_VE_TYPE",b);"requestAnimationFrame"in window?window.requestAnimationFrame(c):c()}
;function fg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Hd(J(window.location.href)[3]||null);f&&e.push(f);f=Hd(J(d)[3]||null);if(0<=xa(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Bb(e,d),d=e.href),d){f=J(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
dg();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Oa(d).toString(36),b=b?Jd(b):"",Rf(d,b,h||5))}else h="ST-"+Oa(d).toString(36),b=b?Jd(b):"",Rf(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=Kd(a,l)+m;a=a instanceof E?a:wb(a);c.href=ub(a)}return!0}
;function gg(a,b,c){hg({attachChild:{csn:a,parentVisualElement:ag(b),visualElements:[ag(c)]}})}
function hg(a){var b=Nf;a.eventTimeMs=Math.round(O());a.lactMs=zf();Hf({endpoint:"log_interaction",payload:a},b)}
;function ig(a){a=a||{};this.url=a.url||"";this.args=a.args||$a(jg);this.assets=a.assets||{};this.attrs=a.attrs||$a(kg);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var jg={enablejsapi:1},kg={};ig.prototype.clone=function(){var a=new ig,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==oa(c)?$a(c):c}return a};function lg(){G.call(this);this.b=[]}
n(lg,G);lg.prototype.m=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}G.prototype.m.call(this)};var mg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ng(a){a=a||"";if(window.spf){var b=a.match(mg);spf.style.load(a,b?b[1]:"",void 0)}else og(a)}
function og(a){var b=pg(a),c=document.getElementById(b),d=c&&ce(c,"loaded");d||c&&!d||(c=qg(a,b,function(){ce(c,"loaded")||(ae(c),me(b),U(y(ne,b),0))}))}
function qg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Nb(a);Cb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function pg(a){var b=document.createElement("A");a=xb(a);Bb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Oa(b)}
;var rg=v("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",rg,void 0);var sg=0;function tg(a){rg[a]=rg[a]||{count:0};var b=rg[a];b.count++;b.time=O();sg||(sg=df(ug,5E3));return 10<b.count?(11==b.count&&$e(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function ug(){var a=O(),b;for(b in rg)6E4<a-rg[b].time&&delete rg[b];sg=0}
;function vg(a,b){this.version=a;this.args=b}
;function wg(a){this.topic=a}
wg.prototype.toString=function(){return this.topic};var xg=v("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsub2Pubsub2Instance",xg,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function yg(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function zg(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function Ag(){var a=zg(),b;for(b in a)hf(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function Bg(a,b){vg.call(this,1,arguments)}
n(Bg,vg);function Cg(a,b){vg.call(this,1,arguments)}
n(Cg,vg);var Dg=new wg("aft-recorded"),Eg=new wg("timing-sent");var Fg={vc:!0},Gg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},Hg="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Kg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Lg=!1;
function Mg(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=Ng();var c=O();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=zg();if(c=b[a])hf(c),b[a]=0;Og()["tick_"+a]=void 0;O();Pg()?(b=Qg(),"_start"==a?tg("baseline_"+b)||Mf("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):tg("tick_"+a+"_"+b)||Mf("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=Yd("TIMING_ACTION"),a=
Ng(),v("ytglobal.timingready_")&&b&&a._start&&(b=Rg()))){S("tighter_critical_section")&&!Lg&&(yg(Dg,new Bg(Math.round(b-a._start),void 0)),Lg=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Sg()}}
function Tg(){var a=Ug().info.yt_lt="hot_bg";Og().info_yt_lt=a;if(Pg())if("yt_lt"in Gg){var b=Gg.yt_lt;0<=xa(Kg,b)&&(a=!!a);if(Pg()){var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;a=Qg();b=Object.keys(c).join("");tg("info_"+b+"_"+a)||(c.clientActionNonce=a,Mf("latencyActionInfo",c,void 0,void 0))}}else 0<=xa(Hg,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function Rg(){var a=Ng();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Sg(){Ag();if(!Pg()){var a=Ng(),b=Ug().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in Fg){var f=za(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=v("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Vg(f,e),Wg(),Xg(),Yg(!1,void 0),Q("TIMING_ACTION")&&P("PREVIOUS_ACTION",Q("TIMING_ACTION")),P("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:Q("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+v("ytplayer.config.assets.js");(l=X.getEntriesByName?X.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=Rg();Zg()&&"youtube"==g&&(Tg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=O();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=v("ytdebug.logTiming"))&&a(f,b);Vg(f,e,void 0);yg(Eg,new Cg(b.aft+(h||0),void 0))}}}
var Xg=x(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ma,X);
function Vg(a,b,c){if(S("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";S("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||We(a,void 0,void 0,void 0,
f)}catch(g){We(a,void 0,void 0,void 0,f)}}else We(a);Yg(!0,c)}
function Qg(){var a=Ug().nonce;a||(a=Yf(),Ug().nonce=a);return a}
function Ng(){return Ug().tick}
function Og(){var a=Ug();"gel"in a||(a.gel={});return a.gel}
function Ug(){return v("ytcsi.data_")||Wg()}
function Wg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Yg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Zg(){var a=Ng(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ug().info.yt_pvis}
function Pg(){return!!S("csi_on_gel")}
;function $g(a,b){G.call(this);this.l=this.S=a;this.G=b;this.o=!1;this.f={};this.P=this.F=null;this.w=new I;tc(this,y(uc,this.w));this.i={};this.N=this.R=this.g=this.X=this.b=null;this.M=!1;this.j=this.C=null;this.T={};this.ta=["onReady"];this.W=null;this.ja=NaN;this.O={};ah(this);this.U("WATCH_LATER_VIDEO_ADDED",this.La.bind(this));this.U("WATCH_LATER_VIDEO_REMOVED",this.Ma.bind(this));this.U("onAdAnnounce",this.xa.bind(this));this.ua=new lg(this);tc(this,y(uc,this.ua))}
n($g,G);k=$g.prototype;
k.ga=function(a){if(!this.h){a instanceof ig||(a=new ig(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.G,this.b.attrs.id=this.G);this.l.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.R||(this.R=bh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.l.style.width=Sb(Number(a)||a);if(a=this.b.attrs.height)this.l.style.height=Sb(Number(a)||
a);ch(this);this.o&&dh(this)}};
k.Aa=function(){return this.X};
function dh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function eh(a){var b=!0,c=fh(a);c&&a.b&&(a=a.b,b=ce(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function ch(a){if(!a.h&&!a.M){var b=eh(a);if(b&&"html5"==(fh(a)?"html5":null))a.N="html5",a.o||gh(a);else if(hh(a),a.N="html5",b&&a.j)a.S.appendChild(a.j),gh(a);else{a.b.loaded=!0;var c=!1;a.C=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.S,b);gh(a)};
a.M=!0;b?a.C():(re(a.b.assets.js,a.C),ng(a.b.assets.css),ih(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function fh(a){var b=Gb(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
function gh(a){if(!a.h){var b=fh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||jh(a)):a.ja=U(function(){gh(a)},50)}}
function jh(a){ah(a);a.o=!0;var b=fh(a);b.addEventListener&&(a.F=kh(a,b,"addEventListener"));b.removeEventListener&&(a.P=kh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=kh(a,b,e))}for(var f in a.i)a.F(f,a.i[f]);dh(a);a.R&&a.R(a.f);a.w.I("onReady",a.f)}
function kh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,R(e,"WARNING",void 0,void 0,void 0))}}}
function ah(a){a.o=!1;if(a.P)for(var b in a.i)a.P(b,a.i[b]);for(var c in a.O)ee(parseInt(c,10));a.O={};a.F=null;a.P=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.U.bind(a);a.f.removeEventListener=a.Ta.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.Ba.bind(a);a.f.getPlayerType=a.Ca.bind(a);a.f.getCurrentVideoConfig=a.Aa.bind(a);a.f.loadNewVideoConfig=a.ga.bind(a);a.f.isReady=a.Ka.bind(a)}
k.Ka=function(){return this.o};
k.U=function(a,b){var c=this,d=bh(this,b);if(d){if(!(0<=xa(this.ta,a)||this.i[a])){var e=lh(this,a);this.F&&this.F(a,e)}this.w.subscribe(a,d);"onReady"==a&&this.o&&U(function(){d(c.f)},0)}};
k.Ta=function(a,b){if(!this.h){var c=bh(this,b);c&&ld(this.w,a,c)}};
function bh(a,b){var c=b;if("string"==typeof b){if(a.T[b])return a.T[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.T[b]=c}return c?c:null}
function lh(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.w.I(b,c);else{var f=U(function(){if(!a.h){a.w.I(b,c);var d=a.O,e=String(f);e in d&&delete d[e]}},0);
Za(a.O,String(f))}};
return c}
k.xa=function(a){me("a11y-announce",a)};
k.La=function(a){me("WATCH_LATER_VIDEO_ADDED",a)};
k.Ma=function(a){me("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ca=function(){return this.N||(fh(this)?"html5":null)};
k.Ba=function(){return this.W};
function hh(a){Mg("dcp");a.cancel();ah(a);a.N=null;a.b&&(a.b.loaded=!1);var b=fh(a);b&&(eh(a)||!ih(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.S;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.C&&xe(this.b.assets.js,this.C);ee(this.ja);this.M=!1};
k.m=function(){hh(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){R(b)}this.T=null;for(var a in this.i)p[this.i[a]]=null;this.X=this.b=this.f=null;delete this.S;delete this.l;G.prototype.m.call(this)};
function ih(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var mh={},nh="player_uid_"+(1E9*Math.random()>>>0);function oh(a){var b="player";b=r(b)?Gb(b):b;var c=nh+"_"+(b[sa]||(b[sa]=++ta)),d=mh[c];if(d)return d.ga(a),d.f;d=new $g(b,c);mh[c]=d;me("player-added",d.f);tc(d,y(ph,d));U(function(){d.ga(a)},0);
return d.f}
function ph(a){delete mh[a.G]}
;function qh(){var a=rh(),b=sh();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var sh=Mb(function(){var a=new wd;return a.isAvailable()?new sd(a):null}),rh=Mb(function(){var a=new xd;
return a.isAvailable()?new sd(a):null});function th(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function uh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return vh(a)}
function vh(a,b,c){if(ra(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function wh(a,b,c,d){if(ra(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function xh(a){var b=a.video_id||a.videoId;if(r(b)){var c=qh()||{},d=qh()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=sh();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function yh(a){G.call(this);this.b=a;this.b.subscribe("command",this.qa,this);this.f={};this.i=!1}
A(yh,G);k=yh.prototype;k.start=function(){this.i||this.h||(this.i=!0,zh(this.b,"RECEIVING"))};
k.qa=function(a,b,c){if(this.i&&!this.h){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Va,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&Ah(this,d.event);break;default:this.g.isReady()&&this.g[a]&&(b=Bh(a,b||{}),c=this.g.handleExternalCall(a,b,c||null),(c=Ch(a,c))&&this.i&&!this.h&&zh(this.b,a,c))}}};
k.Va=function(a,b){this.i&&!this.h&&zh(this.b,a,this.aa(a,b))};
k.aa=function(a,b){if(null!=b)return{value:b}};
function Ah(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.m=function(){var a=this.b;a.h||ld(a.b,"command",this.qa,this);this.b=null;for(var b in this.f)Ah(this,b);yh.u.m.call(this)};function Dh(a,b){yh.call(this,b);this.g=a;this.start()}
A(Dh,yh);Dh.prototype.addEventListener=function(a,b){this.g.addEventListener(a,b)};
Dh.prototype.removeEventListener=function(a,b){this.g.removeEventListener(a,b)};
function Bh(a,b){switch(a){case "loadVideoById":return b=vh(b),xh(b),[b];case "cueVideoById":return b=vh(b),xh(b),[b];case "loadVideoByPlayerVars":return xh(b),[b];case "cueVideoByPlayerVars":return xh(b),[b];case "loadPlaylist":return b=wh(b),xh(b),[b];case "cuePlaylist":return b=wh(b),xh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Ch(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Dh.prototype.aa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Dh.u.aa.call(this,a,b)};
Dh.prototype.m=function(){Dh.u.m.call(this);delete this.g};function Eh(a,b,c,d){G.call(this);this.f=b||null;this.o="*";this.g=c||null;this.sessionId=null;this.channel=d||null;this.C=!!a;this.l=x(this.w,this);window.addEventListener("message",this.l)}
n(Eh,G);Eh.prototype.w=function(a){if(!("*"!=this.g&&a.origin!=this.g||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.C&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.g=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=xa(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
Eh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Ic(a);c.postMessage(d,this.o)}catch(e){R(e,"WARNING")}}};
Eh.prototype.m=function(){window.removeEventListener("message",this.l);G.prototype.m.call(this)};function Fh(a,b,c){Eh.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Fh,Eh);function Gh(){var a=this.f=new Fh(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Pa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.g=[];this.j=!1;this.i={}}
k=Gh.prototype;k.Pa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Hh(this,a)),this.i[a]=!0)):this.sa(a,b,c)};
k.sa=function(){};
function Hh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.ba());this.sendMessage("onReady");C(this.g,this.ra,this);this.g=[]};
k.ba=function(){return null};
function Ih(a,b){a.sendMessage("infoDelivery",b)}
k.ra=function(a){this.j?this.f.sendMessage(a):this.g.push(a)};
k.sendMessage=function(a,b){this.ra({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Jh(a){Gh.call(this);this.b=a;this.h=[];this.addEventListener("onReady",x(this.Na,this));this.addEventListener("onVideoProgress",x(this.Za,this));this.addEventListener("onVolumeChange",x(this.ab,this));this.addEventListener("onApiChange",x(this.Ua,this));this.addEventListener("onPlaybackQualityChange",x(this.Wa,this));this.addEventListener("onPlaybackRateChange",x(this.Xa,this));this.addEventListener("onStateChange",x(this.Ya,this));this.addEventListener("onWebglSettingsChanged",x(this.bb,
this))}
A(Jh,Gh);k=Jh.prototype;k.sa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&th(a)){var d=b;if(ra(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=vh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=uh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=wh.apply(window,d)}d=e}xh(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);th(a)&&Ih(this,this.ba())}};
k.Na=function(){var a=x(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ba=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ba(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Ya=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Ih(this,a)};
k.Wa=function(a){Ih(this,{playbackQuality:a})};
k.Xa=function(a){Ih(this,{playbackRate:a})};
k.Ua=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ab=function(){Ih(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Za=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Ih(this,a)};
k.bb=function(){if(this.b.getSphericalProperties){var a={sphericalProperties:this.b.getSphericalProperties()};Ih(this,a)}};
k.dispose=function(){Jh.u.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.b.removeEventListener(b.eventType,b.listener)}this.h=[]};function Kh(){G.call(this);this.b=new I;tc(this,y(uc,this.b))}
A(Kh,G);Kh.prototype.subscribe=function(a,b,c){return this.h?0:this.b.subscribe(a,b,c)};
Kh.prototype.j=function(a,b){this.h||this.b.I.apply(this.b,arguments)};function Lh(a,b,c){Kh.call(this);this.f=a;this.g=b;this.i=c}
A(Lh,Kh);function zh(a,b,c){if(!a.h){var d=a.f;d.h||a.g!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(Ic(a),d.g))}}
Lh.prototype.m=function(){this.g=this.f=null;Lh.u.m.call(this)};function Mh(a,b,c){G.call(this);this.b=a;this.g=c;this.i=V(window,"message",x(this.j,this));this.f=new Lh(this,a,b);tc(this,y(uc,this.f))}
A(Mh,G);Mh.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin==this.g)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.h||c.j("command",b.command,b.data,a.origin))}};
Mh.prototype.m=function(){tf(this.i);this.b=null;Mh.u.m.call(this)};function Nh(){var a=$a(Oh),b;return bd(new H(function(c,d){a.onSuccess=function(a){Fe(a)?c(a):d(new Ph("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Ph("Unknown request error","net.unknown",a))};
a.L=function(a){d(new Ph("Request timed out","net.timeout",a))};
b=Ne("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof cd&&b.abort();
return Uc(a)})}
function Ph(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Ph,B);function Qh(a){this.h=void 0===a?null:a;this.f=0;this.b=null}
Qh.prototype.then=function(a,b,c){return this.h?this.h.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Pc(a)?a:Rh(a)):2===this.f&&b?(a=b.call(c,this.b),Pc(a)?a:Sh(a)):this};
Qh.prototype.getValue=function(){return this.b};
Oc(Qh);function Sh(a){var b=new Qh;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Rh(a){var b=new Qh;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Th(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Uh;this.isTimeout=a instanceof Ph&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof cd}
n(Th,B);Th.prototype.name="BiscottiError";function Uh(){B.call(this,"Biscotti ID is missing from server")}
n(Uh,B);Uh.prototype.name="BiscottiMissingError";var Oh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Vh=null;function Wh(){if("1"===Va(Zd(),"args","privembed"))return Uc(Error("Biscotti ID is not available in private embed mode"));Vh||(Vh=bd(Nh().then(Xh),function(a){return Yh(2,a)}));
return Vh}
function Xh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Uh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Uh;a=a.id;Zh(a);Vh=Rh(a);$h(18E5,2);return a}
function Yh(a,b){var c=new Th(b);Zh("");Vh=Sh(c);0<a&&$h(12E4,a-1);throw c;}
function $h(a,b){U(function(){bd(Nh().then(Xh,function(a){return Yh(b,a)}),ma)},a)}
function Zh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function ai(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Wh()}catch(b){return Uc(b)}}
;function bi(a){B.apply(this,arguments)}
n(bi,B);bi.prototype.name="YuzuError";function ci(){var a=new bi("ID is missing"),b=new bi("Timeout"),c=null,d=!1;Vd(function(){c=Td();d=!0});
if(d)return c?Rh(c):Sh(a);var e=new H(function(b,c){Vd(function(){var d=Td();d?b(d):c(a)})}),f=Fd().then(function(){return Uc(b)});
return $c(Xc([e,f]),function(){return f.cancel()})}
;function di(a){if("1"!==Va(Zd(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||wa("yt.ads.biscotti.getId_",Wh));try{var b=ai();if(S("enable_yuzu")){v("yt.ads.yuzu.getId_")||t("yt.ads.yuzu.getId_",ci,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Uc(d)}}else c=Uc(new bi("unimplemented"));Yc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Y||a.Y){b=b.value;a=a.value;var c={};c.dt=Tb;c.flash="0";a:{try{var d=window.top.location.href}catch(Sa){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?F:h;try{var l=h.history.length}catch(Sa){l=0}d.u_his=l;d.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(d.u_h=F.screen.height,d.u_w=F.screen.width,d.u_ah=F.screen.availHeight,d.u_aw=F.screen.availWidth,d.u_cd=F.screen.colorDepth);F.navigator&&F.navigator.plugins&&(d.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(d.u_nmime=
F.navigator.mimeTypes.length);d.ca_type="image";if(S("enable_server_side_search_pyv")||S("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var u=l.screenY}catch(Sa){}try{var M=l.outerWidth;var Z=l.outerHeight}catch(Sa){}try{var Ig=l.innerWidth;var Jg=l.innerHeight}catch(Sa){}m=[l.screenLeft,l.screenTop,m,u,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,M,Z,Ig,Jg];u=window.top;try{var T=(u||window).document,Ra="CSS1Compat"==T.compatMode?T.documentElement:T.body;
var Fa=(new Fb(Ra.clientWidth,Ra.clientHeight)).round()}catch(Sa){Fa=new Fb(-12245933,-12245933)}T={};Ra=0;p.SVGElement&&p.document.createElementNS&&(Ra|=1);T.bc=Ra;T.bih=Fa.height;T.biw=Fa.width;T.brdim=m.join();Fa=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Rb.visibilityState||Rb.webkitVisibilityState||Rb.mozVisibilityState||""]||0,T.wgl=!!F.WebGLRenderingContext,T);for(var Ld in Fa)d[Ld]=Fa[Ld]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=ei++;Te("//www.youtube.com/ad_data_204",
{Da:!1,A:d,withCredentials:!0})}});
U(di,18E5)}catch(d){R(d)}}}
var ei=0;var Y=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function fi(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Zb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
k=fi.prototype;k.get=function(a,b){gi(a);hi(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){gi(a);hi(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
k.remove=function(a){gi(a);hi(a);delete Y[a]};
k.save=function(){var a=this.b,b=[],c;for(c in Y)b.push(c+"="+encodeURIComponent(String(Y[c])));Rf(a,b.join("&"),63072E3)};
k.clear=function(){for(var a in Y)delete Y[a]};
function hi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function gi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ii(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
na(fi);var ji=null,ki=null,li=null,mi={};function ni(a){Mf(a.payload_name,a.payload,void 0,void 0)}
function oi(a){var b=a.id;a=a.ve_type;var c=bg++;a=new $f(void 0,a,c,void 0,void 0);mi[b]=a;b=dg();c=cg();b&&c&&gg(b,c,a)}
function pi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(eg(b,a),a=cg()))for(var c in mi){var d=mi[c];d&&gg(b,a,d)}}
function qi(a){mi[a.id]=new $f(a.tracking_params)}
function ri(a){var b=dg();a=mi[a.id];b&&a&&(S("interaction_click_on_gel_web")?Mf("visualElementGestured",{csn:b,ve:ag(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):hg({click:{csn:b,visualElement:ag(a)}}))}
function si(a){a=a.ids;var b=dg();if(b)for(var c=0;c<a.length;c++){var d=mi[a[c]];d&&Mf("visualElementShown",{csn:b,ve:ag(d),eventType:1})}}
function ti(){var a=ji;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",P,void 0);t("yt.config.set",P,void 0);t("yt.setMsg",bf,void 0);t("yt.msgs.set",bf,void 0);t("yt.logging.errors.log",$e,void 0);
t("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);di(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&xh(a.args);ji=a=oh(a);a.addEventListener("onScreenChanged",pi);a.addEventListener("onLogClientVeCreated",oi);a.addEventListener("onLogServerVeCreated",qi);a.addEventListener("onLogToGel",ni);
a.addEventListener("onLogVeClicked",ri);a.addEventListener("onLogVesShown",si);a.addEventListener("onReady",ti);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?li=new Jh(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(ki=new Mh(window.parent,b,c),li=new Dh(a,ki.f));Q("BG_P")&&(Q("BG_I")||Q("BG_IU"))&&ze();lf()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){We(a+"mac_204?action_fcts=1");return!0},void 0);
var ui=$d(function(){Mg("ol");var a=fi.getInstance(),b=!!((ii("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&xc(document.body,"exp-invert-logo"))if(c&&!xc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):xc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&xc(document.body,"inverted-hdpi")&&yc();b!=c&&(b="f"+(Math.floor(119/31)+1),d=ii(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Y[b]:Y[b]=d.toString(16).toString(),a.save())}),vi=$d(function(){var a=ji;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&(ye=null);a=0;for(var b=jf.length;a<b;a++)hf(jf[a]);jf.length=0;we("//static.doubleclick.net/instream/ad_status.js");kf=!1;P("DCLKSTAT",0);vc(li,ki);if(a=ji)a.removeEventListener("onScreenChanged",pi),a.removeEventListener("onLogClientVeCreated",oi),a.removeEventListener("onLogServerVeCreated",qi),a.removeEventListener("onLogToGel",ni),a.removeEventListener("onLogVeClicked",ri),a.removeEventListener("onLogVesShown",si),a.removeEventListener("onReady",
ti),a.destroy();mi={}});
window.addEventListener?(window.addEventListener("load",ui),window.addEventListener("unload",vi)):window.attachEvent&&(window.attachEvent("onload",ui),window.attachEvent("onunload",vi));wa("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||Be);wa("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||Ce);wa("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||mf);wa("yt.player.exports.navigate",v("yt.player.exports.navigate")||fg);
wa("yt.util.activity.init",v("yt.util.activity.init")||wf);wa("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||zf);wa("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||xf);}).call(this);