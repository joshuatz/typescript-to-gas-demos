# Typescript to Google Apps - joining into single TS and transpiling with tsc

## Build
`npm run build-no-rename` or `npm run build` to force .gs extension in final files

## Special Dependencies
 - You need to install TS type definition files:
     - `npm install` based on package.json
     - Not necessary for build to work, but IDE will complain without it
 - fs-extra (in package.json)
     - Only if you want to have final files renamed to .gs