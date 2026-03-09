"use strict";var m=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var s=m(function(F,n){
var f=require('@stdlib/assert-is-array-like-object/dist'),l=require('@stdlib/math-base-assert-is-positive-zero/dist'),o=require('@stdlib/math-base-assert-is-negative-zero/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/constants-float64-pinf/dist'),p=require('@stdlib/constants-float64-ninf/dist');function N(t){var r,i,a,u;if(arguments.length===0)r=[0,0];else{if(!f(t))throw new TypeError(c('1I99a',t));r=t}return i=g,a=p,u=!1,v;function v(e){return arguments.length===0?u===!1?null:(r[0]=i,r[1]=a,r):(u=!0,q(e)?(i=e,a=e):((e<i||e===i&&o(e))&&(i=e),(e>a||e===a&&l(e))&&(a=e)),r[0]=i,r[1]=a,r)}}n.exports=N
});var h=s();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
