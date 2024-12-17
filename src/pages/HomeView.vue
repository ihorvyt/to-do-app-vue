<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="task" hide-details label="New task" />
          </v-col>
          <v-col cols="auto" class="flex align-center">
            <v-btn @click="onCreateClick" :disabled="!task.trim()">Create</v-btn>
          </v-col>
        </v-row>

        <TaskList :tasks="tasks" task-status="completed" />
        <TaskList :tasks="tasks" task-status="un-completed" />
        <TaskList :tasks="tasks" task-status="in-progress" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import {provide, ref} from "vue";
import TaskList from "@/components/TaskList.vue";

const task = ref("");
const tasks = ref([]);

const onCreateClick = () => {
  if (task.value.trim()) {
    tasks.value.push({
      id: Date.now(),
      title: task.value,
      status: "un-completed"
    });
    task.value = "";
  }
};

const deleteTask = (task) => {
  tasks.value = tasks.value.filter((item) => {
    return item.id !== task.id;
  });
}

provide("deleteTask", deleteTask);
</script>
