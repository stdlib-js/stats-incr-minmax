// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(i=r.length,e(i)===i)&&r.length>=0&&r.length<=4294967295;var i}var i=Number.POSITIVE_INFINITY;function n(e){return 0===e&&1/e===i}var a=Number.NEGATIVE_INFINITY;function t(e){return 0===e&&1/e===a}function o(e){return"number"==typeof e}function s(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function c(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+s(a):s(a)+e,n&&(e="-"+e)),e}var p=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function u(e){var r,i,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,n=parseInt(i,10),!isFinite(n)){if(!o(i))throw new Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(i=(-n).toString(r),e.precision&&(i=c(i,e.precision,e.padRight)),i="-"+i):(i=n.toString(r),n||e.precision?e.precision&&(i=c(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===l.call(e.specifier)?l.call(i):p.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function f(e){return"string"==typeof e}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,w=String.prototype.replace,b=/e\+(\d)$/,m=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,x=/\.0$/,E=/\.0*e/,k=/(\..*[^0])0*e/;function I(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":g(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=w.call(i,k,"$1e"),i=w.call(i,E,"e"),i=w.call(i,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=w.call(i,b,"e+0$1"),i=w.call(i,m,"e-0$1"),e.alternate&&(i=w.call(i,v,"$1."),i=w.call(i,y,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===h.call(e.specifier)?h.call(i):d.call(i)}function T(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function V(e,r,i){var n=r-e.length;return n<0?e:e=i?e+T(n):T(n)+e}var F=String.fromCharCode,S=isNaN,$=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,i,n,a,t,o,s,p,l;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,p=0;p<e.length;p++)if(f(n=e[p]))o+=n;else{if(r=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),i=n.flags,l=0;l<i.length;l++)switch(a=i.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((t=parseInt(n.arg,10))<0||t>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(t)?String(n.arg):F(t)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=I(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=V(n.arg,n.width,n.padRight)),o+=n.arg||"",s+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,i,n,a;for(i=[],a=0,n=C.exec(e);n;)(r=e.slice(a,C.lastIndex-n[0].length)).length&&i.push(r),i.push(R(n)),a=C.lastIndex,n=C.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function W(e){return"string"==typeof e}function j(e){var r,i,n;if(!W(e))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Z(e),(i=new Array(arguments.length))[0]=r,n=1;n<i.length;n++)i[n]=arguments[n];return A.apply(null,i)}function G(e){return e!=e}return function(e){var o,s,c,p;if(0===arguments.length)o=[0,0];else{if(!r(e))throw new TypeError(j("invalid argument. Output argument must be an array-like object. Value: `%s`.",e));o=e}return s=i,c=a,p=!1,l;function l(e){return 0===arguments.length?!1===p?null:(o[0]=s,o[1]=c,o):(p=!0,G(e)?(s=e,c=e):((e<s||e===s&&t(e))&&(s=e),(e>c||e===c&&n(e))&&(c=e)),o[0]=s,o[1]=c,o)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrminmax=r();
//# sourceMappingURL=browser.js.map
