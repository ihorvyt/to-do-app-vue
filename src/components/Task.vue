<template>
  <v-row :spacing="4" class="border-amber-950 border-2 p-4 rounded-[1rem]">
    <v-col>
      <v-btn v-if="task.status !== 'completed'" class="text-green-700 mr-2" @click="toggleStatus('completed')">
        DONE
      </v-btn>
      <v-btn v-if="task.status === 'completed'" class="text-red-700 mr-2" @click="toggleStatus('un-completed')">
        UNDONE
      </v-btn>
      <v-btn v-if="task.status !== 'in-progress'" class="text-gray-700 mr-2" @click="toggleStatus('in-progress')">
        Move in in-progress block
      </v-btn>
      <v-btn class="text-green-700 mr-2" @click="onDeleteClick">
        DELETE
      </v-btn>
      <p class="text-2xl pt-4">{{ task.title }}</p>
    </v-col>
  </v-row>
</template>

<script setup>
import {inject} from "vue";

const props = defineProps({
  task: Object,
  deleteTask: Function
});

const toggleStatus = (status) => {
  props.task.status = status;
};


const deleteTask = inject("deleteTask");

const onDeleteClick = () => {
  if (deleteTask) {
    deleteTask(props.task);
  }
};
</script>

<style lang="scss" scoped>

</style>
