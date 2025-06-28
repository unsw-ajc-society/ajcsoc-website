// Required to allow importing CSS files with noUncheckedSideEffectImports tsconfig option
// but not included in next-env.d.ts by default
// ref: https://github.com/vercel/next.js/discussions/70165
declare module "*.css" {}
