import { Renderer } from '@codelab/core/renderer'
import type { NodeReactI } from '@codelab/shared/interface/node'
import { nodeTypeLiterals } from '@codelab/shared/interface/node'

const deleteButton: NodeReactI = {
  type: 'React.Button',
  props: {
    type: 'danger',
    onClick: {
      __type: ['Eval'],
      value:
        'return () => this.handledelete.value.value(this.record.value._id)',
    },
  },
  children: [
    {
      type: 'React.Text',
      props: {
        value: 'Delete',
      },
    },
  ],
}

const editButton: NodeReactI = {
  type: 'React.Button',
  props: {
    type: 'React.warning',
    onClick: {
      __type: ['Eval'],
      value: 'return () => this.handleedit.value(this.record._id)',
    },
  },
  children: [
    {
      type: 'React.Text',
      props: {
        value: 'Edit',
      },
    },
  ],
}

const parentTag: NodeReactI = {
  type: 'React.Tag',
  props: {
    color: {
      eval: true,
      value: 'return this.props.record.value.parent? "geekblue" : "white"',
    },
    onClick: {
      __type: ['Eval'],
      value: 'return () => this.selectnode.value.value(this.record.parent)',
    },
  },
  children: [
    {
      type: 'React.Text',
      props: {
        value: { __type: ['Eval'], value: 'return this.record.parent' },
      },
    },
  ],
}

const propsTable: NodeReactI = {
  type: 'React.Table',
  props: {
    showHeader: false,
    pagination: false,
    locale: { emptyText: ' ' },
    dataSource: {
      eval: true,
      value: 'return this.props.record.value.props',
    },
    columns: [
      { title: 'Key', dataIndex: 'key', key: 'key', width: '50%' },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        width: '50%',
      },
    ],
  },
}

const childrenTags: NodeReactI = {
  type: 'React.Table',
  props: {
    rowKey: '_id',
    showHeader: false,
    pagination: false,
    locale: { emptyText: ' ' },
    dataSource: {
      eval: true,
      value: 'return this.props.record.value.children',
    },
    columns: [
      {
        dataIndex: '_id',
        key: '_id',
        render: {
          type: 'React.Tag',
          props: {
            color: 'magenta',
            onClick: {
              eval: true,
              value:
                'return () => this.props.selectnode.value.value.value(this.props.record.value._id)',
            },
          },
          children: [
            {
              type: 'React.Text',
              props: {
                value: {
                  eval: true,
                  value: 'return this.props.record.value._id',
                },
              },
            },
          ],
        },
      },
    ],
  },
}

const filters = nodeTypeLiterals.map((type) => {
  return { text: type, value: type }
})

const onTypeFilter = (value: any, record: any) => record.type === value

export const tableData: NodeReactI = {
  type: 'React.Table',
  props: {
    dataSource: {
      __type: ['Eval'],
      value: 'return this.data',
    },
    columns: [
      {
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        filters,
        onFilter: onTypeFilter,
      },
      {
        title: 'Props',
        dataIndex: 'props',
        key: 'props',
        render: propsTable,
      },
      {
        title: 'Parent',
        dataIndex: 'parent',
        key: 'parent',
        render: parentTag,
      },
      {
        title: 'Children',
        dataIndex: 'children',
        key: 'children',
        render: childrenTags,
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: {
          type: 'React.Space',
          children: [editButton, deleteButton],
        },
      },
    ],
  },
}

export type TableProps = {
  data: any
  selectnode: Function
  handleedit: Function
  handledelete: Function
}

export const Table = Renderer.components<TableProps>(tableData)