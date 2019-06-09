# typescript-to-gas-demos
This repo explores the different options available to convert TypeScript to Google Apps Script (GAS) compatible JS/GS code. See [this post](https://joshuatz.com/posts/2019/using-typescript-with-google-apps-script-and-google-ads-scripting/) for details.

Each example has an `input-ts` folder, and an `output-gs` folder, to show what the TS gets turned into. In the case of the clasp example specifically, those files are never actually created locally, since `clasp push` uploads them straight to the cloud - I've manually copied and pasted back from the online IDE to show what the results look like.

# Options:
name | link | description
--- | --- | ---
clasp | [link](/clasp) | Uses the recommended tool from Google, Clasp, which uses ts2gas under the hood
ts2gas-direct | [link](/ts2gas-direct) | Uses ts2gas directly.
multi-file-simple | [link](/multi-file-simple) | uses TSC directly, using outDir option and no modules option.
single-file-simple | [link](/single-file-simple) | Concatenates TS together using the outFile option
single-file-advanced | [link](/single-file-advanced) | Pre-processes TS by removing import/export strings, concatenates together, and passes to TSC as single file.