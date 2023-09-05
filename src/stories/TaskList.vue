<template>
  <PureTaskList
    :tasks="tasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script setup lang="ts">
import PureTaskList from './PureTaskList.vue'
import { useTaskStore } from '../store/store'

const { tasks, archiveTask, pinTask } = useTaskStore()
</script>
