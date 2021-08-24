module.exports = {
  "roots": [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  "testMatch": [
    "**/__tests__/**/*.test.(ts|js)",
    "**/tests/**/*.test.(ts|js)",
    "*.test.(ts|js)",
    "**/?(*.)+(spec|test).(ts|js)",
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
}
