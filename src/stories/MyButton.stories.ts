import type { Meta, StoryObj } from '@storybook/vue3'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import MyButton from './MyButton.vue'

const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'link'] },
    variant: { control: 'select', options: ['default', 'ouline'] },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: { type: 'primary', size: 'md', variant: 'default', content: 'Button' },
} satisfies Meta<typeof MyButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
}

export const Link: Story = {
  args: {
    type: 'link',
  },
}
