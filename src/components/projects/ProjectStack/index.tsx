import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ProjectCard } from '../'
import type { ProjectProps, ProjectStackProps } from '../'

import Link from 'next/link'

export const ProjectStack = ({ projects, isLoading }: ProjectStackProps) => {
  if (isLoading) {
    return (
      <div className={'grid grid-cols-4 gap-5'}>
        <ProjectCard />
        <CreateProjectCard />
      </div>
    )
  }

  return (
    <div className={'grid grid-cols-4 gap-5'}>
      {projects.map((project: ProjectProps) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <CreateProjectCard />
    </div>
  )
}

const CreateProjectCard = () => (
  <Link href="/projects/new">
    <a className="border-2 border-dotted border-slate-200 hover:border-slate-300 rounded py-20">
      <div className="flex flex-col h-full items-center justify-center text-slate-400 gap-y-2 font-bold hover:text-primary-700 transition">
        <span className="text-3xl">
          <FontAwesomeIcon icon="plus-circle" />
        </span>
        Create a new project
      </div>
    </a>
  </Link>
)
