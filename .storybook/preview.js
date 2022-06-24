import '../src/styles/globals.css';

/**
 * FortAwesome
 * Add icons to the FontAwesome library.
**/
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faDashboard,
  faBook,
  faTerminal,
  faSignOutAlt,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCaretDown,
  faDashboard,
  faBook,
  faTerminal,
  faSignOutAlt,
  faPlusCircle
)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};