# Typescript to Google Apps - joining into single TS and transpiling with tsc - advanced

## Advanced:
This example includes an extra build script that remove all occurances of import/export, similar to what ts2gas does, allowing you to use them in your source before transpiling occurs. As long as you don't use `import` with `as`, this should work.

## Build
`npm run build`

## Special Dependencies
 - You need to install TS type definition files:
     - `npm install` based on package.json
     - Not necessary for build to work, but IDE will complain without it
 - fs-extra (in package.json)