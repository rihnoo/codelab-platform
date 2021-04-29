import { SelectorMatcherOptions } from '@testing-library/cypress'
import { Matcher } from '@testing-library/dom'
import * as JQuery from 'jquery'
import '@testing-library/cypress/add-commands'
import {
  CreateAppGql,
  App_Insert_Input,
  UpsertUserGql,
  User__AppFragment,
  Library_Insert_Input,
  CreateLibraryGql,
  __LibraryFragment,
  DeleteAllPagesOfApp,
  CreatePageGql,
} from '@codelab/hasura'
import { print } from 'graphql'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Merges with @testing-library/cypress, need to follow their global declare
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      /** Logs in using the auth0 interface and adds the user in the database if it doesn't exist*/
      login(): Chainable<void>
      getCurrentUserId(): Chainable<string>
      getByTestId(
        testId: string,
        selectorAddon?: string | undefined,
      ): Chainable<JQuery<HTMLButtonElement>>
      impersonateUser(): void
      /** Makes an post request to the hasura graphql api endpoint with admin secret */
      hasuraAdminRequest(
        body: string | Record<string, any>,
      ): Chainable<Response>
      /** Makes an post request to the next.js proxy graphql api endpoint as the logged in user */
      hasuraUserRequest(body: string | Record<string, any>): Chainable<Response>
      /** Creates an app for the current logged in user */
      createApp(input?: App_Insert_Input): Chainable<User__AppFragment>
      /** Creates an app for the current logged in user */
      createLibrary(): Chainable<__LibraryFragment>
      createPage(appId: string, pageName?: string): Chainable<Response>
      findByButtonText: (
        text: Matcher,
        options?: SelectorMatcherOptions,
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
      findElementByText: typeof findElementByText
      findByModalTitle: typeof findByModalTitle
      openSelectByLabel: typeof openSelectByLabel
      getSelectedOptionByLabel: typeof getSelectedOptionByLabel
      getSelectOptionsContent: typeof getSelectOptionsContent
      getSelectDropdown: typeof getSelectDropdown
      getSelectOptionItemByValue: typeof getSelectOptionItemByValue
      getSpinner: typeof getSpinner
      getOpenedModal: typeof getOpenedModal
      getPaneMain: (
        options?: Parameters<typeof cy.get>[1],
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
      getOpenedDropdownMenu: typeof getOpenedDropdownMenu
      findSettingsButtonByAppName: (
        text: Matcher,
        options?: SelectorMatcherOptions,
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
      findMainPaneButtonByItemName: (
        pageName: Matcher,
        settingTitle: string,
        options?: SelectorMatcherOptions,
      ) => Cypress.Chainable<JQuery<HTMLButtonElement>>
    }
  }
}

Cypress.Commands.add('hasuraUserRequest', (body) => {
  return cy.request({
    body,
    url: '/api/graphql',
    method: 'POST',
  })
})

Cypress.Commands.add('hasuraAdminRequest', (body) => {
  return cy.request({
    body,
    url: Cypress.env('CODELAB_HASURA_GRAPHQL_ENDPOINT'),
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': Cypress.env('HASURA_GRAPHQL_ADMIN_SECRET'),
    },
  })
})

