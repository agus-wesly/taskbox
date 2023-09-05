<template>
  <div class="list-items">
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </template>
    <template v-else-if="isEmpty">
      <div class="wrapper-message">
        <span class="icon-check" />
        <p class="title-message">You have no tasks</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
    </template>
    <template v-else>
      <TaskVue
        v-for="task in taskInOrder"
        :key="task.id"
        :task="task"
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TaskVue from './Task.vue'
import type { Task } from './Task.vue'

type Props = {
  tasks: Task[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  tasks() {
    return []
  },
})

const emit = defineEmits(['archive-task', 'pin-task'])

const isEmpty = computed(() => !props.tasks.length || !props.tasks)

const taskInOrder = computed(() => [
  ...props.tasks.filter((t) => t.state === 'TASK_PINNED'),
  ...props.tasks.filter((t) => t.state !== 'TASK_PINNED'),
])

function onArchiveTask(id: string) {
  emit('archive-task', id)
}

function onPinTask(id: string) {
  emit('pin-task', id)
}
</script>

<style scoped></style>
