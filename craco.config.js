/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { ESLINT_MODES } = require("@craco/craco");
// import { ESLIN} from "@craco/craco"

module.exports = {
  reactScriptsVersion: "react-scripts",
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
