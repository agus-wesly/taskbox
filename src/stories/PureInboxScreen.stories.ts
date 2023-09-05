import { Meta, StoryObj } from '@storybook/vue3'
import { fireEvent, within } from '@storybook/testing-library'

import PureInboxScreen from './PureInboxScreen.vue'

const meta = {
  component: PureInboxScreen,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {},

  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} satisfies Meta<typeof PureInboxScreen>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
export const Error: Story = {
  args: {
    error: true,
  },
}

export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'))
    await fireEvent.click(canvas.getByLabelText('pinTask-2'))
    await fireEvent.click(canvas.getByLabelText('pinTask-4'))
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'))
  },
}
