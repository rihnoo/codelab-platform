import * as Types from '@codelab/frontend/abstract/codegen'

import { TestElementFragment } from '../../../../test/graphql/TestElement.fragment.graphql.gen'
import { gql } from '@apollo/client'
import { TestElementFragmentDoc } from '../../../../test/graphql/TestElement.fragment.graphql.gen'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type TestMoveElementMutationVariables = Types.Exact<{
  input: Types.MoveElementInput
}>

export type TestMoveElementMutation = { moveElement: TestElementFragment }

export const TestMoveElementGql = gql`
  mutation TestMoveElement($input: MoveElementInput!) {
    moveElement(input: $input) {
      ...TestElement
    }
  }
  ${TestElementFragmentDoc}
`
export type TestMoveElementMutationFn = Apollo.MutationFunction<
  TestMoveElementMutation,
  TestMoveElementMutationVariables
>

/**
 * __useTestMoveElementMutation__
 *
 * To run a mutation, you first call `useTestMoveElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestMoveElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testMoveElementMutation, { data, loading, error }] = useTestMoveElementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTestMoveElementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TestMoveElementMutation,
    TestMoveElementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    TestMoveElementMutation,
    TestMoveElementMutationVariables
  >(TestMoveElementGql, options)
}
export type TestMoveElementMutationHookResult = ReturnType<
  typeof useTestMoveElementMutation
>
export type TestMoveElementMutationResult =
  Apollo.MutationResult<TestMoveElementMutation>
export type TestMoveElementMutationOptions = Apollo.BaseMutationOptions<
  TestMoveElementMutation,
  TestMoveElementMutationVariables
>