Cypress.Commands.add('login', () => {
  Cypress.log({
    name: 'loginViaAuth0',
  })

  //Ideally, we would login using the Password grant, with an API call, like this:
  //https://auth0.com/blog/end-to-end-testing-with-cypress-and-auth0/
  //But we use nextjs-auth0 to manage our authentication process.
  //And it encrypts the cookies and doesn't expose the encryption process
  //Meaning that even if we did make the login request and got the token, we can't easily store it in our cookie
  //since we don't have access to how it stores it
  //See this for context https://github.com/auth0/nextjs-auth0/issues/335
  //So just login using the UI
  //We can maybe use this https://github.com/sir-dunxalot/cypress-nextjs-auth0 but after this gets merged https://github.com/sir-dunxalot/cypress-nextjs-auth0/pull/14

  const email = Cypress.env('AUTH0_USER') //Username and password are from .env
  const password = Cypress.env('AUTH0_PASSWORD') //Username and password are from .env

  cy.visit('/')
  cy.get('.login-button').click()

  cy.get('body').then((body) => {
    //Find the input. If it's missing it's likely we're logged in already and it's redirecting us to our home page
    if (body.find('input[name=username]').length) {
      cy.get('input[name=username]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('button[type=submit][value=default]').click()
    }

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/`)

    //Make sure the user is in the database
    cy.request('/api/auth/me').then((r) => {
      const userId = r.body.sub

      cy.hasuraAdminRequest({
        query: print(UpsertUserGql),
        variables: {
          userId,
        },
      })
    })
  })
})
Cypress.Commands.add('getCurrentUserId', () => {
  return cy.request('/api/auth/me').then((r) => {
    return r.body.sub
  })
})

Cypress.Commands.add('getByTestId', (testId, selectorAddon) => {
  return cy.get(`[data-testid=${testId}]${selectorAddon || ''}`)
})

const defaultCreateAppInput = {
  name: 'Test app',
  pages: {
    data: [
      {
        name: 'Test Page',
      },
    ],
  },
}
Cypress.Commands.add(
  'createApp',
  (input: App_Insert_Input = defaultCreateAppInput) => {
    return cy
      .hasuraUserRequest({
        query: print(CreateAppGql),
        variables: { input },
      })
      .then((r) => {
        return r.body.data?.insert_app_one
      })
  },
)

Cypress.Commands.add('createLibrary', () => {
  const data: Library_Insert_Input = {
    name: 'Test library',
  }

  return cy
    .hasuraUserRequest({
      query: print(CreateLibraryGql),
      variables: { data },
    })
    .then((r) => {
      return r.body.data?.insert_library_one
    })
})

Cypress.Commands.add(
  'createPage',
  (appId: string, pageName: string = 'default') => {
    return cy
      .hasuraUserRequest({
        query: print(CreatePageGql),
        variables: { data: { app_id: appId, name: pageName } },
      })
      .then((r) => window.console.log(r.body))
  },
)

export const findByButtonText = (
  subject: any,
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery> => {
  return (subject ? cy.wrap(subject) : cy).findByRole('button', {
    name: text,
    exact: false,
    timeout: 5000,
    ...options,
  })
}

Cypress.Commands.add(
  'findByButtonText',
  {
    prevSubject: 'optional',
  },
  findByButtonText,
)

export const findElementByText = <K extends keyof HTMLElementTagNameMap>(
  text: Matcher,
  element: K,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLElementTagNameMap[K]>> => {
  return cy
    .findByText(text, { exact: true, timeout: 5000, ...options })
    .closest<K>(element)
}

Cypress.Commands.add('findElementByText', findElementByText)

export const findByModalTitle = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery> => {
  return cy
    .findByText(text, { exact: true, timeout: 5000, ...options })
    .closest('.ant-modal-wrap ')
}

Cypress.Commands.add('findByModalTitle', findByModalTitle)

export const openSelectByLabel = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery> => {
  return cy.findByLabelText(text, options).closest('.ant-select').click()
}

Cypress.Commands.add('openSelectByLabel', openSelectByLabel)

export const getSelectDropdown = () => {
  // NOTE: the list appears in DOM only after first
  return cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
}

Cypress.Commands.add('getSelectDropdown', getSelectDropdown)

export const getSelectedOptionByLabel = (
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery> => {
  // NOTE: the list appears in DOM only after first
  return cy
    .findByLabelText(text, options)
    .closest('.ant-select-selector')
    .find('.ant-select-selection-item')
}

Cypress.Commands.add('getSelectedOptionByLabel', getSelectedOptionByLabel)

export const getSelectOptionsContent = (): Cypress.Chainable<
  JQuery<HTMLElement>
> => {
  // NOTE: the list appears in DOM only after first
  return getSelectDropdown().find('.ant-select-item-option-content')
}

Cypress.Commands.add('getSelectOptionsContent', getSelectOptionsContent)

export const getSelectOptionItemByValue = (
  value: Matcher,
): Cypress.Chainable<JQuery> => {
  return cy
    .getSelectDropdown()
    .find('.rc-virtual-list')
    .findByText(value)
    .closest('.ant-select-item')
}

Cypress.Commands.add('getSelectOptionItemByValue', getSelectOptionItemByValue)

export const getSpinner = (): Cypress.Chainable<JQuery> => {
  return cy.get('.ant-spin')
}

Cypress.Commands.add('getSpinner', getSpinner)

export const getOpenedModal = (
  // options?: any,
  options?: Parameters<typeof cy.get>[1],
): Cypress.Chainable<JQuery> => {
  return cy.get('.ant-modal-content', options)
}

Cypress.Commands.add('getOpenedModal', getOpenedModal)

export const getOpenedDropdownMenu = (
  // options?: any,
  options?: Parameters<typeof cy.get>[1],
): Cypress.Chainable<JQuery<HTMLButtonElement>> => {
  return cy.get('.ant-dropdown-menu', options)
}

Cypress.Commands.add('getOpenedDropdownMenu', getOpenedDropdownMenu)

export const findSettingsButtonByAppName = (
  subject: any,
  text: Matcher,
  options?: SelectorMatcherOptions,
): Cypress.Chainable<JQuery<HTMLButtonElement>> => {
  return (subject ? cy.wrap(subject) : cy)
    .findByText(text, { exact: true, timeout: 0, ...options })
    .closest('.ant-card-head-wrapper')
    .find('.anticon-ellipsis')
    .closest('button')
}

Cypress.Commands.add(
  'findSettingsButtonByAppName',
  {
    prevSubject: 'optional',
  },
  findSettingsButtonByAppName,
)

Cypress.Commands.add(
  'findMainPaneButtonByItemName',
  {
    prevSubject: 'optional',
  },
  (
    subject: any,
    itemName: Matcher,
    settingTitle: string,
    options?: SelectorMatcherOptions,
  ): Cypress.Chainable<JQuery> => {
    return (subject ? cy.wrap(subject) : cy)
      .findByText(itemName, { exact: false, timeout: 0, ...options })
      .closest('.ant-list-item')
      .findByTitle(settingTitle)
  },
)

Cypress.Commands.add(
  'getPaneMain',
  (): Cypress.Chainable<JQuery> => {
    return cy.getByTestId('pain-main-tabs').findByRole('tablist')
  },
)
