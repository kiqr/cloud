import { ReactElement } from 'react'

import { Button, Dropdown } from '@kiqr/react'

import { useGet } from '../../lib/requests'

import { FaTerminal, FaBook, FaSignOutAlt } from 'react-icons/fa'

const ProjectDropdown = (): ReactElement => {
  return <Dropdown />
}

const UserDropdown = (): ReactElement => {
  const { data: user, isLoading } = useGet('/v1/me')

  if (isLoading || !user) return <Dropdown />

  return (
    <Dropdown
      line1={user.name}
      line2={user.email}
      avatarUrl={user.avatar_url}
    />
  )
}

export default function Toolbar(): ReactElement {
  return (
    <nav id="toolbar">
      <ProjectDropdown />
      <div className="flex items-center gap-x-5 ml-auto">
        <Button icon={<FaTerminal />} size="sm" />
        <Button icon={<FaBook />} size="sm" />
        <div className="h-10 w-[1px] bg-neutral-100"></div>
        <UserDropdown />
        <div className="h-10 w-[1px] bg-neutral-100"></div>
        <Button icon={<FaSignOutAlt />} size="xs" />
      </div>
    </nav>
  )
}
