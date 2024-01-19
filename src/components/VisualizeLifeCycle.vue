<script setup lang="ts">
import { nextTick, ref } from "vue";
import CaptureLifeCycleEvents from './CaptureLifeCycleEvents.vue'


defineProps<{
  msg: string
}>()

const triggerLifeCycleFlag =ref<boolean>(false);
const lifeCycleEventSequence = ref<Array<string>>([]);

function captureLifeCycleEvents(events:Array<string>){
  lifeCycleEventSequence.value = events;
}

async function  moun_unmount(){
  triggerLifeCycleFlag.value=true;
 await nextTick();
  triggerLifeCycleFlag.value=false;
}

</script>

<template>
  <div class="heading">
    {{msg}}
  </div>
  <button @click="moun_unmount">{{'Click here'}}</button>
  <CaptureLifeCycleEvents v-if="triggerLifeCycleFlag" @capture-life-cycle-events="captureLifeCycleEvents"/>
  <ul>
        <li v-for="e of lifeCycleEventSequence" :key="e">
        {{ e }}
        </li>
    </ul>
</template>

<style scoped>

</style>
