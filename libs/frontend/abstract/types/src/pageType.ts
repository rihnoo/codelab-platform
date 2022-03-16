export enum PageType {
  Home = '/',
  Admin = '/admin',
  AppList = '/apps',
  PageList = '/apps/[appId]/pages',
  LambdaList = '/lambdas',
  PageDetail = '/apps/[appId]/pages/[pageId]',
  PageBuilder = '/apps/[appId]/pages/[pageId]/builder',
  AppDetail = '/apps/[appId]',
  AppProviderDetail = '/apps/[appId]/provider',
  ComponentDetail = '/components/[componentId]',
  ComponentList = '/components',
  ComponentDetailV2 = '/library/[libraryId]/component/[componentId]',
  Storybook = '/storybook',
  Atom = '/atoms',
  Type = '/types',
  InterfaceDetail = '/types/interfaces/[interfaceId]',
  AtomList = '/apps/[appId]/atoms',
  AtomTypeList = '/atom-types',
  LibraryList = '/apps/[appId]/library',
  LibraryDetail = '/apps/[appId]/library/[libraryId]',
  Prop = '/library/[libraryId]/props',
  Tag = '/tags',
  PropsInterface = '/apps/[appId]/props',
}
