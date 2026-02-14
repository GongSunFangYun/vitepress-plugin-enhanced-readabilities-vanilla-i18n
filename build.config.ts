import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { resolve } from 'node:path'

import Yaml from '@rollup/plugin-yaml'

import { defineBuildConfig } from 'unbuild'

const execAsync = promisify(exec)

export default defineBuildConfig({
  entries: [
    { builder: 'mkdist', input: './src/client', outDir: './dist/client', pattern: ['**/*.vue'], loaders: ['vue'] },
    { builder: 'mkdist', input: './src/client', outDir: './dist/client', pattern: ['**/*.ts'], format: 'cjs', loaders: ['js'] },
    { builder: 'mkdist', input: './src/client', outDir: './dist/client', pattern: ['**/*.ts'], format: 'esm', loaders: ['js'] },
    { builder: 'mkdist', input: './src/client', outDir: './dist/client', pattern: ['**/*.css'], loaders: ['postcss'] },
    { builder: 'rollup', input: './src/locales/index', outDir: './dist/locales' },
  ],
  clean: true,
  sourcemap: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  hooks: {
    'rollup:options': (_, options) => {
      if (Array.isArray(options.plugins))
        options.plugins.push(Yaml() as any)
    },
    'mkdist:done': async (ctx) => {
      if (ctx.options.stub)
        return

      // 创建空的 unocss.css 文件，避免报错
      const fs = await import('node:fs')
      const unocssPath = resolve('./dist/client/unocss.css')

      // 确保目录存在
      await fs.promises.mkdir(resolve('./dist/client'), { recursive: true })

      // 创建空的 CSS 文件
      await fs.promises.writeFile(unocssPath, '/* unocss styles */')
    },
  },
})