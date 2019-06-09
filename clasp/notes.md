# Typescript to Google Apps - Using Clasp

## Build
Either "clasp push" from command line, or "npm run build" (does same thing)

## Special Dependencies
 - You need to have Clasp installed globally
     - `npm install @google/clasp -g`
     - See [docs](https://developers.google.com/apps-script/guides/clasp)
 - You need to install TS type definition files:
     - `npm install` based on package.json
     - Not necessary for build to work, but IDE will complain without it
 - Clasp needs to have auth token and `.clasp.json` pointing to correct script ID