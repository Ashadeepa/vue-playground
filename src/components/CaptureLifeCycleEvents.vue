<template>
  <div></div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

const emits = defineEmits<{
  (e: "captureLifeCycleEvents", event: Array<string>): void;
}>();
const events:Array<string> = []
onBeforeMount(() => {
    events.push('onBeforemounted')
})
onMounted(() => {
    events.push('mounted : can manipulate DOM here')
})
onBeforeUnmount(()=>{
    events.push('onBeforeUnmount');
})
onUnmounted(() => {
    events.push('onUnmounted: can clean code like unsubscribing timers');
    emits("captureLifeCycleEvents", events);
})


</script>

<style scoped>

</style>