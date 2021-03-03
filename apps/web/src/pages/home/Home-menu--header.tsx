import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Link from 'next/link'
import React from 'react'
import {
  LoginUserButton,
  RegisterUserButton,
  SignOutUserButton,
  useCurrentUser,
} from '../../useCases/user'
import { Page, disableMenuHoverEffects } from '@codelab/frontend'

/**
 * We always show `Login` `Register` even if user is login. We simply redirect them to `/apps` page if they're already logged in.
 */
export const HomeMenuHeader = () => {
  const currentUser = useCurrentUser()

  const authenticatedUserMenu = (
    <>
      <Menu.Item key="3" style={{ float: 'right' }}>
        <SignOutUserButton />
      </Menu.Item>
      <Menu.SubMenu key="4" style={{ float: 'right' }} icon={<UserOutlined />}>
        <Menu.Item>{currentUser?.email}</Menu.Item>
      </Menu.SubMenu>
    </>
  )

  const guestUserMenu = (
    <>
      <Menu.Item
        key="3"
        style={{
          float: 'right',
          ...disableMenuHoverEffects,
        }}
        icon={<RegisterUserButton />}
      />
      <Menu.Item
        key="4"
        style={{ float: 'right', ...disableMenuHoverEffects }}
        icon={<LoginUserButton />}
      />
    </>
  )

  return (
    <>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        triggerSubMenuAction="click"
      >
        <Menu.Item
          key="1"
          icon={
            <Link href={Page.HOME.url}>
              <HomeOutlined />
            </Link>
          }
        />
        <Menu.Item key="2">
          <Link href={Page.APP_LIST.url}>
            <a>Apps</a>
          </Link>
        </Menu.Item>
        {currentUser ? authenticatedUserMenu : guestUserMenu}
      </Menu>
    </>
  )
}