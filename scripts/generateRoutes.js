console.log('Generating routes')

const TYPES_TEMPLATE = `
import { NavigationProp, RouteProp } from '@react-navigation/core'

<<IMPORTS>>

export type <<STACK>>StackParamList = {
  <<ROUTES>>
}
export type <<STACK>>Route = keyof <<STACK>>StackParamList
export type <<STACK>>NavigationProp<T extends <<STACK>>Route> = NavigationProp<
  <<STACK>>StackParamList,
  T
>
export type <<STACK>>RouteProp<T extends <<STACK>>Route> = RouteProp<<<STACK>>StackParamList, T>
export type <<STACK>>ScreenProps<T extends <<STACK>>Route> = {
  navigation: <<STACK>>NavigationProp<T>
  route: <<STACK>>RouteProp<T>
}

`

const INDEX_TEMPLATE = `
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import routes from './routes'
import { <<STACK>>StackParamList } from './types'

const Stack = createStackNavigator<<<STACK>>StackParamList>()

export default function <<STACK>>Stack() {
  return (
    <Stack.Navigator <<INITIAL>>>
      {routes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  )
}

`

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

function writeFile(name, content) {
  if (fs.existsSync(name)) {
    fs.unlinkSync(name)
  }
  fs.writeFileSync(name, content)
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
        params: content.indexOf('export type RouteParams') >= 0,
        isInitial: content.indexOf('export const isInitialRoute = true') >= 0,
      }

      routes.push(route)
    }
    if (routes.length) {
      const stackFolder = path.join(routesPath, folder)
      checkDir(stackFolder)

      // GENERATE routes.ts FILE
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
              name: '${r.name}' as '${r.name}',
              component: ${r.name}Screen,
              ${r.options ? `options: ${r.name}Options` : ''}
            },`
          })
          .join(`\n`)}]`

      const routesFile = path.join(stackFolder, 'routes.ts')

      writeFile(routesFile, finalContent)

      // GENERATE types.ts FILE
      const typesImports = routes
        .filter((r) => r.params)
        .map((r) => {
          return `import { RouteParams as ${r.name}Params } from '${dir.replace(
            screensPath,
            '../../../screens',
          )}/${r.name}'
          `
        })
        .join('\n')

      const typesFile = path.join(stackFolder, 'types.ts')

      const typesContent = TYPES_TEMPLATE.split('<<STACK>>')
        .join(folder)
        .split('<<IMPORTS>>')
        .join(typesImports)
        .split('<<ROUTES>>')
        .join(
          routes
            .map(
              (r) => `${r.name}: ${r.params ? `${r.name}Params` : 'undefined'}`,
            )
            .join('\n'),
        )

      writeFile(typesFile, typesContent)

      const indexFile = path.join(stackFolder, 'index.tsx')

      const initialRoute = routes.find((r) => r.isInitial)

      const indexContent = INDEX_TEMPLATE.split('<<STACK>>')
        .join(folder)
        .replace(
          '<<INITIAL>>',
          initialRoute ? `initialRouteName="${initialRoute.name}"` : '',
        )

      writeFile(indexFile, indexContent)
    }
  })
}

getTSXFiles(screensPath)
