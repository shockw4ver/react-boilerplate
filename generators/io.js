const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const prettier = require('prettier')

fs.readFile = promisify(fs.readFile)
fs.writeFile = promisify(fs.writeFile)
fs.mkdir = promisify(fs.mkdir)

const appSrc = require('../config/paths').appSrc
const TEMPLATE_ROOT = path.resolve(__dirname, 'templates')

exports.getTemplate = async function (type) {
  try {
    const tmplPath = path.resolve(TEMPLATE_ROOT, `${type}.template`)
    const data = await fs.readFile(tmplPath, 'utf-8')

    return data
  } catch (E) {
    console.error(E)

    return false
  }

}

exports.writeFile = async function (target, filename, data) {
  try {
    const targetPath = path.resolve(appSrc, target, filename)
    await fs.writeFile(targetPath, data, 'utf-8')
    
    return true
  } catch (E) {
    console.error(E)

    return false
  }
}

exports.generateDir = async function (target, name) {
  try {
    const targetDir = path.resolve(appSrc, target, name)
    await fs.mkdir(targetDir)

    return true
  } catch (E) {
    console.error(E)

    return false
  }
}

exports.addRoute = async function (name) {
  try {
    const targetPath = path.resolve(appSrc, 'Router.js')
    const routesFileData = await fs.readFile(targetPath, 'utf-8')

    const pageComponentName = name.charAt(0).toUpperCase() + name.slice(1)

    const res = routesFileData.replace(
      '/** IMPORT HOLDER **/',
      `import ${pageComponentName} from '@pages/${pageComponentName}'`
      + '\n'
      + '/** IMPORT HOLDER **/'
    ).replace(
      '{/** ROUTE HOLDER **/}',
      `<${pageComponentName} path="/${name}" />`
      + '\n'
      + '{/** ROUTE HOLDER **/}'
    )

    const output = prettier.format(res, {
      parser: 'babel'
    })

    await fs.writeFile(targetPath, output, 'utf-8')
  } catch (E) {
    console.error(E)

    process.exit(1)
  }
}

exports.addStore = async function (name) {
  try {
    const targetPath = path.resolve(appSrc, 'store/index.js')
    const storeFileData = await fs.readFile(targetPath, 'utf-8')
    const storeClassName = name.charAt(0).toUpperCase() + name.slice(1)

    const res = storeFileData
      .replace(
        '/** IMPORT HOLDER **/',
        `import ${storeClassName} from './${name}.js'`
        + '\n'
        + '/** IMPORT HOLDER **/'
      )
      .replace(
        '/** EXPORT HOLDER **/',
        `export const ${name} = new ${storeClassName}()`
        + '\n'
        + '/** EXPORT HOLDER **/')

    const output = prettier.format(res)

    await fs.writeFile(targetPath, output, 'utf-8')
  } catch (E) {
    console.error(E)

    process.exit(1)
  }
}