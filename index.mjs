// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";function d(d){var o,l,j,a;if(0===arguments.length)o=[0,0];else{if(!s(d))throw new TypeError(r("0dyAC",d));o=d}return l=n,j=m,a=!1,h;function h(s){return 0===arguments.length?!1===a?null:(o[0]=l,o[1]=j,o):(a=!0,i(s)?(l=s,j=s):((s<l||s===l&&e(s))&&(l=s),(s>j||s===j&&t(s))&&(j=s)),o[0]=l,o[1]=j,o)}}export{d as default};
//# sourceMappingURL=index.mjs.map
