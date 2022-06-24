/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  AvatarStack,
  Card,
  Padding,
  Placeholder,
  ProgressBar,
} from '@kiqr/react'

import type { ProjectCardProps } from '../'

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      title={project?.name}
      subtitle="Website"
      avatarUrl={`https://avatars.dicebear.com/api/identicon/${project?.id}.svg`}
    >
      <Padding theme="tinted">
        <div className="flex items-center">
          <div className="flex w-1/2">
            {project ? (
              <AvatarStack spacing={-3}>
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/rk.svg"
                  type={'circle'}
                />
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/ju.svg"
                  type={'circle'}
                />
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/ts.svg"
                  type={'circle'}
                />
              </AvatarStack>
            ) : (
              <div className="flex -space-x-3">
                <div className="content-loader rounded-full border-2 border-white w-9 h-9" />
                <div className="content-loader rounded-full border-2 border-white w-9 h-9" />
                <div className="content-loader rounded-full border-2 border-white w-9 h-9" />
              </div>
            )}
          </div>
          <div className="flex flex-col w-1/2 text-right text-xs text-slate-400 gap-y-1">
            <strong className="text-primary-700">
              {project?.id ? (
                'Project ID'
              ) : (
                <Placeholder length={10} size="small" />
              )}
            </strong>
            {project?.id || <Placeholder />}
          </div>
        </div>
      </Padding>
      <div className="p-5">
        <ProgressBar
          title="Project status"
          statusText={project?.setup_state}
          percentage={0}
        />
      </div>
    </Card>
  )
}
