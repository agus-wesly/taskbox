import { StoryObj } from '@storybook/vue3'
import Task from './Task.vue'

import { action } from '@storybook/addon-actions'

const meta = {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export default meta

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
}

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    task: {
      id: '',
      state: 'TASK_INBOX',
      title: '',
    },
  },
}

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args!.task!,
      state: 'TASK_PINNED',
    },
  },
}

export const Archived: Story = {
  args: {
    task: {
      ...Default.args!.task!,
      state: 'TASK_ARCHIVED',
    },
  },
}
