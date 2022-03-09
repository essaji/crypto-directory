module.exports = {
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['./setupTests.ts'],
  roots: ['<rootDir>/src']
}
