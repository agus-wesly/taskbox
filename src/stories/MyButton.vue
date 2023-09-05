<template>
  <button class="btn" :class="classes">{{ content }}</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  type: 'primary' | 'secondary' | 'link'
  variant: 'default' | 'outline'
  size: 'sm' | 'md' | 'lg'
  content: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  variant: 'default',
  size: 'sm',
  content: 'Button',
})

const classes = computed(() => ({
  [`btn-${props.type}`]: true,
}))
</script>

<style scoped></style>
