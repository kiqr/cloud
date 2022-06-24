import { ReactElement } from 'react'
import { Logo } from '@kiqr/react'

import Link from 'next/link'

export default function Sidebar(): ReactElement {
  return (
    <aside id="sidebar">
      <div className="logo-container">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <section id="navigation">
        <nav>
          <ul>
            <li>
              <a className="active">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  )
}
