// Compiled using ts2gas 1.6.2 (TypeScript 3.5.1)
var exports = exports || {};
var module = module || { exports: exports };
"use strict";
//import 'google-apps-script'
function test() {
    // call alpha before it is defined - in this file
    alpha();
    // call final before it is defined - in separate file Final.gs
    final();
}
function alpha() {
    Logger.log('running alpha');
    // call beta before it is defined - in separate file File-B.gs
    beta();
}
