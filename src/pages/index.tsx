import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { ProjectStack } from '../components/projects'

import { Heading, Button } from '@kiqr/react'
import { useGet } from '../lib/requests'

const Dashboard: NextPage = () => {
  const { data: user } = useGet('/v1/me')
  const { data: projects, isLoading: projectsLoading } = useGet('/v1/projects')

  return (
    <>
      <Head>
        <title>Dashboard — KIQR</title>
      </Head>
      <Heading
        title="Dashboard"
        subtitle={`Welcome back, ${user?.name}! What project do you want to work with today?`}
      />

      {!projectsLoading && projects.length == 0 ? (
        <CreateFirstProject />
      ) : (
        <ProjectStack projects={projects} isLoading={projectsLoading} />
      )}
    </>
  )
}

export const CreateFirstProject = () => {
  return (
    <section className="mt-5 py-24 bg-white border border-slate-200 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-20 lg:mb-0">
            <div className="max-w-md mx-auto">
              <h2 className="mb-8 text-4xl md:text-5xl font-heading font-bold text-slate-900 md:leading-15">
                Get started now by creating your first{' '}
                <span className="text-primary-700">project</span>.
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                We couldn&apos;t find any <strong>projects</strong> on your
                account. Get started now by creating a new project or by import
                a collection of projects.
              </p>
              <div className="flex gap-x-5 w-full space-between">
                <Link href="/projects/new" passHref>
                  <a>
                    <Button text="Create a project" type="primary" />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <Button text="Join an existing project" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-32">
            <div className="relative max-w-max mx-auto">
              <img
                className="absolute top-0 right-0 -mt-6 lg:-mt-12 -mr-6 lg:-mr-12 w-20 lg:w-auto z-10"
                src="/assets/images/circle.svg"
                alt=""
              />
              <img
                className="absolute bottom-0 left-0 -mb-6 lg:-mb-10-ml-6 lg:-ml-12 w-20 lg:w-auto"
                src="/assets/images/square.svg"
                alt=""
              />
              <img
                className="relative"
                src="/assets/images/undraw_team_spirit.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
