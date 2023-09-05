import { defineStore } from 'pinia'
import { computed, ref, toRef } from 'vue'
import { Task } from '../stories/Task.vue'

const defaultTasks: Task[] = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
]

export const useTaskStore = defineStore('counter', () => {
  const tasks = ref(defaultTasks)
  const status = ref('idle')
  const error = ref(false)

  function archiveTask(id: string) {
    const task = tasks.value.find((task) => task.id === id)

    if (task) {
      task.state = 'TASK_ARCHIVED'
    }
  }

  function pinTask(id: string) {
    const task = tasks.value.find((task) => task.id === id)
    if (task) {
      task.state = 'TASK_PINNED'
    }
  }

  const getFilteredTasks = computed(() => {
    const filteredTasks = tasks.value.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    )
    return filteredTasks
  })

  return {
    tasks,
    status,
    archiveTask,
    pinTask,
    getFilteredTasks,
    error,
  }
})
