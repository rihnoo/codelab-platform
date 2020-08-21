import { PropsFromKeys } from '@codelab/props'

export const paginationPropKeys = [
  'current',
  'defaultCurrent',
  'defaultPageSize',
  'disabled',
  'hideOnSinglePage',
  'itemRender',
  'pageSize',
  'pageSizeOptions',
  'showLessItems',
  'showQuickJumper',
  'showSizeChanger',
  'showTitle',
  'showTotal',
  'simple',
  'size',
  'responsive',
  'total',
  'onChange',
  'onShowSizeChange',
]

export type PaginationProps = PropsFromKeys<typeof paginationPropKeys[number]>