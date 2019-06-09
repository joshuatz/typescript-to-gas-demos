"use strict";
// import 'google-apps-script'
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
