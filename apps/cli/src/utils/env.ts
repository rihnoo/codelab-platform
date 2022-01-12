import { Options } from 'yargs'

export const ENV_FLAG = 'env'

export enum Env {
  Dev = 'dev',
  Test = 'test',
  Ci = 'ci',
}

export const envOption: Options = {
  type: 'string',
  choices: Object.values(Env),
  describe: 'Used to load proper `.env`',
}