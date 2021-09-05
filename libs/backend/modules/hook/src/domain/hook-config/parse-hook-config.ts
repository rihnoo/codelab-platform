import { HookType } from '@codelab/shared/abstract/core'
import { HookConfig } from './hook-config.union'
import { queryHookConfigSchema } from './query-hook-config.schema'

/**
 * Throws error if:
 * - type is not recognized
 * OR
 * - config is invalid
 * @param type
 * @param data
 */
export const parseHookConfig = (
  type: HookType,
  data: Record<string, any>,
): HookConfig => {
  switch (type) {
    case HookType.Query:
      return queryHookConfigSchema.parse(data)
  }

  throw new Error(`Can't parse hook data, hook type ${type} not recognized`)
}
