import { remove } from 'fs-extra'
import { output, outputCjs, outputEsm } from '../utils/path'

export function removeDir() {
  return Promise.all([remove(output), remove(outputCjs), remove(outputEsm)])
}
