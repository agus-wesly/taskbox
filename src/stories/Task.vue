<template>
  <div :class="classes">
    <label
      :for="'checked' + task.id"
      :aria-label="'archiveTask-' + task.id"
      class="checkbox"
    >
      <input
        type="checkbox"
        :checked="isChecked"
        disabled
        :name="'checked' + task.id"
        :id="'archiveTask-' + task.id"
      />
      <span class="checkbox-custom" @click="archiveTask" />
    </label>
    <label :for="'title-' + task.id" :aria-label="task.title" class="title">
      <input
        type="text"
        readonly
        :value="task.title"
        :id="'title-' + task.id"
        name="title"
        placeholder="Input title"
      />
    </label>
    <button
      v-if="!isChecked"
      class="pin-button"
      @click="pinTask"
      :id="'pinTask-' + task.id"
      :aria-label="'pinTask-' + task.id"
    >
      <span class="icon-star" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type TASK =
  | 'TASK_INBOX'
  | 'TASK_PINNED'
  | 'TASK_ARCHIVED'
  | Omit<string, 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'>

type Props = {
  task: {
    id: string
    state: TASK & string
    title: string
  }
}

export type Task = Props['task']

const props = withDefaults(defineProps<Props>(), {
  task() {
    return {
      id: '',
      state: '',
      title: '',
    }
  },
})

const emit = defineEmits(['archive-task', 'pin-task'])

const classes = computed(() => ({
  'list-item TASK_INBOX': props.task.state === 'TASK_INBOX',
  'list-item TASK_PINNED': props.task.state === 'TASK_PINNED',
  'list-item TASK_ARCHIVED': props.task.state === 'TASK_ARCHIVED',
}))

const isChecked = computed(() => props.task.state === 'TASK_ARCHIVED')

function archiveTask() {
  emit('archive-task', props.task.id)
}

function pinTask() {
  emit('pin-task', props.task.id)
}
</script>

<style scoped></style>
