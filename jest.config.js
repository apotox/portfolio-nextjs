

module.exports = {
    "transform": {
        "^.+\\.js$": ['babel-jest', { presets: ['next/babel'] }]
      },
    "testRegex": "(/__tests__/.*\.test\.js$)",
    "moduleFileExtensions": [ "js" , "json", "node"],
    "coverageDirectory": "./coverage/",
    "collectCoverage": false,
    "testTimeout": 60000,
  }