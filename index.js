// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&(t=n.length,e(t)===t)&&n.length>=0&&n.length<=4294967295;var t}var t=Number.POSITIVE_INFINITY;function r(e){return 0===e&&1/e===t}var o=Number.NEGATIVE_INFINITY;function u(e){return 0===e&&1/e===o}function f(){var e,n=arguments,t=n[0],r="https://stdlib.io/e/"+t+"?";for(e=1;e<n.length;e++)r+="&arg[]="+encodeURIComponent(n[e]);return r}function i(e){return e!=e}return function(e){var l,c,a,d;if(0===arguments.length)l=[0,0];else{if(!n(e))throw new TypeError(f("0dyAC",e));l=e}return c=t,a=o,d=!1,h;function h(e){return 0===arguments.length?!1===d?null:(l[0]=c,l[1]=a,l):(d=!0,i(e)?(c=e,a=e):((e<c||e===c&&u(e))&&(c=e),(e>a||e===a&&r(e))&&(a=e)),l[0]=c,l[1]=a,l)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).incrminmax=n();
//# sourceMappingURL=index.js.map
