import { CopyOutlined } from '@ant-design/icons'
import { mobxStateKeyTemplate } from '@codelab/frontend/modules/store'
import { copyTextToClipboard } from '@codelab/frontend/shared/utils'
import { Button, message } from 'antd'
import React from 'react'

interface CopyPathButtonProps {
  path: string
}

export const CopyPathButton = ({ path }: CopyPathButtonProps) => {
  const { start, end } = mobxStateKeyTemplate
  const success = () => message.success('Copied to clipboard !', 1)

  const onCopy = async () => {
    await copyTextToClipboard(`${start}${path}${end}`)
    await success()
  }

  return <Button icon={<CopyOutlined />} onClick={onCopy} size="small" />
}
