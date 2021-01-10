import { Type, classToPlain, plainToClass } from 'class-transformer'
import { UpdateUserRequest } from '../application/useCases/updateUser/UpdateUserRequest'
import { SerializedUserDto } from './dto/SerializedUserDto'
import { UserAccessToken } from './user-accessToken'
import { UserEmail } from './user-email'
import { UserPassword } from './user-password'
import { AggregateRoot, TransformBoth, TypeOrmUser } from '@codelab/backend'

export class User extends AggregateRoot<SerializedUserDto> {
  // @ValidateNested()
  @Type(() => UserEmail)
  @TransformBoth(UserEmail)
  declare email: UserEmail

  // @ValidateNested()
  @Type(() => UserPassword)
  @TransformBoth(UserPassword)
  // @Exclude({ toPlainOnly: true })
  declare password: UserPassword

  @Type(() => UserAccessToken)
  @TransformBoth(UserAccessToken)
  declare accessToken: UserAccessToken

  set setAccessToken(token: string) {
    this.accessToken = new UserAccessToken({ value: token })
  }

  /**
   * Used for instantiating a User object
   * @param props
   */
  public static hydrate(props: SerializedUserDto) {
    const user = plainToClass(User, props)

    return user
  }

  /**
   * Used for creating User
   * @param request
   */
  public static create(request: SerializedUserDto): User {
    const user = User.hydrate(request)

    user.password.hashPassword()

    return user
  }

  public static update(request: UpdateUserRequest): User {
    return User.hydrate(request)
  }

  toPlain() {
    return classToPlain(this) as SerializedUserDto
  }

  toPersistence(): TypeOrmUser {
    return plainToClass(TypeOrmUser, this.toPlain())
  }

  // public static arrayToPlain(users: Array<User>) {
  //   return classToPlain(users) as Array<SerializedUserDto>
  // }
}