import { join } from 'path'

const workDir = process.cwd()
const configDirectory = join(workDir, process.env.GENOA_CONFIG_PATH ?? 'genoa.config')
const configPath = join(configDirectory, 'index.js')
const configBundlePath = join(workDir, '.genoacms', 'genoa.config')

export {
  configPath,
  configBundlePath
}
