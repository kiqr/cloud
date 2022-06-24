export interface ProjectCardProps {
  project?: ProjectProps | null
}

export interface ProjectProps {
  id: string
  name: string
  description: string
  setup_state: string
}

export interface ProjectStackProps {
  projects: ProjectProps[]
  isLoading: boolean
}
