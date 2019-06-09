// Compiled using ts2gas 3.4.4 (TypeScript 3.5.1)
var exports = exports || {};
var module = module || { exports: exports };
//import 'google-apps-script'
function test() {
    // call alpha before it is defined - in this file
    alpha();
    // call final before it is defined - in separate file Final.ts
    final();
}
function alpha() {
    Logger.log('running alpha');
    // call beta before it is defined - in separate file File-B.ts
    beta();
}
