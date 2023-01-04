const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

module.exports = {
  extends: [TS ? "./typescript" : "./basic"]
};
