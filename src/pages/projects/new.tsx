import Head from 'next/head'
import { Button, Heading } from '@kiqr/react'

import { useForm } from 'react-hook-form'

import type { NextPage } from 'next'

import { FaPlusCircle } from 'react-icons/fa'

type ProjectFormProps = {
  name: string
}

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup
  .object({
    name: yup.string().min(5).max(30).required(),
  })
  .required()

const projectsResolver = yupResolver(schema)

const NewProject: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ProjectFormProps>({
    resolver: projectsResolver,
    mode: 'onChange',
  })

  const onSubmit = (data: ProjectFormProps) => {
    console.log('POST', data)
  }

  return (
    <>
      <Head>
        <title>Create a new project — KIQR</title>
      </Head>
      <Heading
        title="Create a new project"
        subtitle="A project could be for example a website or an app."
      />
      <div className="grid md:grid-cols-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5"
        >
          <section
            id="group-details"
            className="bg-white border border-slate-200"
          >
            <header className="h-12 flex items-center border-b border-slate-200 px-5">
              <h2 className="h-12 flex items-center font-bold text-primary-700">
                Project details
              </h2>
            </header>
            <main className="flex flex-col border-b border-b-slate-300 p-5">
              <div>
                <label
                  htmlFor="name"
                  className="flex font-bold text-neutral-500 text-sm mb-2 items-center"
                >
                  Name
                </label>
                <input
                  {...register('name', {
                    required: false,
                    minLength: 5,
                    maxLength: 30,
                  })}
                  type="text"
                  className="flex-1 py-2 text-sm text-slate-600 border-b-2 border-slate-200 w-full focus:border-primary-700 focus:ring-0 focus:outline-0"
                  placeholder="Name your project"
                />
                {errors.name && (
                  <span className="text-red-500 font-bold text-xs">
                    <>{errors.name.message}</>
                  </span>
                )}
              </div>
            </main>
          </section>
          <span>
            <Button
              type="primary"
              text="Create project"
              icon={<FaPlusCircle />}
              disabled={!isValid}
            />
          </span>
        </form>
        <img src="/assets/images/undraw_team_spirit.svg" alt="" />
      </div>
    </>
  )
}

export default NewProject
