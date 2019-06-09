function test() {
    // call alpha before it is defined - in this file
    alpha();
    // call final before it is defined - in separate file Final.ts
    final();
    letsTryExporting();
}
function alpha() {
    Logger.log('running alpha');
    // call beta before it is defined - in separate file File-B.ts
    beta();
}
function beta() {
    Logger.log('running beta');
}
function final() {
    // call beta again
    beta();
}
function letsTryExporting() {
    Logger.log('Inside exported function');
}
