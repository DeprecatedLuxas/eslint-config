const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

if (!TS) {
  console.warn(
    "[@luxass/eslint-config] TypeScript is not installed, fallback to JS only.",
  );
}

module.exports = {
  extends: [
    TS
      ? "@luxass/eslint-config-ts"
      : "@luxass/eslint-config-js",
  ],
};
