<template>
  <div class="mt-10">
    <h1 class="text-2xl mb-5">{{taskStatus}} tasks</h1>
    <Task
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
    />
  </div>
</template>

<script setup>
import Task from "@/components/Task.vue";
import {computed} from "vue";

const props = defineProps({
  tasks: Array,
  taskStatus: String
});

const filteredTasks = computed(() => {
  return props.tasks.filter(task => task.status === props.taskStatus);
});
</script>
