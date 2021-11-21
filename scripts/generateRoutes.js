console.log('Generating routes')

//requiring path and fs modules
const fs = require('fs')
const path = require('path')

//joining path of directory
const screensPath = path.join(__dirname.replace('scripts', ''), 'src/screens')
const routesPath = path.join(
  __dirname.replace('scripts', ''),
  'src/navigation/stacks',
)

function checkDir(dir) {
  const subDirs = dir.split('/')
  let last = ''
  subDirs.forEach((s) => {
    const current = last + s + '/'
    if (!fs.existsSync(current)) {
      fs.mkdirSync(current)
    }
    last = current
  })
}

function getTSXFiles(dir, folder) {
  const files = fs.readdirSync(dir)

  const routes = []

  files.forEach((file) => {
    const isADir = file.indexOf('.') < 0
    const fullPath = path.join(dir, file)
    if (isADir) {
      getTSXFiles(fullPath, file)
    } else if (file.indexOf('.tsx') >= 0) {
      const content = fs.readFileSync(fullPath).toString()
      const route = {
        name: file.replace('.tsx', ''),
        options: content.indexOf('export const ScreenOptions') >= 0,
      }

      routes.push(route)
    }
    if (routes.length) {
      const stackFolder = path.join(routesPath, folder)
      checkDir(stackFolder)

      const routesFileImports = routes
        .map((r) => {
          return `import ${r.name}Screen${
            r.options ? `, { ScreenOptions as ${r.name}Options }` : ''
          } from '${dir.replace(screensPath, '../../../screens')}/${r.name}'`
        })
        .join('\n')

      const finalContent = `${routesFileImports}
        export default [${routes
          .map((r) => {
            return `{
              name: '${r.name}',
              component: ${r.name}Screen,
              ${r.options ? `options: ${r.name}Options` : ''}
            },`
          })
          .join(`\n`)}]`

      const routesFile = path.join(stackFolder, 'routes.ts')

      if (fs.existsSync(routesFile)) {
        fs.unlinkSync(routesFile)
      }
      fs.writeFileSync(routesFile, finalContent)
    }
  })
}

getTSXFiles(screensPath)
