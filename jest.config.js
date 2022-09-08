const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  // moduleNameMapper: {
  //   "^firebase-admin/app$":
  //     "<rootDir>/node_modules/firebase-admin/lib/app/index.js",
  //   "^firebase-admin/auth$":
  //     "<rootDir>/node_modules/firebase-admin/lib/auth/index.js",
  // },
};

module.exports = createJestConfig(customJestConfig);
