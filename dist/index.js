"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(h,u){
var x=require('@stdlib/stats-strided-dstdevpn/dist');function f(e,r,t,i){return x(e,r,t,i)}u.exports=f
});var n=s(function(k,d){
var j=require('@stdlib/stats-strided-dstdevpn/dist').ndarray;function m(e,r,t,i,y){return j(e,r,t,i,y)}d.exports=m
});var p=s(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=n();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),a,c=E(_(__dirname,"./native.js"));O(c)?a=b:a=c;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
