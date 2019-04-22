const IO = require('./io')
const Mustache = require('mustache')
const Views = require('./views')

const type = process.argv[2]
const name = process.argv[3]

async function run () {
  const tmplData = await IO.getTemplate(type)
  
  if (type === 'store') {
    const dirName = type
    const view = Views.store(name)

    const output = Mustache.render(tmplData, view)
    
    await IO.writeFile(dirName, `${name}.js`, output)

    IO.addStore(name)

    return
  } else {
    let dirName = `${type}s`
    const compName = name.charAt(0).toUpperCase() + name.slice(1)
    const styleTmplData = await IO.getTemplate('style')

    await IO.generateDir(dirName, compName)
    dirName += `/${compName}`

    let compOutput = null
    let styleOuput = null
    let compView = null

    if (type === 'component') {
      compView = Views.functionalComponent(name)
    } else {

      switch (type) {
        case 'page': compView = Views.pageComponent(name)
        break

        case 'layout': compView = Views.layoutComponent(name)
        break

        case 'container': compView = Views.classComponent(name)
        break

        default: break
      }
      
    }

    const styleView = Views.style(name)
    compOutput = Mustache.render(tmplData, compView)
    styleOuput = Mustache.render(styleTmplData, styleView)

    await IO.writeFile(dirName, 'index.js', compOutput)
    await IO.writeFile(dirName, 'index.scss', styleOuput)
    
    if (type === 'page') {
      IO.addRoute(name)
    }

    return
  }
}

run()