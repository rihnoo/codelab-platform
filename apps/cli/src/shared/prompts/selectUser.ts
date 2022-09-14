import { UserOGM } from '@codelab/backend/adapter/neo4j'

export const selectUserPrompt = async () => {
  const User = await UserOGM({ reinitialize: true })
  const users = await User.find()

  return {
    type: 'list',
    name: 'selectedUser',
    message: 'Select which user to be owner of the app',
    choices: users.map((user) => ({
      name: user.email,
      value: user.id,
    })),
  }
}