module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^@tmp/(.*)$": "<rootDir>/tmp/$1",
  },
  testMatch: ["<rootDir>/**/*.test.(js|jsx|ts|tsx)"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
