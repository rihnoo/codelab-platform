import type { IRole } from '@codelab/shared/abstract/core'
import type { Nullable } from '@codelab/shared/abstract/types'
import type { Ref } from 'mobx-keystone'
import type { ICacheService } from '../../service'
import type { IApp } from '../app'
import type { IUserDTO } from './user.dto.interface'

export interface IUser extends ICacheService<IUserDTO, IUser> {
  // Mobx class requires an id, so we'll use the auth0Id here
  id: string
  auth0Id: string
  username: string
  roles: Array<IRole>
  apps: Array<Ref<IApp>>
  curAppId: Nullable<string>
  curPageId: Nullable<string>
  setCurAppId(appId: string): void
  setCurPageId(pageId: string): void
  // apps: ObjectMap<IApp>
}

// export type IUserRef = string

export type IAuth0Id = string
