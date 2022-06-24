import { ReactElement } from 'react'

import Sidebar from '../Sidebar'
import Toolbar from '../Toolbar'

interface EditorLayoutProps {
  children?: React.ReactNode
}

export const EditorLayout = ({ children }: EditorLayoutProps): ReactElement => {
  return (
    <div className="editor-layout">
      <Sidebar />
      <main id="body">
        <Toolbar />
        <section className="m-5">{children}</section>
      </main>
    </div>
  )
}
