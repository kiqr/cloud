import { ComponentMeta } from '@storybook/react'

import { LoadingScreen as LoadingScreenComponent } from './index'

export default {
  title: 'Components/LoadingScreen',
  component: LoadingScreenComponent,
} as ComponentMeta<typeof LoadingScreenComponent>

export const LoadingScreen = () => <LoadingScreenComponent />
