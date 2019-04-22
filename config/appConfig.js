const toml = require('toml')
const fs = require('fs')
const path = require('path')
const { appPath } = require('./paths')

// App configuration path, this file contains cdn secret
// informations, so you should not share it outside the
// project
const appConfigPath = path.resolve(appPath, 'app.config.toml')

// Configuration file is wrote in a toml file which more
// readable than json
const appConfig = toml.parse(fs.readFileSync(appConfigPath))

module.exports = appConfig