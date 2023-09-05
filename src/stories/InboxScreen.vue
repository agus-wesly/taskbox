<template>
  <PureInboxScreen :error="error" />
</template>

<script setup lang="ts">
import PureInboxScreen from './PureInboxScreen.vue'
import { useTaskStore } from '../store/store'

const { error } = useTaskStore()
</script>
