﻿/* 01.15 pagi, warung JOKHSA24jam, 02 Oktober 2023 gubhugreyot-Lambedigdoyo */
/* html tag: pre class='grPelangi linenums' and grPelangi(); put before close body tag:  */
/* add css in head: grDesert.css or other style */
var DecorationsT,JobT,SourceSpansT,PR,grPelangiOne,grPelangi,IN_GLOBAL_SCOPE=!0,PR_SHOULD_USE_CONTINUATION=!0;"undefined"!=typeof window&&(window.PR_SHOULD_USE_CONTINUATION=PR_SHOULD_USE_CONTINUATION),function(){var E="undefined"!=typeof window?window:{},e=["break,continue,do,else,for,if,return,while"],n=[h=[[e,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],t=[h,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],r=[h,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],s=[h,"abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],a="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",l=[e,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],o=[e,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],i=[e,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],u=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,c="str",d="com",p="typ",f="lit",g="pun",P="pln",L="src",h="atv";function m(e){for(var u=0,c=!1,n=!1,t=0,r=e.length;t<r;++t)if((l=e[t]).ignoreCase)n=!0;else if(/[a-z]/i.test(l.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!(c=!0);break}var s={b:8,t:9,n:10,v:11,f:12,r:13};function d(e){var n=e.charCodeAt(0);if(92!==n)return n;var t=e.charAt(1);return(n=s[t])||("0"<=t&&t<="7"?parseInt(e.substring(1),8):"u"===t||"x"===t?parseInt(e.substring(2),16):e.charCodeAt(1))}function p(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function a(e){for(var n=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),t=n.length,r=[],s=0,a=0;s<t;++s)"("===(o=n[s])?++a:"\\"===o.charAt(0)&&(l=+o.substring(1))&&(l<=a?r[l]=-1:n[s]=p(l));for(s=1;s<r.length;++s)-1===r[s]&&(r[s]=++u);for(var l,s=0,a=0;s<t;++s)"("===(o=n[s])?r[++a]||(n[s]="(?:"):"\\"===o.charAt(0)&&(l=+o.substring(1))&&l<=a&&(n[s]="\\"+r[l]);for(s=0;s<t;++s)"^"===n[s]&&"^"!==n[s+1]&&(n[s]="");if(e.ignoreCase&&c)for(s=0;s<t;++s){var o,i=(o=n[s]).charAt(0);2<=o.length&&"["===i?n[s]=function(e){var n=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),t=[],e="^"===n[0],r=["["];e&&r.push("^");for(var s=e?1:0,a=n.length;s<a;++s){var l,o=n[s];/\\[bdsw]/i.test(o)?r.push(o):(o=d(o),s+2<a&&"-"===n[s+1]?(l=d(n[s+2]),s+=2):l=o,t.push([o,l]),l<65||122<o||(l<65||90<o||t.push([32|Math.max(65,o),32|Math.min(l,90)]),l<97||122<o||t.push([-33&Math.max(97,o),-33&Math.min(l,122)])))}t.sort(function(e,n){return e[0]-n[0]||n[1]-e[1]});for(var i=[],u=[],s=0;s<t.length;++s)(c=t[s])[0]<=u[1]+1?u[1]=Math.max(u[1],c[1]):i.push(u=c);for(s=0;s<i.length;++s){var c=i[s];r.push(p(c[0])),c[1]>c[0]&&(c[1]+1>c[0]&&r.push("-"),r.push(p(c[1])))}return r.push("]"),r.join("")}(o):"\\"!==i&&(n[s]=o.replace(/[a-zA-Z]/g,function(e){e=e.charCodeAt(0);return"["+String.fromCharCode(-33&e,32|e)+"]"}))}return n.join("")}for(var l,o=[],t=0,r=e.length;t<r;++t){if((l=e[t]).global||l.multiline)throw new Error(""+l);o.push("(?:"+a(l)+")")}return new RegExp(o.join("|"),n?"gi":"g")}function y(e,a){var l=/(?:^|\s)nocode(?:\s|$)/,o=[],i=0,u=[],c=0;return function e(n){var t=n.nodeType;if(1==t){if(!l.test(n.className)){for(var r=n.firstChild;r;r=r.nextSibling)e(r);var s=n.nodeName.toLowerCase();"br"!==s&&"li"!==s||(o[c]="\n",u[c<<1]=i++,u[c++<<1|1]=n)}}else 3!=t&&4!=t||(t=n.nodeValue).length&&(t=a?t.replace(/\r\n?/g,"\n"):t.replace(/[ \t\r\n]+/g," "),o[c]=t,u[c<<1]=i,i+=t.length,u[c++<<1|1]=n)}(e),{sourceCode:o.join("").replace(/\n$/,""),spans:u}}function T(e,n,t,r,s){t&&(r(n={sourceNode:e,pre:1,langExtension:null,numberLines:null,sourceCode:t,spans:null,basePos:n,decorations:null}),s.push.apply(s,n.decorations))}var A=/\S/;function v(c,w){var S,C={};!function(){for(var e=c.concat(w),n=[],t={},r=0,s=e.length;r<s;++r){var a=e[r],l=a[3];if(l)for(var o=l.length;0<=--o;)C[l.charAt(o)]=a;var i=a[1],u=""+i;t.hasOwnProperty(u)||(n.push(i),t[u]=null)}n.push(/[\0-\uffff]/),S=m(n)}();var N=w.length,_=function(e){for(var n=e.sourceCode,t=e.basePos,r=e.sourceNode,s=[t,P],a=0,l=n.match(S)||[],o={},i=0,u=l.length;i<u;++i){var c,d=l[i],p=o[d],f=void 0;if("string"==typeof p)c=!1;else{var g=C[d.charAt(0)];if(g)f=d.match(g[1]),p=g[0];else{for(var h=0;h<N;++h)if(g=w[h],f=d.match(g[1])){p=g[0];break}f||(p=P)}!(c=5<=p.length&&"lang-"===p.substring(0,5))||f&&"string"==typeof f[1]||(c=!1,p=L),c||(o[d]=p)}var m,y,v,b,x=a;a+=d.length,c?(m=f[1],v=(y=d.indexOf(m))+m.length,f[2]&&(y=(v=d.length-f[2].length)-m.length),b=p.substring(5),T(r,t+x,d.substring(0,y),_,s),T(r,t+x+y,m,O(b,m),s),T(r,t+x+v,d.substring(v),_,s)):s.push(t+x,p)}e.decorations=s};return _}function b(e){var n=[],t=[];e.tripleQuotedStrings?n.push([c,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?n.push([c,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):n.push([c,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&t.push([c,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(1<r?n.push([d,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):n.push([d,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),t.push([c,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):n.push([d,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(t.push([d,/^\/\/[^\r\n]*/,null]),t.push([d,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));r=e.regexLiterals;r&&(s="/(?=[^/*"+(r=1<r?"":"\n\r")+"])(?:[^/\\x5B\\x5C"+r+"]|\\x5C"+(s=r?".":"[\\S\\s]")+"|\\x5B(?:[^\\x5C\\x5D"+r+"]|\\x5C"+s+")*(?:\\x5D|$))+/",t.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+s+")")]));var s=e.types;s&&t.push([p,s]);s=(""+e.keywords).replace(/^ | $/g,"");s.length&&t.push(["kwd",new RegExp("^(?:"+s.replace(/[\s,]+/g,"|")+")\\b"),null]),n.push([P,/^\s+/,null," \r\n\t "]);s="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(s+="(?!s*/)"),t.push([f,/^@[a-z_$][a-z_$@0-9]*/i,null],[p,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[P,/^[a-z_$][a-z_$@0-9]*/i,null],[f,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[P,/^\\[\s\S]?/,null],[g,new RegExp(s),null]),v(n,t)}function R(e,n,l){for(var o=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,u=e.ownerDocument,t=u.createElement("li");e.firstChild;)t.appendChild(e.firstChild);var r=[t];function c(e){for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var n,t=function e(n,t){var r=t?n.cloneNode(!1):n,t=n.parentNode;if(t){var s=e(t,1),a=n.nextSibling;s.appendChild(r);for(var l=a;l;l=a)a=l.nextSibling,s.appendChild(l)}return r}(e.nextSibling,0);(n=t.parentNode)&&1===n.nodeType;)t=n;r.push(t)}for(var s=0;s<r.length;++s)!function e(n){var t,r,s=n.nodeType;if(1!=s||o.test(n.className))3!=s&&4!=s||!l||(r=(t=n.nodeValue).match(i))&&(s=t.substring(0,r.index),n.nodeValue=s,(r=t.substring(r.index+r[0].length))&&n.parentNode.insertBefore(u.createTextNode(r),n.nextSibling),c(n),s||n.parentNode.removeChild(n));else if("br"===n.nodeName.toLowerCase())c(n),n.parentNode&&n.parentNode.removeChild(n);else for(var a=n.firstChild;a;a=a.nextSibling)e(a)}(r[s]);n===(0|n)&&r[0].setAttribute("value",n);var a=u.createElement("ol");a.className="linenums";for(var d=Math.max(0,n-1|0)||0,s=0,p=r.length;s<p;++s)(t=r[s]).className="L"+(s+d)%10,t.firstChild||t.appendChild(u.createTextNode(" ")),a.appendChild(t);e.appendChild(a)}e=b({keywords:[n,r,t,s,a,l,o,i],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0});var x={};function w(e,n){for(var t=n.length;0<=--t;){var r=n[t];x.hasOwnProperty(r)?E.console&&console.warn("cannot override language handler %s",r):x[r]=e}}function O(e,n){return e&&x.hasOwnProperty(e)||(e=/^\s*</.test(n)?"default-markup":"default-code"),x[e]}function k(e){var n=e.langExtension;try{var t=y(e.sourceNode,e.pre),r=t.sourceCode;e.sourceCode=r,e.spans=t.spans,e.basePos=0,O(n,r)(e),function(e){var n,t,r=(r=/\bMSIE\s(\d+)/.exec(navigator.userAgent))&&+r[1]<=8,s=/\n/g,a=e.sourceCode,l=a.length,o=0,i=e.spans,u=i.length,c=0,d=e.decorations,p=d.length,f=0;for(d[p]=l,t=n=0;t<p;)d[t]!==d[t+2]?(d[n++]=d[t++],d[n++]=d[t++]):t+=2;for(p=n,t=n=0;t<p;){for(var g=d[t],h=d[t+1],m=t+2;m+2<=p&&d[m+1]===h;)m+=2;d[n++]=g,d[n++]=h,t=m}p=d.length=n;var y=e.sourceNode,e="";y&&(e=y.style.display,y.style.display="none");try{for(;c<u;){i[c];var v,b,x,w,S=i[c+2]||l,C=d[f+2]||l,m=Math.min(S,C),N=i[c+1];1!==N.nodeType&&(v=a.substring(o,m))&&(r&&(v=v.replace(s,"\r")),N.nodeValue=v,(x=(b=N.ownerDocument).createElement("span")).className=d[f+1],(w=N.parentNode).replaceChild(x,N),x.appendChild(N),o<S&&(i[c+1]=N=b.createTextNode(a.substring(m,S)),w.insertBefore(N,x.nextSibling))),S<=(o=m)&&(c+=2),C<=o&&(f+=2)}}finally{y&&(y.style.display=e)}}(e)}catch(e){E.console&&console.log(e&&e.stack||e)}}function S(e,n,t){var r=t||!1,t=n||null,n=document.createElement("div");return n.innerHTML="<pre>"+e+"</pre>",n=n.firstChild,r&&R(n,r,!0),k({langExtension:t,numberLines:r,sourceNode:n,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null}),n.innerHTML}function C(h,e){var n=e||document.body,m=n.ownerDocument||document;function t(e){return n.getElementsByTagName(e)}for(var r=[t("pre"),t("code"),t("xmp")],y=[],s=0;s<r.length;++s)for(var a=0,l=r[s].length;a<l;++a)y.push(r[s][a]);r=null;var v=Date;v.now||(v={now:function(){return+new Date}});var b=0,x=/\blang(?:uage)?-([\w.]+)(?!\S)/,w=/\bgrpelangi\b/,S=/\bgrpelangied\b/,C=/pre|xmp/i,N=/^code$/i,_=/^(?:pre|code|xmp)$/i,P={};!function e(){for(var n=E.PR_SHOULD_USE_CONTINUATION?v.now()+250:1/0;b<y.length&&v.now()<n;b++){for(var t=y[b],r=P,s=t;s=s.previousSibling;){var a=s.nodeType,l=(7===a||8===a)&&s.nodeValue;if(l?!/^\??prettify\b/.test(l):3!==a||/\S/.test(s.nodeValue))break;if(l){r={},l.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,n,t){r[n]=t});break}}var o=t.className;if((r!==P||w.test(o))&&!S.test(o)){for(var i,u,c,d,p=!1,f=t.parentNode;f;f=f.parentNode){var g=f.tagName;if(_.test(g)&&f.className&&w.test(f.className)){p=!0;break}}p||(t.className+=" grpelangied",(u=r.lang)||(!(u=o.match(x))&&(i=function(e){for(var n=void 0,t=e.firstChild;t;t=t.nextSibling)var r=t.nodeType,n=1===r?n?e:t:3===r&&A.test(t.nodeValue)?e:n;return n===e?void 0:n}(t))&&N.test(i.tagName)&&(u=i.className.match(x)),u=u&&u[1]),c=C.test(t.tagName)?1:(d=t.currentStyle,c=m.defaultView,(d=d?d.whiteSpace:c&&c.getComputedStyle?c.getComputedStyle(t,null).getPropertyValue("white-space"):0)&&"pre"===d.substring(0,3)),(d="true"===(d=r.linenums)||+d)||(d=!!(d=o.match(/\blinenums\b(?::(\d+))?/))&&(!d[1]||!d[1].length||+d[1])),d&&R(t,d,c),k({langExtension:u,sourceNode:t,numberLines:d,pre:c,sourceCode:null,basePos:null,spans:null,decorations:null}))}}b<y.length?E.setTimeout(e,250):"function"==typeof h&&h()}()}w(e,["default-code"]),w(v([],[[P,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[d,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[g,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),w(v([[P,/^[\s]+/,null," \t\r\n"],[h,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[g,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),w(v([],[[h,/^[\s\S]+/]]),["uq.val"]),w(b({keywords:n,hashComments:!0,cStyleComments:!0,types:u}),["c","cc","cpp","cxx","cyc","m"]),w(b({keywords:"null,true,false"}),["json"]),w(b({keywords:r,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:u}),["cs"]),w(b({keywords:t,cStyleComments:!0}),["java"]),w(b({keywords:i,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),w(b({keywords:l,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),w(b({keywords:a,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),w(b({keywords:o,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),w(b({keywords:s,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),w(b({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),w(v([],[[c,/^[\s\S]+/]]),["regex"]);var N=E.PR={createSimpleLexer:v,registerLangHandler:w,sourceDecorator:b,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:h,PR_COMMENT:d,PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:f,PR_NOCODE:"nocode",PR_PLAIN:P,PR_PUNCTUATION:g,PR_SOURCE:L,PR_STRING:c,PR_TAG:"tag",PR_TYPE:p,grPelangiOne:IN_GLOBAL_SCOPE?E.grPelangiOne=S:grPelangiOne=S,grPelangi:IN_GLOBAL_SCOPE?E.grPelangi=C:grPelangi=C};"function"==typeof(h=E.define)&&h.amd&&h("google-code-prettify",[],function(){return N})}();