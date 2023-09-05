import { Meta, StoryObj } from '@storybook/vue3'
import PureTaskList from './PureTaskList.vue'

import * as TaskStories from './Task.stories'

import { action } from '@storybook/addon-actions'

const meta = {
  component: PureTaskList,
  title: 'PureTaskList',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    'onArchive-task': {},
    'onPin-task': {},
  },

  decorators: [
    () => ({
      template: '<div style="margin: 3em"><story/></div>',
    }),
  ],

  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} satisfies Meta<typeof PureTaskList>

export default meta

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
}

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tasks: [
      {
        ...TaskStories.Default.args?.task!,
        id: '1',
        title: 'Task 1',
      },
      {
        ...TaskStories.Default.args?.task!,
        id: '2',
        title: 'Task 2',
      },
      {
        ...TaskStories.Default.args?.task!,
        id: '3',
        title: 'Task 3',
      },
      {
        ...TaskStories.Default.args?.task!,
        id: '4',
        title: 'Task 4',
      },
      {
        ...TaskStories.Default.args?.task!,
        id: '5',
        title: 'Task 5',
      },
      {
        ...TaskStories.Default.args?.task!,
        id: '6',
        title: 'Task 6',
      },
    ],
  },
}

export const WithPinned: Story = {
  args: {
    tasks: [
      ...Default.args?.tasks?.slice(0, 5)!,
      { id: '6', state: 'TASK_PINNED', title: 'Task 6' },
    ],
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const NoTask: Story = {
  args: {
    ...Loading.args,
    loading: false,
  },
}
