import { series, parallel } from 'gulp'
import { buildModules } from './build-modules'
import { buildFull } from './build-full'
import { generateTypes } from './gen-types'
import { removeDir } from './clean'

export async function clean() {
  await removeDir()
}

export default series(clean, parallel(buildModules, buildFull, generateTypes))
